const express = require('express');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const homeRouter = require("./router/homeRouter")
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.port || 3000;


const app = express();

app.set("view engine","ejs");

app.use(express.static("public"))


app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())





app.use("",homeRouter)

mongoose.connect("mongodb+srv://admin:admin@cluster0.7qt6olw.mongodb.net/register_DB?retryWrites=true&w=majority")
.then(()=>{
    app.listen(port, ()=>{
        console.log("server started at "+port)
    });

}).catch((error)=>{
    console.log(error)
})
