import { useState } from "react";

let Home = ()=>{

    let [name, setName] = useState("Rohit");

    let [myBtn, setMyBtn] = useState("btn-primary");

    let [type, setType] = useState("password");

    let [a, setA] = useState(100);
    let handleClick = ()=>{
        // a = 500;
        setA(500);
        setMyBtn("btn-danger");
    }

    let changeNameHandler = ()=>{
        if(name=="Rohit"){
            setName("Ajay");
        }else{
            setName("Rohit");
        }
    }

    let typeHandler = ()=>{
        if(type=="password"){
            setType("text");
        }else{
            setType("password");
        }
    }


    return(
        <>
        <div className="row">
            <div className="col-md-6">
                <br />
                <button onClick={handleClick} className={"btn btn-lg "+myBtn}>OK</button>
                

                <br />
                <br />
                <button onClick={changeNameHandler} className="btn btn-info">Change</button>
                <h1>{name}</h1>
                <br />
                <br />
                <input type={type} className="form-control"/>
                <button onClick={typeHandler} className="btn btn-primary">show</button>

            </div>
        </div>
        </>
    )
}

export default Home;

