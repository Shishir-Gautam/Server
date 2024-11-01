// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet'); // Import Helmet
const movieRoutes = require('./routes/movies'); // Ensure this path is correct

dotenv.config();

const app = express();

// Use Helmet for security
app.use(helmet());

app.use(cors({
    origin: 'http://localhost:3001',
}));
app.use(express.json());

// Use the movie routes
app.use('/api/movies', movieRoutes);

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});


// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
