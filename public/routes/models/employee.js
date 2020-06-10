const mongoose = require('mongoose');

//schema
const employeeSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    title: String,
    experience: String,
    create_date: {
        type: Date,
        default: Date.now,
    },
    
});

const Employee = module.exports = mongoose.model('Employee', employeeSchema);

//get employees
module.exports.getEmployees = (callback, limit) => {
    Employee.find(callback).limit(limit);
}

//Add employee
module.exports.addEmployee = (employees, callback) => {
    Employee.create(employees, callback);
}

//Update employee
module.exports.updateEmployee = (id, employees, options, callback) => {
    const query = {_id: id};
    const update = {
        name: employees.first_name,
        name: employees.last_name,
        name: employees.title,
        name: employees.experience,
    };
    Employee.findOneAndUpdate(query, update, options, callback);
}

