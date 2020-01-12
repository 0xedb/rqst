module.exports = (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    res.send(req.body);
  }
};
