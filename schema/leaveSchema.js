const mongoose = require('mongoose');
const empLeave = new mongoose.Schema({
    date:{
        type:String,
        require:true
    },
    employeeId:{
        type:String,
        require:true
    },
    reason:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("EmployeeLeave",empLeave)