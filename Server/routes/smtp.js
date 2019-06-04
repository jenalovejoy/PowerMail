const nodemailer = require("nodemailer");
const fs = require('fs');
const Express = require('express');


// SMTP
// smtp.gmail.com
// SSL Port: port 465
// TLS/STARTTLS Port: port 587 

router.get('/smtp', function(req, res, next) {
    const email = req.query.email + '@' + req.query.host + '.com';
    const pw = req.query.auth;


    // SMTP Auth
    let transporter = nodemailer.createTransport({
        host: "smtp." + req.query.host + ".com",
        port: 587,
        secure: false,
        auth: {
            user: email, 
            pass: pw 
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
});
