const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    Userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: { type: String },
    content: { type: String },
    subcontent: { type: String },
    image: { type: Object }
})
module.exports = new mongoose.model("blogs", userschema)