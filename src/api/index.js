const makePdf = require("../util/pdf");
const sendMail = require("../util/email");

module.exports = (req, res) => { 
  res.send("hello");
  console.log("\n", req.body); 
  return;
  if (req.method === "POST" || req.method === "OPTIONS") {
    const { fullName: name, email } = req.body;
    makePdf({ ...req.body })
      .then(file => {
        console.log("file");
        sendMail({ file, name, email })
          .then(() => res.send("sent"))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
};
