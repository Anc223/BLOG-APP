const req = require("express/lib/request")
const userschema = require("./blogSchema")
const res = require("express/lib/response")
const multer=require("multer")

const addblog = ((req, res) => {
    let blog = new userschema({
        Userid: req.body.Userid,
        title: req.body.title,
        content: req.body.content,
        subcontent: req.body.subcontent,
        image:req.file
    })
    user.save()
        .then((result) => {
            res.json({
                msg: "saved"
            })
        })
        .catch((err) => {
            console.log(err);
        })

})

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage }).single("image");


const viewblog=((req,res)=>{
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

const srchbyId=((req,res)=>{
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

const srchbyNme=((req,res)=>{
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


const dltblog=((req,res)=>{
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

const updtblog=((req,res)=>{
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


module.exports={addblog,upload,viewblog,srchbyId,srchbyNme,dltblog,updtblog}