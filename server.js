const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to FitZone Backend!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

const blogRoutes = require('./routes/blog');
app.use('/api/blog', blogRoutes);

const classRoutes = require('./routes/classes');
app.use('/api/classes', classRoutes);

const trainerRoutes = require('./routes/trainers');
app.use('/api/trainers', trainerRoutes);





// Membership routes
const membershipRoutes = require('./routes/memberships');
app.use('/api/memberships', membershipRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



const blogRouter = require('./routes/blog'); // assuming you saved it as routes/blog.js
app.use('/api/blog', blogRouter);


