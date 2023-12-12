const mongoose = require('mongoose');

// Set the name of the database
const database = "ResultManagement";

// Construct the MongoDB connection URL using the environment variable
const url = process.env.MONGODB_URL + database;

// Connect to the MongoDB database
mongoose.connect(url).then(() => {
    // Log a message indicating a successful database connection
    console.log("Database connection is established");
}).catch((err) => {
    // Log an error message if there's an issue connecting to the database
    console.log("Error:", err);
});
