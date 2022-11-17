const strings = require("../pkg/strings");

require("mime-types");

const upload = async (req, res) => {
  const imgTypes = ["image/jpg", "image/png", "image/ico", "image/jpeg"];

  if (imgTypes.includes(req.files.slika.mimetype)) {
    req.files.slika.mv(`${__dirname}/../uploads/${req.files.slika.name}`);
    res.status(200).contentType("text/plain").end("File uploaded!");
  } else {
    res.status(403).contentType("text/plain").end("You can't use this format");
  }
  // Size check
  if (req.files.slika.size > 1048576) {
    res.status(403).send("You can't upload this file,the max is 1mb");
  }
  // File name
  let newFileName = `${strings.random(10)}__${req.files.slika.name}`;
  await req.files.slika.mv(`${__dirname}/../../uploads/${newFileName}`);
  res.status(201).send(`{filename: newFileName}`);
};

const download = async (req, res) => {
  let filePath = `${__dirname}/../../uploads/${req.params.file}`;
  res.download(filePath, req.params.file.split("__")[1]).send("OK");
};

module.exports = {
  upload,
  download,
};
