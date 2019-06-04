"use strict";
const fs = require('fs');
const Express = require('express');

// Imap Library
const Imap = require('imap');
const inspect = require('util').inspect;

// NodeMailer/Mailparser Library

// Unused because I never got around to figuring out
// const MailParser = require('mailparser').MailParser;
// let  parser = new MailParser();

// simpleParser is a higher level but less powerful version of
// MailParser
const simpleParser = require('mailparser').simpleParser;

// Express library to serve HTML content
var app = Express();

const nodemailer = require("nodemailer");


// Google OAuth API???

// ***************************** Imap stuff here ****************************

// Gmail auth information
// IMAP Auth
var imap = new Imap({
    user: 'dn.luu03@gmail.com',
    password: 'BellevueCS',
    host: 'imap.gmail.com',
    port: 993,
    tls: true
});


// Email list object to build up
let emailList = {};


function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
}

// Async?
let printOut = "";
let emailId = 1;
imap.once('ready', () => {
    openInbox(function(err, box) {
        if (err) throw err;

        let textStream = "";
        let MESSAGE_NUMBER = 5040;
        MESSAGE_NUMBER = 5041; // Mary's EMail
        MESSAGE_NUMBER = 5042; // Glassdoor Article
        MESSAGE_NUMBER = 5043; // Mary's email with reply
        // var f = imap.seq.fetch(`${MESSAGE_NUMBER}:${MESSAGE_NUMBER}`, { bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)','TEXT'] });
        var f;
        if (box.messages.total < 50) {
            f = imap.seq.fetch(`${box.messages.total}` + ':*', { bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)','TEXT'] });
        } else  {
            console.log("ELSE");
            f = imap.seq.fetch(`${box.messages.total - 49}` + ':*', { bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)','TEXT'] });
        }

        f.on('message', function(msg, seqno) {
            let email = {};
            // console.log()
            // console.log('************************ Message #%d', seqno, '************************');
            var prefix = '(#' + seqno + ') ';
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
                        let regex = /(quoted-printable(\s|\n)*)(<\/?([a-z0-9]|\W)*>(.|\n)*<\/?[a-z0-9]*>)/;
                        let match = regex.exec(textStream);
                    
                        // If RegEx returns not null (match is found)
                        if (match) {
                            // console.log("Match found");
                            printOut = match[3];
                        } else {
                            regex = /(quoted-printable(\s|\n)*)?(<\/?([a-z0-9]|\W)*>(.|\n)*<\/?[a-z0-9]*>)/;
                            match = regex.exec(textStream); 
                            if (match) {
                                // console.log("Match2 found");
                                printOut = match[3];
                                // If there are no HTML tags found then just print the text
                            } else {
                                printOut = textStream;
                            }
                        }
                        email['body'] = printOut;
                    });
                });
            });
            msg.once('attributes', function(attrs) {
                // console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
            });
            msg.once('end', function() {
               
                // Compile header info
                // console.log("HEADER");
                // console.log(headerData);
                let headerFields = {};
                let textToParse = headerData["from"];
                const REGEX = /.*/;
                let match = REGEX.exec(textToParse);
                // console.log(emailId);
                if (match) {
                    // console.log("Match");
                    // console.log(match[0]);
                    headerFields['from'] = match[0];
                }

                textToParse = headerData['date'];
                match = REGEX.exec(textToParse);
                if (match) {
                    // console.log("Match");
                    // console.log(match[0]);
                    headerFields['date'] = match[0];
                }

                textToParse = headerData['subject'];
                match = REGEX.exec(textToParse);
                if (match) {
                    // console.log("Match");
                    // console.log(match[0]);
                    headerFields['subject'] = match[0];
                }
                
                // Do we need this???
                textToParse = headerData['to'];
                match = REGEX.exec(textToParse);
                if (match) {
                    // console.log("Match");
                    // console.log(match[0]);
                    headerFields['to'] = match[0];
                }
                // console.log(emailId);
                email['header'] = headerFields;
                // console.log(email['header']['from'])
                // console.log(email['header']);
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
    console.log("printout");
    // console.log(printOut);
    // console.log(emailList);
    // console.log(emailList[8]['header']);
    // for (var i = 1; i < emailId; i++) {
    //     console.log(i);
    //     if (emailList[i]['header']) {
    //         console.log(emailList[5]['header']);
    //         console.log();
    //     } else {
    //         console.log("undefined");
    //     }
    // }
    Object.keys(emailList).forEach((id) => {
        console.log(id);
        console.log(emailList[id]['header']);
    });
    console.log('Connection ended');

    app.get('/', (req, res) => {
        res.send(printOut);
    });
});

imap.connect();


// SMTP
// smtp.gmail.com
// SSL Port: port 465
// TLS/STARTTLS Port: port 587 

// ***********************************************
//         SMTP/Send Email stuff here 
// ***********************************************

// SMTP Auth
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "dn.luu03@gmail.com",
        pass: "BellevueCS"
    }
});

let emailMsg = {
    from: '"Dominic Luu" <dn.luu03@gmail.com>',
    to: "d_luu17@yahoo.com",     // target recipient
    subject: "Hello",            // subject line
    text: "Hi hi hi",            // body in plain text
    html: "<b>Hello World</b>"   // body in HTML
}

// transporter.sendMail(emailMsg);


const PORT = process.env.PORT || 3000;

app.listen(PORT, _ => {
    console.log(`Server started on port ${PORT}`);
    console.log();
});