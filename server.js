const express = require('express');
const app = express();
const multer = require('multer');
const Blog = require('./models/blogs'); // Import Blog model
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post("/api/posts", upload.single('image'), async (req, res) => {
  try{
    const BlogContent = req.body;

    if(req.file && req.file.originalname){
      BlogContent.contentImg = {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
        data: req.file.buffer
      };
    }

    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      contentImg: req.file ? {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
        data: req.file.buffer
      } : undefined
    });
    console.log(newBlog)
    await newBlog.save();
    return res.status(201).send(newBlog);
  }
  catch(error){
    return res.status(500).json({ error: error.message });
  }
});

app.get("/api/posts/:id/image", async (req, res) => {
  try{
    const blog = await Blog.findById(req.params.id);
    if(!blog || !blog.contentImg){
      throw new Error('Image not found');
    }
    res.set('Content-Type', blog.contentImg.contentType);
    res.send(blog.contentImg.data);
  }
  catch(error){
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/posts", async (req, res) => {
  try{
    const blogs = await Blog.find();
    res.json(blogs);
  }
  catch(error){
    res.status(500).json({ error: error.message });
  }
});

// app.get("/api/delete", async (req, res) => {
//   try{
//     await Blog.deleteMany({});
//     res.status(200).send('Deleted all blogs');
//   }
//   catch(error){
//     res.status(500).json({ error: error.message });
//   }
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});