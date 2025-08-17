// routes/memberships.js
const express = require('express');
const router = express.Router();

// Hardcoded membership plans
const memberships = [
  {
    name: "Basic",
    price: 3500,
    features: ["Gym Access", "Free Weights Area", "Cardio Zone"],
    additional: "No group classes or personal trainer included."
  },
  {
    name: "Premium",
    price: 5500,
    features: ["All Basic Features", "Unlimited Group Classes", "Sauna Access", "1 Free PT Session"],
    additional: "Nutrition Planning not included."
  },
  {
    name: "Ultimate",
    price: 8500,
    features: ["All Premium Features", "Unlimited PT Sessions", "Nutrition Planning", "Progress Tracking", "24/7 Access"],
    additional: "Includes monthly health assessment, priority support, and free merchandise."
  }
];

// GET /api/memberships
router.get('/', (req, res) => {
  res.json({ memberships });
});

module.exports = router;
