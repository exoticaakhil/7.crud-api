const express = require('express');
const { StatusCodes } = require('http-status-codes');
const cors = require('cors');  // Make sure to import cors
require('dotenv').config();
const connectDb = require('./db/dbConfig');

const PORT = process.env.PORT || 3000;  // Provide a fallback port if not set in .env

const app = express();

// Static files middleware (serving from "view" folder)
app.use(express.static('view'));

// Body parser configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS configuration
app.use(cors());

// Routes
app.use('/', require('./route/templateRouter'));  // Template routes
app.use('/api/user', require('./route/userRouter'));  // API user routes

// Default 404 route
app.all('*', async (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: 'Requested path not found' });
});

// Server listen and database connection logic
app.listen(PORT, () => {
    // Connect to the database depending on environment
    if (process.env.MODE === 'development') {
        connectDb(process.env.MONGO_DEV);
    } else if (process.env.MODE === 'production') {
        connectDb(process.env.MONGO_PROD);
    }

    console.log(`Server is running @ http://localhost:${PORT}`);
});
