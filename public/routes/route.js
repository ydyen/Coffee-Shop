const express = require('express');
const router = express.Router();

//mongoose schemas
Employee = require('./models/employee');
Genre = require('./models/genre')

//Read all employees information
router.get('/', (req, res, next) => {
    try{
        Employee.getEmployees((err, employees) =>{
            if(err) {
                res.sendStatus('401 ' + err) 
                next()   
            }
            res.json(employees);
        })
    }catch(err) {
        if(err) throw err;
    }
})

//Add new employee
router.post('/', (req, res, next) => {
    try{
        const employees = req.body;
        Employee.addEmployee(employees, (err, employees) =>{
            if(err) {
                res.sendStatus(404).send('Not Found ' + err)
                next()
            }
            res.json(employees);
        })
    }catch(err) {
        if(err) throw err;
    }
});

//Update an employee
router.put('/:id', (req, res, next) => {
    try{
        const id = req.params.id;
        const employees = req.body;
        Employee.updateEmployee(id, employees,  {}, (err, employees) =>{
            if(err) throw err;
            res.json(employees);
        })
    }catch(err) {
        if(err) throw err;
    }
});

//Delete menu items
router.delete('/:id', (req, res, next) => {
    try{
        const id = req.params.id;
        Employee.deleteEmployee(id, (err, employees) =>{
            if(err) throw err;
            res.send("Success: 1 Deleted");
        })
    }catch(err) {
        if(err) throw err;
    }
});

module.exports = router;