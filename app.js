// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet'); // Import Helmet for security
const movieRoutes = require('./routes/movies'); // Import movie routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware setup
app.use(helmet()); // Protect against vulnerabilities
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON requests

// Use movie-related routes
app.use('/api/movies', movieRoutes);

// Log each request to the console
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
