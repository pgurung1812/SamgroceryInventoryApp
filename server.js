const express= require("express")
const app=express()
const PORT=3000
const mongoose=require("mongoose")
const connectDB=require("./config/database")
const logger = require('morgan')
require("dotenv").config({path:"./config/.env"})
const homeRouter=require("./routes/mainRoute")
connectDB()
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

app.use("/",homeRouter)

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server is running, you better catch it!')
}) 