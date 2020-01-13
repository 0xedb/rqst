const makePdf = require("../util/pdf");
const emailUser = require("../util/email");

module.exports = (req, res) => {
  if (req.method === "POST" || req.method === "OPTIONS") {
    const { fullName: name, email } = req.body;
    makePdf(req.body)
      .then(file => {
        console.log(file);
        emailUser({ file, name, email })
          .then(() => console.log("email sent done"))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  } else {
    res.send("hello");
  }
};
