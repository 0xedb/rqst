const makePdf = require("../util/pdf");
const sendMail = require("../util/email");

module.exports = (req, res) => {
  // let data = JSON.parse(req.body);
  // let dd = JSON.parse(JSON.stringify(req.body));
  res.send("hello");
  console.log("\n", req.body);

  // console.log(dd);
  // const { fullName, amount, budget, org, purpose, email } = JSON.parse(
  //   req.body
  // );
  // console.log(fullName, amount, org, budget, purpose, email);
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
