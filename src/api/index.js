const makePdf = require("../util/pdf");
const sendMail = require("../util/email");

module.exports = (req, res) => {
  if (req.method === "POST") {
    makePdf(req.body)
      .then(file => {
        console.log("file");
        sendMail(file)
          .then(() => res.send("sent"))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
};
