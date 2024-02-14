const express = require("express")
const bcrypt= require("bcryptjs")
const ashaworkerModel= require("../models/ashaworkersModel")
const addhousemodel=require("../models/addcommondetailsModel")
const personaldetailsmodel= require("../models/personaldetails")

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

router.get("/viewashaworkers",async(req,res)=>{
    let data= await ashaworkerModel.find()
    res.json(data)
})

router.post("/searchworkers",async(req,res)=>{
    let input=req.body
    let data = await ashaworkerModel.find(input)
    res.json(data)
})

router.post("/searchperson",async(req,res)=>{
    let input=req.body
    let data = await addhousemodel.find(input)
    res.json(data)
})



router.get("/view",async(req,res)=>{
    let data=await addhousemodel.find()
    .populate("addedby","name -_id").exec()
    res.json(data)
})

router.post("/viewpersonal",async(req,res)=>{
    let input = req.body
    let data= await personaldetailsmodel.find(input)
    res.json(data)
})

module.exports=router