const express = require("express");
const cors = require("cors");
const sendGrid = require("@sendGrid/mail");
const config = require("./config.json"); //includes target email and sendgrid_api_key

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
  sendGrid.setApiKey(config.SENDGRID_API_KEY);
  const msg = {
    to: config.MY_EMAIL,
    from: req.body.msgSender,
    subject: "Portfolio - contact me",
    text: req.body.msgText
  };
  sendGrid
    .send(msg)
    .then(result => res.status(200).send())
    .catch(err => res.status(400).send());
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}.`));
