const req = require("express/lib/request")
const userschema=require("./userSchema")
const res = require("express/lib/response")

const aduser = ((req, res) => {
    let user = new userschema({
        username: req.body.username,
        email: req.body.email,
        age: req.body.age,
        // gender: req.body.gender,
        contact: req.body.contact,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    })
    user.save()
        .then((result) => {
            res.json({
                msg: "saved",
                data:result
            })
        })
        .catch((err) => {
            console.log(err);
            res.json({
               err:Err
            })
        })

})

const viewusers=((req,res)=>{
    userschema.find()
    .then((result) => {
        res.json({
            msg: "successfully find",
            data:result
        })

    })
    .catch((err) => {
        console.log(err);
    })
})

const srchbyid=((req,res)=>{
    userschema.findById ({_id:req.body.id})
    .then((result) => {
        res.json({
            msg: "successfully find",
            data:result
        })

    })
    .catch((err) => {
        console.log(err);
    })
})

const srchbyName=((req,res)=>{
    userschema.findOne({username:req.body.username})
    .then((result) => {
        res.json({
            msg: "successfully find",
            data:result
        })

    })
    .catch((err) => {
        console.log(err);
    })

})

const srchbyemail=((req,res)=>{
    userschema.findOne({email:req.body.email})
    .then((result) => {
        res.json({
            msg: "successfully find",
            data:result
        })

    })
    .catch((err) => {
        console.log(err);
    })
})

const dltdata=((req,res)=>{
    userschema.findByIdAndDelete ({_id:req.body.id})
    .then((result) => {
        res.json({
            msg: " Deleted successfully ",
            // data:result
        })
        .then((result) => {
            res.json({
                msg: "successfully find",
                data:result
            })
    
        })

    })
    .catch((err) => {
        console.log(err);
    })
})

const updtdata=((req,res)=>{
    userschema.findByIdAndUpdate ({_id:req.params.id},{
        username: req.body.username,
        email: req.body.email,
        contact: req.body.contact
    })
    .then((result) => {
        res.json({
            msg: " Updated successfully ",
            // data:result
        })
        .then((result) => {
            res.json({
                msg: "successfully find",
                data:result
            })
    
        })

    })
    
    .catch((err) => {
        console.log(err);
    })
})

const lgnuser=((req,res)=>{
    let username= req.body.username
    let password=req.body.password
      userschema.findOne ({username})
      .then((result) => {
          console.log(result);
          // if(username!=result.username){
          //     res.json({
          //         msg: "No user found",
          //         data:result
          //     })
          // }
          if(password==result.password){
              res.json({
                  msg: "Login Successfully",
                  data:result
              })
  
          }
          else{
              res.json({
                  msg: "Password Error",
                  
              })  
          }
  
      })
      .catch((err) => {
          console.log(err);
          res.json({
              msg:"Username Incorrect"
          })
      })
  })

  const Rstpswd=((req,res)=>{
    userschema.findOne({email:req.body.email})
    .then((result) => {
        console.log(result);
        
        if(result==null){
            res.json({
                msg: " No user found ",
            })
        }
        else{
            userschema.findOneAndUpdate
            ({email:req.body.email},{password:req.body.password})
          .then((result)=>{
            res.json({
                msg:"Reset Successfully"
            })
        })
            .catch((err)=>{
                console.log(err);
            })
        
        }
     })
    .catch((err) => {
        console.log(err);
    })

})

const Nwpswd=((req,res)=>{
    userschema.findOne({email:req.body.email})
    .then((result) => {
        console.log(result);
        
        if(result==null){
            res.json({
                msg: "Usern not found ",
            })
        }
        else{
            userschema.findOneAndUpdate
            ({email:req.body.email},{password:req.body.password})
          .then((result)=>{
            res.json({
                msg:"Reset Successfully"
            })
        })
            .catch((err)=>{
                console.log(err);
            })
        
        }
     })
    .catch((err) => {
        console.log(err);
    })

})
  


module.exports={aduser,viewusers,srchbyid,srchbyName,srchbyemail,dltdata,updtdata,lgnuser,Rstpswd,Nwpswd}