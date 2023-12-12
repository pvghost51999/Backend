const studentServices = require('../services/studentService');

// Asynchronous function to get a student by ID.
const getStudentById = async (req, res) => {
    // Call the getStudentById function from the student services module.
    const data = await studentServices.getStudentById(req);

    // Send the retrieved data as the response.
    res.send(data);
}

// Asynchronous function for student login.
const studentLogin = async (req, res) => {
    // Call the studentLogin function from the student services module.
    const data = await studentServices.studentLogin(req);

    // Log the retrieved data to the console.
    // console.log(data, "data");

    try {
        // Check if data exists to determine the HTTP status code.
        if (data) {
            // Send a successful response (HTTP 201 - Created).
            res.status(201).send(data);
        } else {
            // Send an unauthorized response (HTTP 401 - Unauthorized).
            res.status(401).send(data);
        }
    } catch (error) {
        // Send an internal server error response (HTTP 500).
        res.status(500).json({ error: "internal server error" });
    }
}

// Export the functions for external use.
module.exports = { getStudentById, studentLogin };
