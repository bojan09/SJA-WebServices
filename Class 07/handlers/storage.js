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
};
const download = async (req, res) => {
  res.send("OK");
};

module.exports = {
  upload,
  download,
};
