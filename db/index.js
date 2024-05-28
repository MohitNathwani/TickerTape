const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://nathwanimohit15:Mohit%4015@cluster0.hcvitkf.mongodb.net/TickerTape');

const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const MovieSchema = new mongoose.Schema({
    movieName: { type: String, required: true },
    movieLanguage: { type: String, required: true },
    theatreName: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
    showDate: { type: Date, required: true },
    showTiming: { type: String, required: true },
    numberOfTickets: { type: Number, required: true },
    perTicketCost: { type: Number, required: true },
    additionalDetails: { type: String }
});

const BusSchema = new mongoose.Schema({
    tripFrom: { type: String, required: true },
    tripTo: { type: String, required: true },
    busName: { type: String, required: true },
    busType: { type: String, required: true },
    journeyDate: { type: Date, required: true },
    journeyTime: { type: String, required: true },
    numberOfTickets: { type: Number, required: true },
    perTicketCost: { type: Number, required: true },
    ticketType: { type: String, required: true },
    additionalDetails: { type: String }
});


module.exports = {
    Admin: mongoose.model('Admin', AdminSchema),
    Movie: mongoose.model('Movie', MovieSchema),
    Bus : mongoose.model('Bus', BusSchema),
    User: mongoose.model('User', UserSchema)
};
