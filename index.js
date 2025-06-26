const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/schools', require('./routes/schoolRoutes'));
app.use('/api/hospitals', require('./routes/hospitalRoutes'));
app.use('/api/colleges', require('./routes/collegeRoutes'));

app.get('/', (req, res) => {
  res.send('Institution API is running');
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT || 4000}`);
});
