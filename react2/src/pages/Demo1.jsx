import React, { useState } from 'react'

const Demo1 = () => {

  let [name, setName] = useState("rohit");

  let [clsName, setClsName] = useState("fa-thumbs-o-up");
  let [likeCounter, setLikeCounter] = useState(107)

  let handleClick = (x)=>{
    setName(100)
    console.log(x)
  }

  let handleLike = ()=>{
    if(clsName=="fa-thumbs-o-up"){
      setClsName("fa-thumbs-up")
      setLikeCounter(x=>++x)
    }
    else{
      setClsName("fa-thumbs-o-up");
      setLikeCounter(x=>--x)
    }
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={(e)=>handleClick(e)} className='btn btn-info'>OK</button>
      <br />
      <br />
      <i onClick={handleLike} className={"fa fa-2x "+clsName} aria-hidden="true"></i>

      <b className='ms-2'>{likeCounter}</b>
      {/* <i className="fa fa-2x fa-thumbs-up" aria-hidden="true"></i> */}
    </>
  )
}

export default Demo1