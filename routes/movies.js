const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies'); // Adjust the path as needed

// Get popular movies
router.get('/popular', moviesController.getPopularMovies); // This should work

// Get movie details
router.get('/:id', moviesController.getMovieDetails); // This should also work

module.exports = router;
