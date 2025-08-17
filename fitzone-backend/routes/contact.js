const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Contact Model
const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});
const ContactModel = mongoose.model('Contact', contactSchema);

// POST /api/contact
router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const contact = new ContactModel({ name, email, subject, message });
        await contact.save();
        res.status(201).json({ msg: 'Message sent successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

