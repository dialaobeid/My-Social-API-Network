const mongoose = require('mongoose');

// function to establish a connection to mongodb database
const connectDB = async () => {
  try {
    // URL to connect to mongodb 
    await mongoose.connect('mongodb://localhost/socialnetworkdb');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;