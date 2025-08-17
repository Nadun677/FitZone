const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  author: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json({ posts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Blog post not found' });
    res.json({ post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
