const mongoose = require('mongoose');

//schema
const employeeSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    title: String,
    img_url: String,
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
        first_name: employees.first_name,
        last_name: employees.last_name,
        title: employees.title,
        experience: employees.experience,
        img_url: employees.img_url
    };
    Employee.findOneAndUpdate(query, update, options, callback);
}

//delete employee
module.exports.deleteEmployee = (id, callback) => {
    const query = {_id: id};
    Employee.remove(query, callback);
}