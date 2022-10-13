const mongoose = require("mongoose");

const Book = mongoose.model("book", {
  title: String,
  author: [String],
  genre: [String],
  description: String,
  characters: [String],
  publisher: String,
  page_num: Number,
  publisher_year: Number,
});

const create = async (data) => {
  let book = new Book(data);
  return book.save();
};

const getAll = async (data) => {
  return Book.find();
};

const getOne = async (data) => {
  return Book.findOne({ _id: id });
};

const updateOne = async (data) => {
  return Book.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return Book.deleteOne({ _id: id });
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  remove,
};
