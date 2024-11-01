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

// Get movie details
router.get('/:id', moviesController.getMovieDetails); 

// Get movies by genre
router.get('/genre/:id', moviesController.getMoviesByGenre); // New route for fetching movies by genre

module.exports = router;
