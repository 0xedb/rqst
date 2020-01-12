const makePdf = require("../util/pdf");

module.exports = (req, res) => {
  makePdf(req.body);
  if (req.method === "POST") { 
    const { data } = req.body;
    res.send(data);
  }
};
