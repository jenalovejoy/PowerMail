const nodemailer = require("nodemailer");
// const fs = require('fs');

const express = require('express');
var router = express.Router();

// SMTP
// smtp.gmail.com
// SSL Port: port 465
// TLS/STARTTLS Port: port 587 

router.post('/smtp', function(req, res, next) {
    // console.log(req.body.host);
    // console.log(req.body.port);
    // console.log(req.body.email);
    // console.log(req.body.pw);
    // console.log(req.body.from);
    // console.log(req.body.recipient);
    // console.log(req.body.subject);
    // console.log(req.body.text);

    let transporter = nodemailer.createTransport({
        host: "smtp." + req.body.host + ".com",
        port: req.body.port,
        secure: false,
        auth: {
            user: req.body.email, 
            pass:req.body.pw     
        }
    });
    let emailMsg = {
        from: req.body.from, 
        to: req.body.recipient, 
        subject: req.body.subject, 
        text: req.body.text, 
        html: req.body.html 
    }


    // let emailMsg = {
    //     from: '"Dominic Luu" <dn.luu03@gmail.com>',
    //     to: "d_luu17@yahoo.com",     // target recipient
    //     subject: "Hello",            // subject line
    //     text: "Hi hi hi",            // body in plain text
    //     html: "<b>Hello World</b>"   // body in HTML
    // }

    transporter.sendMail(emailMsg);


    res.send('Email Sent');
    res.end();
});



module.exports = router;