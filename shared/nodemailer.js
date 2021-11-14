const nodemailer = require("nodemailer");

const mailer = async (to, subject) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "islamoashraf@gmail.com", // generated ethereal user
      pass: "whsgzircvkmkahgx", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: "islamoashraf@gmail.com", // sender address
    to, // list of receivers
    subject, // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};
module.exports = mailer;
