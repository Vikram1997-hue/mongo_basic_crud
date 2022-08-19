const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({

    emp_name: {
        type: String,
        minLength: 2,
        maxLength: 30,
        required: true,
    }, 

    username: {
        type: String,
        minLength: 1,
        maxLength: 30,
        required: true,
    },

    email: {
        type: String,
        minLength: 6,
        maxLength: 60,
        required: true,
    }, 

    password: {
        type: String,
        minLength: 59,
        maxLength: 60,
        required: true
    } 
}, {timestamps: true});

module.exports = mongoose.model("Employees", employeeSchema)