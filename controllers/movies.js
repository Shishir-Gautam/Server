const axios = require('axios');
require('dotenv').config();

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3/movie'; // Base URL for TMDB
const TMDB_BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN; // Get the bearer token from environment variables

// Get popular movies
const getPopularMovies = async (req, res) => {
    try {
        const response = await axios.get(`${TMDB_API_BASE_URL}/popular`, {
            headers: {
                Authorization: `Bearer ${TMDB_BEARER_TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching popular movies:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch popular movies.' });
    }
};

// Get top-rated movies
const getTopRatedMovies = async (req, res) => {
    try {
        const response = await axios.get(`${TMDB_API_BASE_URL}/top_rated`, {
            headers: {
                Authorization: `Bearer ${TMDB_BEARER_TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching top-rated movies:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch top-rated movies.' });
    }
};

// Get upcoming movies
const getUpcomingMovies = async (req, res) => {
    try {
        const response = await axios.get(`${TMDB_API_BASE_URL}/upcoming`, {
            headers: {
                Authorization: `Bearer ${TMDB_BEARER_TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching upcoming movies:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch upcoming movies.' });
    }
};

// Get movie genres
const getGenres = async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            headers: {
                Authorization: `Bearer ${TMDB_BEARER_TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching genres:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch genres.' });
    }
};

// Search for movies
const searchMovies = async (req, res) => {
    const { query } = req.params;
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                query: encodeURIComponent(query)
            },
            headers: {
                Authorization: `Bearer ${TMDB_BEARER_TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error searching movies:', error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: 'Failed to search movies. Please try again.' });
    }
};

// Get movie details
const getMovieDetails = async (req, res) => {
    const { id } = req.params; // Movie ID from the URL
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            headers: {
                Authorization: `Bearer ${TMDB_BEARER_TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching movie details:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch movie details.' });
    }
};

const getMoviesByGenre = async (req, res) => {
    const { id } = req.params; // Use 'id' from the route parameter
    try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                with_genres: id, // Pass the genre ID directly
                api_key: process.env.TMDB_API_KEY // Use your API key
            },
            headers: {
                Authorization: `Bearer ${TMDB_BEARER_TOKEN}` // Ensure bearer token is used
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching movies by genre:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch movies by genre.' });
    }
};


module.exports = {
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getGenres,
    searchMovies,
    getMovieDetails,
    getMoviesByGenre // Function to fetch movies by genre
};
