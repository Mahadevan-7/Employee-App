const mongoose = require('mongoose')

//schema

var schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    Salary:Number
})

//model creation
var EmployeeModel = mongoose.model('employee',schema)

module.exports = EmployeeModel