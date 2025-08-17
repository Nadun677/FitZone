const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Class Schema
const classSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});
const ClassModel = mongoose.model('Class', classSchema);

// GET /api/classes
router.get('/', async (req, res) => {
  try {
    const classes = await ClassModel.find().sort({ createdAt: -1 });
    res.json({ classes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

