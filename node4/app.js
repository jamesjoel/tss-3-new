import express from 'express';
let app = express();


app.get("/", (req, res)=>{
    res.send("hello")
})

app.get("/about", (req, res)=>{
    res.send("about")
})

app.get("/contact", (req, res)=>{
    res.send("contact")
})


// // the .listen() is used for create Virtual Server
// // and run in http://localhost:3000 (port)
app.listen(3000, ()=>{  
    console.log("Server Start Successfuly ....")
 });

