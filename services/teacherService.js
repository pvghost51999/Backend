const TeacherModel = require('../Model/TeacherModel');
const jwtToken = require('../util/jwtToken');
const bcrypt = require('bcrypt');

// Function to sign up a new teacher
const signUp = async (req) => {
    try {
        // Hash the password using bcrypt
        const hashPassword = await bcrypt.hash(req.body.data.password, 10);

        // Create a new teacher in the database
        const result = await TeacherModel.create({
            name: req.body.data.name,
            username: req.body.data.username,
            phone_no: req.body.data.phone_no,
            password: hashPassword
        }).catch((err) => {
            return err;
        });

        // Generate a JWT token for the new teacher
        const token = await jwtToken.generateToken(req.body.data);

        // Return the result and token
        return { result, token };
    } catch (error) {
        // Return any encountered errors
        return error;
    }
}

// Function to get teacher information by username
const getTeacher = async (req) => {
    // Find a teacher in the database based on the provided username
    const data = await TeacherModel.findOne({ username: req.body.data.username });
    return data;
}

// Function to sign in a teacher
const signIn = async (req) => {
    // Retrieve teacher information by username
    const data = await getTeacher(req);

    // Log relevant information for debugging
    // console.log(req.body.data, "signIn");
    // console.log(data);

    // Check if teacher data exists
    if (data) {
        // Compare the provided password with the hashed password in the database
        const result = await bcrypt.compare(req.body.data.password, data.password);

        // If the passwords match, generate a JWT token and return relevant information
        if (result) {
            const token = await jwtToken.generateToken(data);
            return {
                "username": data.username,
                "name": data.name,
                "token": token
            };
        }
    }

    // Return false if sign-in is unsuccessful
    return false;
}

// Export the functions for external use
module.exports = { signUp, signIn, getTeacher };
