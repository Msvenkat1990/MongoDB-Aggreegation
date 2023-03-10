
const emp = require('../schema/employeeSchema')
const empLeave = require('../schema/leaveSchema')
const mongoose = require('mongoose');


const createEmpData = async(req,res)=>{
    var presentStatus = req.body.presentStatus;
    
    if(presentStatus == "present"){
        presentStatus = 1
    }else if(presentStatus == "half"){
        presentStatus = 2
    }else if(presentStatus == "absent"){
        presentStatus = 3
    }
    const userData = new emp({
      ...req.body,
      presentStatus:presentStatus
    });
    const saveData = userData.save();
    res.status(200).json({message:"User Data Saved",saveData:userData});

}

const createLeave = async(req,res)=>{
    
    const leaveData = new empLeave({
      ...req.body
    });
    const savedData = await leaveData.save();
    res.status(200).json({message:"User Leave Saved",leaveInfo:savedData});

}

const leavedata = async(req,res)=>{
    const userData = await emp.find();
    res.status(200).json({message:"Employee details",userData})
}


const viewReport = async(req,res)=>{

const leaveSchema= emp.aggregate([{

        $lookup: {
            from: 'employeeleaves',
            localField: "empId",
            foreignField: "employeeId",
            as: "leave"
        }
    }], (err, data) => {
        if (err) {
            res.status(500).json(err);
          } else { 
            
            for(let i=0; i<data.length; i++){
                
                if(data[i].presentStatus == "1"){
                    data[i].presentStatus ="present"
                }else if(data[i].presentStatus == "2"){
                    data[i].presentStatus="half"
                }else if(data[i].presentStatus == "3"){
                    data[i].presentStatus="absent"
                }
                // console.log("data at " + i, data[i]);
                
            }
            
            res.status(200).json({message:"Employee details Repots",data})
          }
    })
    
}

    


module.exports = {createEmpData,viewReport,leavedata,createLeave}