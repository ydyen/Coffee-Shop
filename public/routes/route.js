const express = require('express');
const router = express.Router();

//staffs information
router.get('/', (req, res, next) => {
    res.send('This is the Home page')
})

// Read menu items
router.get('/menu', (req, res, next) => {
    res.send('This is the menu page')

});

//Add menu items
router.post('/menu', (req, res, next) => {

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