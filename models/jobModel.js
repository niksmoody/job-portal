const mongoose = require("mongoose");

const jobSchema = {
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    sal: {
        type: Number,
        required: true 
    },
    time:{
        type: string,
        required: true
    },
    loc:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    mobileNo:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    postedBy:{
        type: String,
        required: true
    },
}

const job = mongoose.model("job",jobSchema);

module.exports = job;