const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// post data 
router.post("/students", async(req, res)=>{
    try{const user = new Student(req.body);
        const result = await user.save();
        res.status(201).send(result)
    }catch{
        res.status(400).send(e);
    }
})


// read the data of registrered student 

router.get("/students", async (req, res)=>{
    try{
        const studentdata = await Student.find();
        res.send(studentdata);
    }catch(e){
        console.log(e);
    }
})

// get the individual student data using id 

// 
router.get("/students/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        // console.log(req.params.id);
        // res.send(req.params.id);

       const studentData = await Student.findById(_id);

       if(!studentData){
           return res.status(404).send();
       }else{
            res.send(studentData);
       }

       
    }catch(e){
        console.log(e);
    }
})

// UPDATE the student by its id
router.patch("/students/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {new:true} )
        res.send(updateStudent)
    }catch(e){
        res.status(404).send(updateStudent);
        console.log(e)
    }
})

// DELETE student by id
router.delete("/students/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id, req.body)
        res.send(deleteStudent)
    }catch(e){
        res.status(404).send(e);
        console.log(e)
    }
})


module.exports = router;