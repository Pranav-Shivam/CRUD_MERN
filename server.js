const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const bodyparser=require('body-parser')
const path=require('path')
const mongoose=require('mongoose')
const connectDB=require('./server/database/connection')

const app=express()

dotenv.config({path:'config.env'})
const PORT=process.env.PORT||3000

//log requests
app.use(morgan('tiny'))

//mongoDB connection
connectDB()

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//if you have store views folder and different things then
// app.set("view",path.resolve(__dirname,"views/ejs"))

//load my assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))

//load routes
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${3000}`)
})