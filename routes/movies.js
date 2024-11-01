const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies'); // Adjust the path as needed

// Get popular movies
router.get('/popular', moviesController.getPopularMovies); 

// Get top-rated movies
router.get('/top-rated', moviesController.getTopRatedMovies); 

// Get upcoming movies
router.get('/upcoming', moviesController.getUpcomingMovies); 

// Get movie genres
router.get('/genres', moviesController.getGenres); // Route for fetching genres

// Search for movies
router.get('/search/:query', moviesController.searchMovies); // Route for searching movies

// Get movies by genre using the genre ID from the URL
router.get('/genre/:id', moviesController.getMoviesByGenre); 

// Get trending movies
router.get('/trending', moviesController.getTrendingMovies); // New route for trending movies


module.exports = router;
