const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();

const {
    categories,
    customers,
    movies,
    series,
    documentaries,
    animations,
    kids,
    reality,
    standUp 
} = require('../models');

// Using body-parser globally in the router
routes.use(bodyParser.json());

/*===========  Customer's Routes  ===========*/

// Get ALL Customers
routes.get('/customers', (req, res) => {
    customers.getCustomers(req, res);
});

// Get a SINGLE customer
routes.get('/customers/:id', (req, res) => {
    customers.getCustomer(req, res);
});

// REGISTER a Customer
routes.post('/register-customer', (req, res) => {
    customers.registerCustomer(req, res);
});

// LOGGING IN a Customer
routes.post('/login-customer', (req, res) => {
    customers.loginCustomer(req, res);
});

// UPDATING a Customer
routes.put('/customers/:id', (req, res) => {
    customers.updateCustomer(req, res);
});

// DELETING a Customer
routes.delete('/customers/:id', (req, res) => {
    customers.deleteCustomer(req, res);
});

/*===========  Customer's Routes  ===========*/

/*===========  Categories, Movies, Series, Documentaries and etc Routes  ===========*/

// Get ALL Categories
routes.get('/categories', (req, res) => {
    categories.getCategories(req, res);
});

/*===========  Movies's Routes  ===========*/
// Fetching all Movies
routes.get('/movies', (req, res) => {
    movies.getMovies(req, res);
});

// Get a SINGLE Movie by ID
routes.get('/movies/:id', (req, res) => {
    movies.getMovie(req, res);
});

// ADD a New Movie
routes.post('/movies', (req, res) => {
    movies.addMovie(req, res);
});

// UPDATING a Movie by ID
routes.put('/movies/:id', (req, res) => {
    movies.updateMovie(req, res);
});

// DELETING a Movie by ID
routes.delete('/movies/:id', (req, res) => {
    movies.deleteMovie(req, res);
});
/*===========  Movies's Routes  ===========*/

/*===========  Series's Routes  ===========*/
// Fetching all Series
routes.get('/series', (req, res) => {
    series.getAllSeries(req, res);
});

// Get a SINGLE Series by ID
routes.get('/series/:id', (req, res) => {
    series.getSingleSeries(req, res);
});

// ADD a New Series
routes.post('/series', (req, res) => {
    series.addSeries(req, res);
});

// UPDATING a Series by ID
routes.put('/series/:id', (req, res) => {
    series.updateSeries(req, res);
});

// DELETING a Series by ID
routes.delete('/series/:id', (req, res) => {
    series.deleteSeries(req, res);
});
/*===========  Series's Routes  ===========*/

/*===========  Documentary's Routes  ===========*/
// Fetching all Documentaries
routes.get('/documentaries', (req, res) => {
    documentaries.getDocumentaries(req, res);
});

// Get a SINGLE Documentary by ID
routes.get('/documentaries/:id', (req, res) => {
    documentaries.getDocumentary(req, res);
});

// ADD a New Documentary
routes.post('/documentaries', (req, res) => {
    documentaries.addDocumentary(req, res);
});

// UPDATING a Documentary by ID
routes.put('/documentaries/:id', (req, res) => {
    documentaries.updateDocumentary(req, res);
});

// DELETING a Documentary by ID
routes.delete('/documentaries/:id', (req, res) => {
    documentaries.deleteDocumentary(req, res);
});
/*===========  Documentary's Routes  ===========*/

/*===========  Animation's Routes  ===========*/
// Fetching all Animations & Anime
routes.get('/animations-anime', (req, res) => {
    animations.getAnimations(req, res);
});

// Get a SINGLE Animation/Anime by ID
routes.get('/animations-anime/:id', (req, res) => {
    animations.getAnimation(req, res);
});

// ADD a New Animation/Anime
routes.post('/animations-anime', (req, res) => {
    animations.addAnimation(req, res);
});

// UPDATING an Animation/Anime by ID
routes.put('/animations-anime/:id', (req, res) => {
    animations.updateAnimation(req, res);
});

// DELETING an Animation/Anime by ID
routes.delete('/animations-anime/:id', (req, res) => {
    animations.deleteAnimation(req, res);
});
/*===========  Animations's Routes  ===========*/

/*===========  Kid's Routes  ===========*/
// Fetching all Kids content
routes.get('/kids', (req, res) => {
    kids.getKids(req, res);
});

// Get a SINGLE Kids content by ID
routes.get('/kids/:id', (req, res) => {
    kids.getSingleKid(req, res);
});

// ADD a New Kids content
routes.post('/kids', (req, res) => {
    kids.addKids(req, res);
});

// UPDATING a Kids content by ID
routes.put('/kids/:id', (req, res) => {
    kids.updateKids(req, res);
});

// DELETING a Kids content by ID
routes.delete('/kids/:id', (req, res) => {
    kids.deleteKid(req, res);
});
/*===========  Kid's Routes  ===========*/

/*===========  Realty's Routes  ===========*/
// Fetching all Reality content
routes.get('/reality', (req, res) => {
    reality.getRealities(req, res);
});

// Get a SINGLE Reality content by ID
routes.get('/reality/:id', (req, res) => {
    reality.getReality(req, res);
});

// ADD a New Reality content
routes.post('/reality', (req, res) => {
    reality.addReality(req, res);
});

// UPDATING a Reality content by ID
routes.put('/reality/:id', (req, res) => {
    reality.updateReality(req, res);
});

// DELETING a Reality content by ID
routes.delete('/reality/:id', (req, res) => {
    reality.deleteReality(req, res);
});
/*===========  Reality's Routes  ===========*/

/*===========  Stand-Up's Routes  ===========*/
// Fetching all Stand-Up Comedy content
routes.get('/stand-up-comedy', (req, res) => {
    standUp.getStandUpComedies(req, res);
});

// Get a SINGLE Stand-Up Comedy content by ID
routes.get('/stand-up-comedy/:id', (req, res) => {
    standUp.getStandUpComedy(req, res);
});

// ADD a New Stand-Up Comedy content
routes.post('/stand-up-comedy', (req, res) => {
    standUp.addStandUpComedy(req, res);
});

// UPDATING a Stand-Up Comedy content by ID
routes.put('/stand-up-comedy/:id', (req, res) => {
    standUp.updateStandUp(req, res);
});

// DELETING a Stand-Up Comedy content by ID
routes.delete('/stand-up-comedy/:id', (req, res) => {
    standUp.deletegetStandUp(req, res);
});
/*===========  Stand-Up's Routes  ===========*/

/*===========  Categories, Movies, Series, Documentaries and etc Routes  ===========*/

module.exports = { express, routes };