const nodemailer = require("nodemailer");
const jwtVerify = require("./jwtVerify");

const mailer = async (to, userName) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "islamoashraf@gmail.com",
      pass: "whsgzircvkmkahgx",
    },
  });
  //check if server is authunicated and ready to send verfiction message
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  //generate token
  const token = await jwtVerify(to);
  console.log(token);
  let info = await transporter.sendMail({
    from: "islamoashraf@gmail.com",
    to,
    subject: `Hello ${userName}`,
    text: `Hello ${to}`,
    html: `<a href="${process.env.BASE_URL}/verify/${token}">Click to verify</a>`,
  });
};
module.exports = mailer;
