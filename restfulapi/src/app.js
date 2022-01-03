const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routor/student")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);

app.get("/",(req, res)=>{
    res.send("home page")
})

app.listen(port, ()=>{
    console.log(`connecting port ${port}`)
});