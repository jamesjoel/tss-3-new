import { useState } from "react";

let Help = ()=>{

    let [myBtn, setMyBtn] = useState("btn-info")
    let [lable, setLable] = useState("OK")

    let demo = (x)=>{
        setMyBtn("btn-danger")
        setLable(x)
    }

    return(
        <>
            <h2>This is Help Page</h2>
            {/* <button onClick={demo} className={"btn btn-sm "+myBtn}>{lable}</button>         */}
            <button onClick={()=>demo(100)} className={"btn btn-sm "+myBtn}>{lable}</button>        

        </>
    )
}

export default Help;