const express = require('express');
const teacherRouter = require('./Routes/teacherRouter');
const studentRouter = require('./Routes/studentRouter');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
require('./config');

const flash = require('express-flash');
const bodyParser = require('body-parser');
const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

// Use CORS middleware
app.use(cors());

// Parse JSON requests
app.use(express.json());
app.use(bodyParser.json());

// Use the teacherRouter for routes starting with '/teacher'
app.use('/teacher', teacherRouter);

// Use the studentRouter for routes starting with '/student'
app.use('/student', studentRouter);

// Wildcard route to serve the React app for all other requests


// Configure the port to use the environment variable or default to 6060
const port = process.env.PORT || 6060;

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
