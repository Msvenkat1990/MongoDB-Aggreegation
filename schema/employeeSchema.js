const mongoose = require('mongoose');

const emp = new mongoose.Schema({
    empId:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    inTime:{
        type:String,
        require:true
    },
    outTime:{
        type:String,
        require:true
    },
    presentStatus:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("EmployeeData",emp);
