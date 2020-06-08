const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    title: String,
    education: String,
    experience: String,
    create_date: {
        type: Date,
        default: Date.now,
    }
});


const Employee = module.exports = mongoose.model('Employee', employeeSchema);

//Read employees
module.exports.getEmployee = (callback, limit) => Employee.find(callback).limit(limit);

//Add employee
module.exports.addEmployee = (Employee, callback) => Employee.create(Employee, callback); 