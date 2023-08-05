const express = require("express");
const router = express.Router();
const job = require("../models/jobModel");
const { time } = require("console");

// # To Create New Single Note
//getting the newNote data from frontend url at backend'http://localhost:3001/create'
//accessing '/create' route and create newNote at backend by POST method and save to mongoDB
router.route("/create").post((req, res) => {
  const title = req.job.title;
  const desc = req.job.desc;
  const sal = req.job.sal;
  const time = req.job.time;
  const loc = req.job.loc;
  const category = req.job.category;
  const mobileNo = req.job.mobileNo;
  const email = req.job.email;
  const postedBy = req.job.postedBy;
  const newJob = new job({
    //'new Job' model is created for newNote at backend
    title, desc, sal, time, loc, category, mobileNo, email, postedBy
  });
  newJob.save();
  console.log("note saved in mongoDB");
});

// # To Display All Notes
//route to display all hte posts from the DB
// this will .get() all the notes from mongoDB and route them at "/display" => so in frontend fetch"/display" call will get all the notes that we fetched
router.route("/display").get((req, res) => {
  job.find().then((foundJob) => res.json(foundJob));
});

// # To Delete Single Note
//for delete note route => we have to use async-await in new version of mongodb route request
router.route("/delete/:id").get(async (req, res) => {
  // console.log(req.params.id);
  try {
    const jobFound = await job.findById(req.params.id);
    // console.log(noteFound);
    if (!jobFound) {
      res.status(400);
      throw new Error("job to delete, not found");
    } else {
      await noteFound.deleteOne();
      res.status(200).json({ _id: req.params.id });
    }
  } catch (err) {
    console.log(err);
  }
});

// # To Display Details of Single Note
//single note detail page using id means data single note send to route -> http://localhost:3001/detail/id
router.route("/detail/:id").get(async (req, res) => {
  console.log(req.params.id);
  try {
    const jobDetail = await job.findById({ _id: req.params.id });
    // console.log(noteDetail);
    res.status(200).json(jobDetail);
  } catch (err) {
    console.log(err);
  }
});

router.route("/search/:key").get(async(req,res)=>{
    try{
        console.log(req.params.key);
        const note = await job.find({
            "$or":[
                {title: { $regex: req.params.key}}
            ]
        });
        res.status(200).json(note);
    }
    catch(err){
        console.log("error cant search job!!!");
    }
});

module.exports = router;