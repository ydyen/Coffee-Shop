const express = require('express');
const router = express.Router();

//mongoose schemas
Employee = require('./models/employee');
Menu = require('./models/menu')


//***** Employee Routes *******

//Read all employees information
router.get('/', (req, res, next) => {
    try {
        Employee.getEmployees((err, employees) => {
            if (err) {
                res.sendStatus('401 ' + err)
                next()
            }
            res.json(employees);
        })
    } catch (err) {
        if (err) throw err;
    }
})

//Add new employee
router.post('/', (req, res, next) => {
    try {
        const employees = req.body;
        Employee.addEmployee(employees, (err, employees) => {
            if (err) {
                res.sendStatus(404).send('Not Found ' + err)
                next()
            }
            res.json(employees);
        })
    } catch (err) {
        if (err) throw err;
    }
});

//Update an employee
router.put('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const employees = req.body;
        Employee.updateEmployee(id, employees, {}, (err, employees) => {
            if (err) throw err;
            res.send("Success: 1 updated.");
        })
    } catch (err) {
        if (err) throw err;
    }
});

//Delete employee
router.delete('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        Employee.deleteEmployee(id, (err, employees) => {
            if (err) throw err;
            res.send("Success: 1 Deleted");
        })
    } catch (err) {
        if (err) throw err;
    }
});

// ******* Menu Routes **********

//Read all menu information
router.get('/menu', (req, res, next) => {
    try {
        Menu.getmenu((err, menu) => {
            if (err) throw err;
            res.json(menu);
        })
    } catch (err) {
        if (err) throw err;
    }
})

//Add new menu
router.post('/menu', (req, res, next) => {
    try {
        const menu = req.body;
        Menu.addmenu(menu, (err, menu) => {
            if (err) {
                res.sendStatus(404).send('Not Found ' + err)
                next()
            }
            res.send("Success: 1 Added");
        })
    } catch (err) {
        if (err) throw err;
    }
});

//Update a menu
router.put('/menu/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const menu = req.body;
        Menu.updatemenu(id, menu, {}, (err, employees) => {
            if (err) throw err;
            res.send("Success: 1 updated.");
        })
    } catch (err) {
        if (err) throw err;
    }
});

//Delete menu items
router.delete('/menu/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        Menu.deletemenu(id, (err, menu) => {
            if (err) throw err;
            res.send("Success: 1 Deleted");
        })
    } catch (err) {
        if (err) throw err;
    }
});

module.exports = router;