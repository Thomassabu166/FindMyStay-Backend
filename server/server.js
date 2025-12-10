// Importing required libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute=require('./routes/auth');

// Loading environment variables
require('dotenv').config();

// Creating the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);

// Port Setup
const PORT = process.env.PORT || 5000;

// Database Connection
const dbUrl = process.env.MONGO_URI;

// Connecting to MongoDB (Clean Method)
mongoose.connect(dbUrl)
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((err) => {
        console.log(" Error connecting to database:", err);
    });

// Test Route
app.get('/', (req, res) => {
    res.send("FindMyStay Project Backend is working!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});