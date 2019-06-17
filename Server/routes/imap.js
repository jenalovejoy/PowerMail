'use strict';

// Express
var express = require('express');
var router = express.Router();


// IMAP Library
const Imap = require('imap');

// let  parser = new MailParser();

// simpleParser is a higher level but 
// less powerful version of MailParser
const simpleParser = require('mailparser').simpleParser;


// http://localhost:3001/imap?email={** email **}&host={** host **}&auth={** password **}&num={** num **}
/* GET users listing. */
router.get('/imap', function(req, res, next) {
    const num = req.query.num; 
    const email = req.query.email + '@' + req.query.host + '.com';
    const pw = req.query.auth;

    // console.log(num);
    var imap = new Imap({
        user: email, 
        password: pw,
        host: 'imap.' + req.query.host + '.com',
        port: 993,
        tls: true
    });


    // Email list object to build up
    let emailList = {};


    function openInbox(cb) {
        imap.openBox('INBOX', true, cb);
    }

    let printOut = "";
    let emailId = 1;
    imap.once('ready', () => {
        openInbox(function(err, box) {
            if (err) throw err;

            let textStream = "";
            let MESSAGE_NUMBER = 5040;
            var f;
            if (box.messages.total < num) {
                f = imap.seq.fetch(`${box.messages.total}` + ':*', { bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)','TEXT'] });
            } else  {
                console.log("ELSE");
                f = imap.seq.fetch(`${box.messages.total - num + 1}` + ':*', { bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)','TEXT'] });
            }

            f.on('message', function(msg, seqno) {
                let email = {};
                // var prefix = '(#' + seqno + ') ';
                let headerData;
                msg.on('body', function(stream, info) {
                    // IMAP gets a stream of data for the email that is both plain text and HTML
                    var buffer = '';
                    stream.on('data', function(chunk) {
                        buffer += chunk.toString('utf8')
                    });
                    stream.once('end', () => {
                        headerData = Imap.parseHeader(buffer);
                        
                        // Initial parse of text body
                        // Actually barely does anything but it makes the format easier for RegEx
                        simpleParser(buffer, (err, parsed) => {
                            if (err) throw err;

                            if (parsed.text) {
                                textStream += parsed.text;
                            }
                            // Regex to get everything between and including the first and last HTML tags
                            // Robust as fuck but still breaks on some weird cases
                            // let regex = /(quoted-printable(\s|\n)*)(<\/?([a-z0-9]|\W)*>(.|\n)*<\/?[a-z0-9]*>)/;
                            // let match = regex.exec(textStream);
                        
                            // If RegEx returns not null (match is found)
                            // if (match) {
                                // console.log("Match found");
                                // printOut = match[3];
                            // } else {
                                // regex = /(quoted-printable(\s|\n)*)?(<\/?([a-z0-9]|\W)*>(.|\n)*<\/?[a-z0-9]*>)/;
                                // match = regex.exec(textStream); 
                                // if (match) {
                                    // console.log("Match2 found");
                                    // printOut = match[3];
                                    // If there are no HTML tags found then just print the text
                                // } else {
                                    // printOut = textStream;
                                // }
                            // }
                            // email['body'] = printOut;
                            email['body'] = textStream;
                        });
                    });
                });
                msg.once('attributes', function(attrs) {
                    // console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                });
                msg.once('end', function() {
                
                    // parse/compile header info
                    let headerFields = {};
                    let textToParse = headerData["from"];
                    const REGEX = /.*/;
                    let match = REGEX.exec(textToParse);
                    if (match) {
                        headerFields['from'] = match[0];
                    }

                    textToParse = headerData['date'];
                    match = REGEX.exec(textToParse);
                    if (match) {
                        headerFields['date'] = match[0];
                    }

                    textToParse = headerData['subject'];
                    match = REGEX.exec(textToParse);
                    if (match) {
                        headerFields['subject'] = match[0];
                    }
                    
                    // Do we need this???
                    textToParse = headerData['to'];
                    match = REGEX.exec(textToParse);
                    if (match) {
                        headerFields['to'] = match[0];
                    }
                    email['header'] = headerFields;
                    emailList[emailId] = email;
                    emailId += 1;

                });
            });
            f.once('error', function(err) {
                console.log('Fetch error: ' + err);
            });
            f.once('end', function() {
                // console.log(emailList[4]);
                console.log('Done fetching all messages!');
                imap.end();
            });
        });
    });


    // Post-imap-function error check
    imap.once('error', function(err) {
        console.log(err);
    });

    // Close connection 
    imap.once('end', function() {
        // console.log();
        // console.log("printout");
        // console.log(printOut);

        // Object.keys(emailList).forEach((id) => {
        //     console.log(id);
        //     console.log(emailList[id]['header']);
        // });

        console.log('Connection ended');

        // app.get('/', (req, res) => {
        //     res.send(printOut);
        // });

        res.json(emailList);
        res.end();
    });

    imap.connect();

});



// // Gmail auth information




module.exports = router;