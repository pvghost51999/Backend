const bcrypt = require('bcrypt');
const teacherService = require('../services/teacherService');
const services = require('../services/studentService');

// Function to get all students
const getAllStudents = async (req, res) => {
    // Retrieve all students using the services module
    const data = await services.getAllStudents();
    const user = req.user; // Assuming user information is stored in req.user
    res.status(200).json(data);
}

// Function to edit a student's information
const editStudent = async (req, res) => {
    try {
        // Call the editStudent function from the services module
        const result = await services.editStudent(req);

        // Check the result and send appropriate status codes
        if (result) {
            return res.status(200).send(result);
        } else {
            return res.status(403).send(result); // Forbidden status code
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

// Function to add a new student
const addStudent = async (req, res) => {
    try {
        // Call the addStudent function from the services module
        const result = await services.addStudent(req);

        // Check the result and send appropriate status codes
        if (result) {
            return res.status(201).send(result); // Created status code for successful creation
        } else {
            return res.status(400).send(result); // Bad Request status code
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

// Function to delete a student
const deleteStudent = async (req, res) => {
    try {
        // Extract the RollNo parameter from the request
        let rollNo = req.params.rollNo;

        // Call the deleteStudent function from the services module
        const result = await services.deleteStudent(rollNo);

        // Check the result and send appropriate status codes
        if (result) {
            return res.status(200).send(result);
        } else {
            return res.status(404).send(result); // Not Found status code
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

// Function for teacher sign-in
const signInTeacher = async (req, res) => {
    try {
        // Call the signIn function from the teacherService module
        const result = await teacherService.signIn(req);

        // Check the result and send appropriate status codes
        if (result) {
            return res.status(200).send(result);
        } else {
            return res.status(401).send(result); // Unauthorized status code
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

// Function for teacher sign-up
const teacherSignUp = async (req, res) => {
    try {
        // Check if the teacher already exists
        if (await teacherService.getTeacher(req)) {
            return res.status(400).send({ error: "username should be unique" });
        } else {
            // Call the signUp function from the teacherService module
            const { result, token } = await teacherService.signUp(req);

            // Check the result and send appropriate status codes
            if (result) {
                return res.status(200).send({ result, token });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

// Export the functions for external use
module.exports = { teacherSignUp, signInTeacher, getAllStudents, editStudent, addStudent, deleteStudent };
