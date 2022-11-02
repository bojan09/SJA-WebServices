const upload = async (req, res) => {
  const path = require("path");

  if (path.extname(req.files.slika.name).toLowerCase() !== ".jpg") {
    res.status(406).contentType("text/plain").end("Format is Not Acceptable");
  } else {
    req.files.slika.mv(`${__dirname}/../uploads/${req.files.slika.name}`);
    res.status(200).contentType("text/plain").end("File uploaded!");
  }
};

const download = async (req, res) => {
  res.send("OK");
};

module.exports = {
  upload,
  download,
};