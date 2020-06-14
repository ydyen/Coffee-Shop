const mongoose = require('mongoose');

//schema
const menuSchema = mongoose.Schema({
    name: String,
    price: String,
    description: String,
    create_date: {
        type: Date,
        default: Date.now,
    }
});

const Menu = module.exports = mongoose.model('Menu', menuSchema);

//get menu
module.exports.getmenu = (callback, limit) => {
    Menu.find(callback).limit(limit);
}

//Add menu
module.exports.addmenu = (menus, callback) => {
    Menu.create(menus, callback);
}

//Update menu
module.exports.updatemenu = (id, menus, options, callback) => {
    const query = {_id: id};
    const update = {
        name: menus.name,
        price: menus.price,
        description: menus.description,
    };
    Menu.findOneAndUpdate(query, update, options, callback);
}

//delete menu
module.exports.deletemenu = (id, callback) => {
    const query = {_id: id};
    Menu.remove(query, callback);
}