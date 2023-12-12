const Students = require("../Model/StudentsModel");
const jwt = require('../util/jwtToken');

// Asynchronous function to retrieve all students sorted by Name.
const getAllStudents = async () => {
    // Retrieve all students from the database and sort them by Name in ascending order.
    const data = await Students.find({}).sort({'Name': 1});
    return data;
}

// Asynchronous function to retrieve a student by their RollNo.
const getStudentById = async (req) => {
    // Extract the RollNo parameter from the request.
    const rollNo = req.params._id;
    
    // Find a student with the specified RollNo in the database.
    const data = await Students.find({ RollNo: rollNo });
    return data;
}

// Asynchronous function to edit a student's information.
const editStudent = async (req) => {
    // Extract the RollNo parameter and data from the request body.
    const rollNo = req.params.rollNo;
    const data = req.body.data;

    // Update the student's information in the database.
    const result = await Students.updateOne({ RollNo: rollNo }, { $set: data }).catch((err) => {
        return err;
    });

    return result;
}

// Asynchronous function to delete a student by their RollNo.
const deleteStudent = async (rollNo) => {
    // Delete the student with the specified RollNo from the database.
    const result = await Students.deleteOne({ RollNo: rollNo });
    return result;
}

// Asynchronous function to add a new student.
const addStudent = async (req) => {
    // Extract student data from the request body.
    let data = req.body.data;

    // Create a new student in the database.
    const result = await Students.create(req.body.data).catch((err) => {
        return err;
    });

    return result;
}

// Asynchronous function for student login.
const studentLogin = async (req) => {
    // Find a student in the database based on RollNo and DOB.
    const result = await Students.findOne({
        $and: [
            { RollNo: req.body.data.RollNo },
            { DOB: req.body.data.DOB }
        ]
    });

    return result;
}

// Export the functions for external use.
module.exports = {
    getAllStudents,
    getStudentById,
    editStudent,
    deleteStudent,
    addStudent,
    studentLogin
};
