import React, { useState } from 'react'

const Login = () => {

  let [w, setW] = useState(200)
  let [bg, setBg] = useState("white")

  let handleClick = ()=>{
    console.log("************ Click Event")
  }
  let handleDoubleClick = ()=>{
    console.log("############## Double Click");
  }
  let handleContextMenu = ()=>{
    console.log("@@@@@@@@@@@@ Right Button Click");
  }
  let handleMouseOver = ()=>{
    console.log("------------ Mouse Over Click");
  }
  let handleMouseMove = ()=>{
    console.log("&&&&&&&&&&&&& Mouse Move");
  }
  let handleMouseOut = ()=>{
    console.log("$$$$$$$$$$$$ Mouse Out");
  }
  let handleKeyDown = ()=>{
      setW((curr)=>{
        return curr+10;
      })
  }
  let handleKeyUp = ()=>{
    
  }

  let handleBlur = ()=>{
    setW(200)
    setBg("white")
  }

  let handleFocus = ()=>{
    setBg("yellow");
  }

  let demo = (x)=>{
    console.log("welcome ", x)

    x.preventDefault();
  }

  let demo2 =(e)=>{
    e.preventDefault();
  }

  let demo3 = (a)=>{
    a.preventDefault();

    
  }
  return (
    <>
      <h2>React Events Props --- DOM</h2>
      <button onDoubleClick={handleDoubleClick} onClick={handleClick} className='btn btn-primary'>OK</button>
      <div onMouseOut={handleMouseOut} onMouseMove={handleMouseMove} onMouseOver={handleMouseOver} onContextMenu={handleContextMenu} style={{height : "200px", width : "200px", backgroundColor : "red"}}></div>

      <br />
      <br />
      <input onFocus={handleFocus} onBlur={handleBlur} style={{width : w+"px", backgroundColor : bg}} type='text' onKeyUp={handleKeyUp} onKeyDown={handleKeyDown}/>
      <br />
      <br />
      <button onClick={(a)=>demo(a)} className='btn btn-success'>Hello</button>
      <br />
      <br />

      <img onContextMenu={(e)=>demo2(e)} src='https://images.unsplash.com/photo-1431440869543-efaf3388c585?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVza3RvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D' height="200" width="200"/>
      <br />
      <br />
      <input onPaste={(e)=>demo3(e)} type='text' />
      <br />
      <br />
      

    </>
  )
}

export default Login