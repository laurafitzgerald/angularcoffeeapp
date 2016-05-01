
var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

var CoffeeSchema = new mongoose.Schema({
    favourite: {type: Boolean, default : false},
    star: {type: Number, default: 0},
    name: String,
    shop: String,
    price: Number,
    location_lat: Number,
    location_lng: Number,
    username: String

});



/*var coffees = [
    {id: 100, favourite: true, star: 4, name: 'Cuppa T', shop: 'Chez Moi', price: 1.99},
    {id: 101, favourite: false, star: 3, name: 'Mocca', shop: 'WIT', price: 2.99},
    {id: 102, favourite: true, star: 3, name: 'Cuppa Joe', shop: 'The Ritz', price: 4.95},


];*/

module.exports = mongoose.model('Coffee', CoffeeSchema);
