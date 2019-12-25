const express = require("express");
const cors = require("cors");
const sendGrid = require("@sendGrid/mail");
const config = require("./config.json"); //includes target email and sendgrid_api_key

const app = express();

app.use(cors());

app.post("/contact", (req, res) => {
  console.log("attempting to send an email");
  console.log(req.body);
  sendGrid.setApiKey(config.SENDGRID_API_KEY);
  const msg = {
    to: config.MY_EMAIL,
    from: req.body.email,
    subject: "Portfolio - contact me",
    text: req.body.msg
  };
  sendGrid
    .send(msg)
    .then(result => res.status(200).send())
    .catch(err => res.status(400).send());
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}.`));
