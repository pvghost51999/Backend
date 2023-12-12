const mongoose = require('mongoose');

// Set the name of the database
// const database = "ResultManagement";

// Construct the MongoDB connection URL using the environment variable
const url = process.env.MONGODB_URL;

// Connect to the MongoDB database
mongoose.connect("mongodb+srv://pvghost51999:Demo123@cluster0.th5vlin.mongodb.net/ResultManagement").then(() => {
    // Log a message indicating a successful database connection
    console.log("Database connection is established");
}).catch((err) => {
    // Log an error message if there's an issue connecting to the database
    console.log("Error:", err);
});
