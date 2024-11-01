const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const TMDB_API = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN;

// Get popular movies
exports.getPopularMovies = async (req, res) => {
    try {
        const response = await axios.get(`${TMDB_API}/movie/popular`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                Accept: 'application/json',
            },
        });
        res.json(response.data); // Return the list of popular movies
    } catch (error) {
        console.error('Error fetching popular movies:', error.response ? error.response.data : error.message);
        res.status(500).json({
            error: 'Error fetching popular movies',
            details: error.response ? error.response.data : error.message,
        });
    }
};

// Get movie details
exports.getMovieDetails = async (req, res) => {
    const { id } = req.params; // Extract ID from the request parameters
    try {
        const response = await axios.get(`${TMDB_API}/movie/${id}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                Accept: 'application/json',
            },
        });
        res.json(response.data); // Return the movie details
    } catch (error) {
        console.error('Error fetching movie details:', error.response ? error.response.data : error.message);
        res.status(500).json({
            error: 'Error fetching movie details',
            details: error.response ? error.response.data : error.message,
        });
    }
};
