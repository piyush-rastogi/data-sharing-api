const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html}) => {
        let transporter = nodemailer.createTransport({
            host: "smtp-relay.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "rastogi.piyush026@gmail.com",
                pass: "rzocoppnfxabkank", // generated ethereal password
            },
        });

        // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `inShare <${from}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}