const express = require("express");
const Router = express.Router();
const homeSchema = require("../models/homeSchema"); 


Router.get("/",(req,res)=>{
    res.render("register",{email:''});
})


Router.post("/register",async(req,res)=>{
    try {
        const {
            Name,
            Class,
            Email,
            MobileNo
        }=req.body;

        const userData = new homeSchema({
            name:Name,
            class_n:Class,
            email:Email,
            phone_no:MobileNo
         });
        userData.save(err=>{
            if(err){
                console.log(err)
            }else{
                res.render("register");
            }
        })

        



    } catch (error) {
        res.render("register",{email:''});
        
    }
})




module.exports = Router;
