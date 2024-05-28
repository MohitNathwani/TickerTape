const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Movie, Bus } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username, 
        password
    })
    res.json({
        message: "User created successfully"
    })
});

router.get('/bus/:busId', userMiddleware, async (req, res) => {
    const busId = req.params.busId;
    const bus = await Bus.findById(busId);
    res.status(200).json(bus);
});

router.get('/bus', userMiddleware, async (req, res) => {
    const buses = await Bus.find();
    res.status(200).json(buses);
});

router.post('/bus/:busId', userMiddleware, async(req, res) => {
    // Implement updating a course logic
    const busId = req.params.busId;
    const {tripFrom, tripTo, busName, busType, journeyDate, journeyTime, numberOfTickets, perTicketCost, ticketType, additionalDetails} = req.body;
    const response = await Bus.updateOne({
        _id: busId
    }, {
        tripFrom, tripTo, busName, busType, journeyDate, journeyTime, numberOfTickets, perTicketCost, ticketType, additionalDetails
    });

    res.json({
        message: "Bus updated successfully"
    })
});

router.post('/bus', userMiddleware, async (req, res) => {
    const {tripFrom, tripTo, busName, busType, journeyDate, journeyTime, numberOfTickets, perTicketCost, ticketType, additionalDetails} = req.body;
    const newBus = await Bus.create({
        tripFrom, tripTo, busName, busType, journeyDate, journeyTime, numberOfTickets, perTicketCost, ticketType, additionalDetails
    });
    res.status(201).json({
        message : "Bus added successfully", busId : newBus._id
    });
});

router.post('/movie', userMiddleware,async (req, res) => {
    const {movieName, movieLanguage, theatreName, state, city, location, showDate, showTiming, numberOfTickets, perTicketCost, additionalDetails} = req.body;
    const newMovie =await Movie.create({
        movieName, movieLanguage, theatreName, state, city, location, showDate, showTiming, numberOfTickets, perTicketCost, additionalDetails
    });
   res.status(201).json({
    message : "Movie added successfully",movieId : newMovie._id
   });
});

router.get('/movie', userMiddleware, async (req, res) => {
    const movies = await Movie.find();
    res.status(200).json(movies);
});



router.post('/movie/:movieId', userMiddleware, async(req, res) => {
    // Implement updating a course logic
    const movieId = req.params.movieId;
    const {movieName, movieLanguage, theatreName, state, city, location, showDate, showTiming, numberOfTickets, perTicketCost, additionalDetails} = req.body;
    const response = await Movie.updateOne({
        _id: movieId
    }, {
        movieName, movieLanguage, theatreName, state, city, location, showDate, showTiming, numberOfTickets, perTicketCost, additionalDetails
    });

    res.json({
        message: "Movie updated successfully"
    })
});

router.get('/movie/:movieId', userMiddleware, async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await Movie.findById(movieId);
    res.status(200).json(movie);
});

module.exports = router