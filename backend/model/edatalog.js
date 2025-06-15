const mongoose = require('mongoose')

var datainsch = mongoose.Schema({
    Name:String,
    Password:String
})

var EDatainMod = mongoose.model('edatalog',datainsch)

module.exports = EDatainMod