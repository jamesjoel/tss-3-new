import { useState } from "react";
let About = ()=>{
    let [name, setName] = useState("gaurav")

    let handleClick = ()=>{
        setName((curr)=>{
            if(curr=="gaurav"){
                return "amit"
            }
            else{
                return "gaurav"
            }
        })
    }
    return(
        <>
        <h1>This is About Page</h1>
        <button onClick={handleClick} className="btn btn-info">OK</button>
        <h2>{name}</h2>
        </>
    )
}

export default About;