const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`${process.env.DB_URL}`);

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  contentImg: {
    filename: {
      type: String,
    },
    contentType: {
      type: String, 
    },
    data: {
      type: Buffer,
    },
  },
});

module.exports = mongoose.model("blog", blogSchema);