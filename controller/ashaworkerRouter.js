const express= require("express")
const addhousemodel=require("../models/addcommondetailsModel")
const personaldetailsmodel= require("../models/personaldetails")

const router=express.Router()

router.post("/adddetails",async(req,res)=>{
    let data=req.body
    let adddetails= new addhousemodel(data)
    let result=await adddetails.save()
    res.json({
        status:"success"
    })
})

router.post("/personaldetails",async(req,res)=>{
    let data= req.body
    let personal=new personaldetailsmodel(data)
    let result=await personal.save()
    res.json({
        status:"success"
    })
})

module.exports= router