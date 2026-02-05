const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeName:String,
    employeeDesignation:String,
    employeeLocation:String,
    salary:Number
});

module.exports = mongoose.model('Employee',employeeSchema);
