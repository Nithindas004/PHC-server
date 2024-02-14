const express= require("express")
const bcrypt= require("bcryptjs")
const addhousemodel=require("../models/addcommondetailsModel")
const personaldetailsmodel= require("../models/personaldetails")
const ashaworkerModel= require("../models/ashaworkersModel")


const router=express.Router()

router.post("/login",async(req,res)=>{
    let ephone= req.body.phone
    let epass= req.body.password
    let data = await ashaworkerModel.findOne({"phone":ephone})
    if (!data) {
        return res.json(
            {
                status:"invalid user"
            }
        )
    }
    let dbpass=data.password
    const match=await bcrypt.compare(epass,dbpass)
    if(!match)
    {
        return res.json(
            {
                status:"incorrect password"
            }
        )
    }
    res.json(
        {
            status:"success"
        }
    )

})

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