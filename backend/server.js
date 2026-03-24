const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => console.log('✗ MongoDB connection error:', err));

// Routes
// app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes.js'));
app.use('/api/skills', require('./routes/skillRoutes.js'));
app.use('/api/contact', require('./routes/contactRoutes.js'));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({ 
    error: err.message || 'Something went wrong!' 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}\n`);
});