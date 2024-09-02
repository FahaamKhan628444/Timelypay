const express=require("express")
const dotenv=require("dotenv").config()
const cors=require("cors")
const app=express()
const PORT=7081;
const {mongoose}= require("mongoose")
const cookieParser=require('cookie-parser')

//databse connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("database is connected successfully")
}).catch((err)=>{
    console.log("database is not connected successfully", err.message)
}) 

//middleware

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))





app.use('/', require('./routes/authRoutes'))
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`listening on port no: ${PORT}`)
    }
})


