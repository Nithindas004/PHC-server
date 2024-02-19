const express= require("express")
const bcrypt= require("bcryptjs")
const addhousemodel=require("../models/addcommondetailsModel")
const personaldetailsmodel= require("../models/personaldetails")
const ashaworkerModel= require("../models/ashaworkersModel")


const router=express.Router()

router.post("/login",async(req,res)=>{
    let ephone= req.body.phone
    let epass= req.body.password
    let dbdata = await ashaworkerModel.findOne({"phone":ephone})
    //console.log(dbdata)
    if (!dbdata) {
        return res.json(
            {
                status:"invalid user"
            }
        )
    }
    let dbpass=dbdata.password
    const match=await bcrypt.compare(epass,dbpass)
    if(!match)
    {
        return res.json(
            {
                status:"incorrect password"
            }
        )
    }
    else{
        return res.json(
        {
            status:"success",
            "userData":dbdata
        }
    )
    }
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