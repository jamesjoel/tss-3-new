import React, { useState } from 'react'
import axios from 'axios'

const Product = () => {
    let [pro, setPro] = useState([]);
    let clickHandler = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(response => {
                // console.log(response.data)
                setPro(response.data);
            })
    }


    return (
        <div className='container my-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <button onClick={clickHandler} className='btn btn-success'>Get All Product</button>
                    <br />
                    <div className='row'>

                        {
                            pro.map(item => {
                                return (
                                    <div className='col-md-4 my-3'>
                                        <div className='card'>
                                            <div className='card-header'>
                                                <h5>{item.category}</h5>
                                            </div>
                                            <div className='card-body'>
                                                <img className='img-thumbnail' style={{ height: "200px", width: "100%" }} src={item.image} />
                                                <p><b>{item.title}</b></p>
                                                <small>$ {item.price}</small>
                                            </div>
                                            <div className='card-footer'>
                                                <button className='btn btn-sm btn-dark'>More</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

/*

import axios from 'axios'


axios
.get("API")
.then(response=>{
    response.data
})





*/