import React, { useState } from 'react'

const Student = () => {
    let [stu, setStu] = useState([
        {
            id : 1,
            name : "rohit",
            age : 20,
            city : "indore"
        },
        {
            id : 2,
            name : "amit",
            age : 21,
            city : "mumbai"
        },
        {
            id : 3,
            name : "gaurav",
            age : 22,
            city : "pune"
        },
        {
            id : 4,
            name : "nilesh",
            age : 20,
            city : "indore"
        }
    ]);


    let addHandler = ()=>{
        setStu([...stu, { id : 5, name : "james", age : 40, city : "mumbai"}])
    }

    let updateHandler = ()=>{
        setStu((x)=>{
            return x.map(item=> item.id == 2 ? { name : "dev", age : 18, city : "ujjain", id : item.id } : item)
        })
    }
    let deleteHandler = ()=>{
        setStu((x)=>{
            return x.filter(item=> item.id !=3 );
        })
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h3 className='text-center my-4'>List of All Student</h3>
                <button onClick={addHandler} className='btn btn-primary'>Add</button>
                <button onClick={updateHandler} className='btn btn-info'>Update</button>
                <button onClick={deleteHandler} className='btn btn-danger'>Delete</button>
                <table className='table table-dark table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stu.map(item=>{
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Student