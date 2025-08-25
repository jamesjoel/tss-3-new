import { useState } from "react";

let Contact = ()=>{

    let [city, setCity] = useState(["indore", "pune", "delhi", "bhopal", "jaipur"])


    let addHandler = ()=>{
        setCity(["ujjain", ...city])
    }

    let updateHandler = ()=>{
        setCity((currentCity)=>{
            return currentCity.map(item=>item=="delhi" ? "New Delhi" : item);
            
        })
    }


    let deleteHandler = ()=>{
        setCity((currentCity)=>{
            // return currentCity.filter(item=> item != "jaipur");
            return currentCity.filter((item, index)=> index != 3 )
        })
    }

    return(
        <>
        <h1>Contact Page</h1>
        <button onClick={addHandler} className="btn btn-primary">Add</button>
        <button onClick={updateHandler} className="btn btn-info">Edit</button>
        <button onClick={deleteHandler} className="btn btn-danger">Delete</button>
        <br />
        {/* we want loop inside of JSX code */}
        
        {
            city.map(item=><h3>{item}</h3>)
        }

        </>
    )
}

export default Contact;

/*
    {
        arr.map((item, index)=>{
                return(
                    JSX
                )
            })
    }


    {
        arr.map((item, index)=>JSX)
    }



*/