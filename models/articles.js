const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: { type: String, required: true },
  link: { type: String, required: true }
});

const Book = mongoose.model("Article", articleSchema);

module.exports = Article;