const mongoose= require("mongoose")

const personaldetailsSchema= new mongoose.Schema(
    {
        houseid:{
            type:String,
            required:true,
            ref:"hosedetails"
        },
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        dob:{
            type:String,
            required:true
        },
        education:{
            type:String,
            required:true
        },
        maritalstatus:{
            type:String,
            required:true
        },
        job:{
            type:String,
            required:true
        },
        disability:{
            type:String,
            required:true
        },
        blindness:{
            type:String,
            required:true
        },
        tobacco:{
            type:String,
            required:true
        },
        vaccination:{
            type:String,
            required:true
        }

    }
)

module.exports=mongoose.model("personaldetails",personaldetailsSchema)