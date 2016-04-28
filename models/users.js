
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

    username: String,
    email: String,
    password: String,
    location: String

});



/*var coffees = [
 {id: 100, favourite: true, star: 4, name: 'Cuppa T', shop: 'Chez Moi', price: 1.99},
 {id: 101, favourite: false, star: 3, name: 'Mocca', shop: 'WIT', price: 2.99},
 {id: 102, favourite: true, star: 3, name: 'Cuppa Joe', shop: 'The Ritz', price: 4.95},


 ];*/

module.exports = mongoose.model('User', UserSchema);
