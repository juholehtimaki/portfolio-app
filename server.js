const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.post("/contact", (req, res) => {
  console.log("attempting to send an email");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}.`));
