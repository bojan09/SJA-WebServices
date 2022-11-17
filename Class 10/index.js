require("dotenv").config();
const express = require("express");
const Mailgun = require("mailgun.js");
const formData = require("form-data");
const { Validator } = require("node-input-validator");
const app = express();

app.use(express.json());

app.post("/app/v1/mailer", async (req, res) => {
  try {
    const v = new Validator(req.body, {
      from: "required|email",
      to: "required|email",
      subject: "required|string",
      html: "required|string",
    });

    const check = await v.check();
    if (!check) {
      return res.status(400).send(v.errors);
    }

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: process.env.USERNAME,
      key: process.env.API_KEY,
    });

    let out = await mg.messages.create(process.env.API_DOMAIN, req.body);

    console.log(out);
    res.send("OK");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started on port ${process.env.PORT}`);
});
