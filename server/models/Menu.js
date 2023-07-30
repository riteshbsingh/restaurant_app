const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MenuSchema = new Schema({
    id: String,
    image: String,
    name: String,
    dsc: String,
    price: String,
    rate: String,
    country: String
}, {
    timestamps: true,
});

const Menu = model('Menu', MenuSchema);

module.exports = Menu;