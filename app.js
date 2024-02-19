const express =require("express")
const cors= require("cors")
const mongoose = require("mongoose")

const AdminRoute= require("./controller/adminRuter")
const ashaworkerRoute = require("./controller/ashaworkerRouter")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nithindas1234:1234nith@cluster0.lvn9hia.mongodb.net/phcappDb?retryWrites=true&w=majority",
{useNewUrlParser: true})

app.use("/phc/admin",AdminRoute)
app.use("/phc/ashaworkers",ashaworkerRoute)

app.listen(3002,()=>{
    console.log("Server Running")
})