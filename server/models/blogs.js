const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`${process.env.DB_URL}`)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

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