const express=require('express')
const Router=express.Router()

const userController=require("./Modules/User/userController")
const blgController=require("./Modules/Blog/blogController")

Router.post("/adduser",userController.aduser)
Router.get("/viewallusers",userController.viewusers)
Router.post("/searchbyid",userController.srchbyid)
Router.post("/searchbyname",userController.srchbyName)
Router.post("/searchbyemail",userController.srchbyemail)
Router.post("/deletedata",userController.dltdata)
Router.post("/updatedata/:id",userController.updtdata)
Router.post("/logindata",userController.lgnuser)
Router.post("/resetpassword",userController.Rstpswd)
Router.post("/newpassword",userController.Nwpswd)

Router.post("/adduser",blgController.upload,blgController.addblog)

module.exports=Router