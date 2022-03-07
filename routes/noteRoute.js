const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel")

router.route("/").post((req,res) =>{
  console.log('got something');
  const title = req.body.title
  const content = req.body.content

  console.log(title);
  console.log(content);

  const newNote = new Note({
    title:title,
    content:content
  })
  newNote.save();
})

router.route("/db").get((req,res)=>{
  Note.find(function(err,notes){
    if(err){
      console.log(err);
    } else{
      res.json(notes)
    }
  })
})

router.route("/delete").post((req,res)=>{
  Note.deleteOne({id:req.body.id},function(err){
    if(err){
      console.log(err);
    } else{
      console.log("deleted item: ");
    }
  });
});


module.exports = router
