import express from 'express'
import Student from '../models/Student.js';
const routes = express.Router();

routes.get("/", async(req, res)=>{
    let result = await Student.find();
    res.send(result)
})
routes.get("/more", async(req, res)=>{
    // console.log(req.query);
    let whereObj = req.query;
    let result = await Student.find(whereObj);
    res.send(result);
})


routes.get("/:id", async(req, res)=>{
    let result = await Student.find({_id : req.params.id});
    res.send(result)
})

export default routes;


/*
https://www.amazon.in/s?k=iphone&crid=1I33J6QALCXDX&sprefix=iphone%2Caps%2C322&ref=nb_sb_noss_2

https://www.amazon.in/s?k=iphone&rh=n%3A976419031%2Cp_123%3A253649&dc&ds=v1%3AhX9u0JWUNsYw90wpFzwXA%2ByfJ2JeeHI2HRTPBpv3d0o&crid=1I33J6QALCXDX&qid=1753182758&rnid=91049095031&sprefix=iphone%2Caps%2C322&ref=sr_nr_p_123_3
*/