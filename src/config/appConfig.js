require('dotenv').config();


const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

module.exports = { port, mongoURI };