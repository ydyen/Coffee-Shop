const express = require('express');
const router = express.Router();

Employee = require('./models/employee');
Genre = require('./models/genre')

//employee information
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

// Read menu items
router.get('/menu', (req, res, next) => {
    res.send('This is the menu page')

});



//Update menu items
router.put('/menu/:id', (req, res, next) => {
    res.send('This is the update menu item page')
});

//Delete menu items
router.delete('/menu/:id', (req, res, next) => {
    res.send('This is the delete menu item page')
});

module.exports = router;