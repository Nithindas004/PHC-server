const express = require("express")
const bcrypt= require("bcryptjs")
const ashaworkerModel= require("../models/ashaworkersModel")

const router= express.Router()

hashPasswordGenerator= async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/addashaworker",async(req,res)=>{
    let {data} = {"data":req.body}
    let password= data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
           // console.log(hashedPassword)
            data.password=hashedPassword
            let addworker=new ashaworkerModel(data)
            let result = addworker.save()
            res.json({
                status:"success"
            })
        }
    )

})

module.exports=router