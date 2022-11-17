const books = require("../pkg/books");

const getAll = async (req, res) => {
  try {
    let data = await books.getAll();
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error ").status(500);
  }
};

const getOne = async (req, res) => {
  try {
    let data = await books.getOne(req.params.id);
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

const create = async (req, res) => {
  try {
    let data = req.body;
    await books.create(data); //req.body was here
    res.send(data).status(201);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

const update = async (req, res) => {
  try {
    let data = req.body;
    await books.updateOne(req.params.id, req.body);
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

const partialUpdate = async (req, res) => {
  try {
    let data = req.body;
    await books.updateOne(req.params.body, req.body);
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

const remove = async (req, res) => {
  try {
    await books.remove(req.params.id);
    res.send("Books removed").status(200);
  } catch (err) {
    console.log(err);
    res.send("Internal Server Error").status(500);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  partialUpdate,
  remove,
};
