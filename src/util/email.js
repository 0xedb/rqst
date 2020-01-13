const nodemailer = require("nodemailer");

const CONFIG = {
  host: process.env.RQST_SERVER,
  port: process.env.RQST_PORT,
  secure: true,
  auth: {
    user: process.env.RQST_USER,
    pass: process.env.RQST_SECRET
  }
};

const emailUser = async ({ file, name, email }) => {
  const transporter = nodemailer.createTransport({ ...CONFIG });

  let info = await transporter.sendMail({
    from: `"${name} 👻" <fundus.flask@gmail.com>`,
    to: "fundus.flask@gmail.com",
    subject: "Fund Request ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
    attachments: [{ filename: "Fund Request", path: file }]
  });
  console.log(info);
};

module.exports = emailUser;
