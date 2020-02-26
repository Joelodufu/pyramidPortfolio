var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var mailGun = require('nodemailer-mailgun-transport');



const auth = {
    auth: {
        api_key: '2d172c17e821673f34d14a55a0d07210-9dda225e-986c6f20',
        domain: 'sandboxa0e1fc2ba32d4f0c8c4276e28e51144f.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (username, email, phone, plans, cb) => {
    const mailOptions = {
        from: email,
        to: 'pyeramid.cc@gmail.com',
        subject: `requesting ID ${Date.now()}`,
        text: 'NAME: ' + username + '. PLAN: ' + plans + '. WHATSAPP: ' + phone
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
};

module.exports = sendMail;