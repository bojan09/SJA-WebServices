const upload = async (req, res) => {
  const path = require("path");

  // const extRegex = new RegExp(/^(\.png|\.jpg)$/);

  // if (path.extname(req.files.slika.name).toLowerCase() === ['.png'||".jpg"])
  // if (path.extname(req.files.slika.name).toLowerCase() === extRegex)
  // if (path.extname(req.files.slika.name).toLowerCase() === ".jpg")

  const imgTypes = [".jpg", ".png", ".ico", ".jpeg"];

  if (path.extname(req.files.slika.name).toLowerCase() === imgTypes[0]) {
    req.files.slika.mv(`${__dirname}/../uploads/${req.files.slika.name}`);
    res.status(200).contentType("text/plain").end("File uploaded!");
  } else {
    res.status(406).contentType("text/plain").end("Format is Not Acceptable");
  }
};

const download = async (req, res) => {
  res.send("OK");
};

module.exports = {
  upload,
  download,
};
