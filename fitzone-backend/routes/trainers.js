const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Trainer
const trainerSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});
const Trainer = mongoose.model('Trainer', trainerSchema);

// trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find().sort({ createdAt: -1 });
    res.json({ trainers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

