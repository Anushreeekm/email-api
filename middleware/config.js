const nodeMailer = require('nodemailer')

const mailConfig = async (to,sub,content) => {
    try {
        // mail config 
        const transporter = await nodeMailer.createTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_ID,
                pass: process.env.MAIL_PASS
            }
        });

        // transport mail
        let info = await transporter.sendMail({
            from: process.env.MAIL_ID,
            to,
            subject: sub,
            html: `<div> ${content} </div>`
        });

        return info;
    }catch(err) {
        return err.message
    }
}

module.exports = mailConfig