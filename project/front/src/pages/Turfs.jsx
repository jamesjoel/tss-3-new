import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../config/API'
import './Turfs.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.css'
import Modal from 'react-bootstrap/Modal';

const Turfs = () => {
    let navigate = useNavigate();

    let [isBook, setIsBook] = useState(false);

    let [discount, setDiscount] = useState(0);

    let [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    let [turf, setTurf] = useState({});
    let [timingLoopArr, setTimingLoopArr] = useState([]);
    let [timeClose, setTimeClose] = useState(null);
    let [timeOpen, setTimeOpen] = useState(null);
    let param = useParams();
    let [price, setPrice] = useState(0);
    let [timingSlotArr, setTimingSlotArr] = useState([]);

    let currTime = new Date().getHours();
    // console.log(currTime)

    useEffect(()=>{
        axios
        .get(`${API_URL}/turf/${param.id}`)
        .then(response=>{
            // console.log(response.data)
            setTurf(response.data);
            let timing_open = response.data.timing_open.split(" "); // ["12:00", "PM"]
            let timing_close = response.data.timing_close.split(" "); // ["7:00", "PM"]

            let timing_open_hr = parseInt(timing_open[0].split(":")[0]); // 12
            let timing_close_hr = parseInt(timing_close[0].split(":")[0]); // 7

            setTimeOpen(timing_open_hr)
            setTimeClose(timing_close_hr)
            
            if(timing_open[1]== "PM"){
                if(timing_open_hr == 12){
                    timing_open_hr = 12;
                }else{
                    timing_open_hr += 12; // 

                }
            }
            
            if(timing_close[1] == "PM"){
                timing_close_hr += 12; // 19
            }
            let diff_timing = timing_close_hr-timing_open_hr;
            // return;
            let timing_arr = Array.from({length:diff_timing}).fill("");
            // console.log(timing_arr)
            setTimingLoopArr(timing_arr);

        })
    },[])


    let handlePirce = (e)=>{
        let time = e.target.value;
        if(e.target.checked){
            setTimingSlotArr(prevTime=>[...prevTime, time]);
            setPrice(++price);
        }else{
            setTimingSlotArr(prevTime=>prevTime.filter(item=> item!=time));
            setPrice(--price);

        }
    }

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let isLoggedIn = ()=>{
    if(localStorage.getItem("user_access")){
        // navigate("/book");
        setIsBook(true)
    }else{
        handleShow();
    }
  }

  let goToLogin = ()=>{
    handleClose();
    navigate("/login")
  }

  let handleBook = (amount, full_amount, remain)=>{
    // console.log(amount) // 2900
    // console.log(full_amount) // 2900
    // console.log(remain) // 0
    let turfData = { 
            turf_id : param.id, 
            date : startDate, 
            slot : timingSlotArr, 
            amount : full_amount,
            adv_amount : amount,
            remain_amount : remain
        }
    axios
    .post(`${API_URL}/booking`, turfData, {headers : { Authorization : localStorage.getItem("user_access") }})
    .then(response=>{
        // console.log(response.data);
        navigate("/myaccount")
    })
  }


  return (
    <>
    <Hero />
   {
    isBook==false
    ?
    <div className="container my-5">
        <div className="row">
            <div className="col-md-8">
                <h3>{turf.title}</h3>
                <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;{turf.address}
                </p>
                <p>{turf.detail}</p>
                <h4 className='h4 mt-5'>Gallery</h4>
                <img src='http://localhost:3000/images/2.jpg' style={{width : "100%", height : "450px"}} />
            </div>
            
            
            
            <div className="col-md-4">
                <h3>Book Your Appointment</h3>
                <div className='card my-5'>
                    <div className='card-header'>
                        Booking Date
                    </div>
                    <div className="card-body">
                        <DatePicker style={{ border: "1px solid red", padding: "5px" }} selected={startDate} showIcon dateFormat="dd/MMM/YYYY" minDate={new Date()} onChange={(date) => setStartDate(date)}/>
                    </div>
                </div>
                <div className='card my-5'>
                    <div className='card-header'>
                        Booking Timing ({turf.timing_open} - {turf.timing_close})
                    </div>
                    <div className="card-body timing-body">
                        <ul className="ks-cboxtags">
                            
                            {
                                timingLoopArr.map((item, index)=>{
                                    return(
                                        <li key={index}>
                                            {
                                                timeOpen+index <= currTime && startDate.getDate() === new Date().getDate() && startDate.getMonth() === new Date().getMonth() && startDate.getFullYear() === new Date().getFullYear()
                                                ?
                                                <>
                                            <input disabled={true} className='disabled' type="checkbox" id={"checkboxOne"+index} value="Rainbow Dash"/>
                                            <label htmlFor={"checkboxOne"+index}>{(timeOpen+index) < 13 ? (timeOpen+index) : (timeOpen+index-12) }:00{(timeOpen+index) < 13 ? "AM" : "PM"}</label>
                                            </>    
                                                :
                                            <>
                                            <input onChange={(e)=>handlePirce(e)} type="checkbox" id={"checkboxOne"+index} value={((timeOpen+index) < 13 ? (timeOpen+index) : (timeOpen+index-12)) +":00"+((timeOpen+index) < 13 ? "AM" : "PM")}/>
                                            <label htmlFor={"checkboxOne"+index}>{(timeOpen+index) < 13 ? (timeOpen+index) : (timeOpen+index-12) }:00{(timeOpen+index) < 13 ? "AM" : "PM"}</label>
                                            </>

                                            }

                                        </li>
                                    )
                                })
                            }
                            
                            
    
                    </ul>
                    </div>
                </div>
                <div className='card my-5'>
                    <div className='card-header'>
                        Price (&#8377;{turf.price}/hr)
                    </div>
                    <div className="card-body">
                        Amount : { turf ? (price*turf.price).toFixed(2) : 0.00}
                    </div>
                </div>
                <button onClick={isLoggedIn} className='btn btn-primary'>Book Now</button>
            </div>
            
        </div>

        <div className="row">
            <div className="col-md-12 my-4">
                 <iframe src={`https://maps.google.com/maps?q=${turf.lat},${turf.long}&z=15&output=embed`} width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                
            </div>
        </div>
    </div>
    :
    <div className='container my-5'>
        <div className="row">
            <div className="col-md-12">
                <h4 className='text-center'>Confirm Payment</h4>
                <hr />
                <div className="row">
                    <div className="col-md-8">
                        <div className="alert alert-secondary">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Turf Name</td>
                                        <td>{turf.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Booking Date</td>
                                        <td>{startDate.getDate()+"/"+(startDate.getMonth()+1)+"/"+startDate.getFullYear()}</td>
                                    </tr>
                                    <tr>
                                        <td>Time Slot</td>
                                        <td>{timingSlotArr.map(item=>item+",")}({timingSlotArr.length})</td>
                                    </tr>
                                    <tr>
                                        <td>Coupon Code</td>
                                        <td style={{width : "500px"}}>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. <button disabled={discount==0 ? false:true} onClick={()=>setDiscount(100)} className='btn btn-info btn-sm'>Apply</button></p>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="alert alert-secondary">
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Per Slot Amount</td>
                                        <td>{turf.price}.00</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Slot Amount</td>
                                        <td>{timingSlotArr.length * turf.price}.00</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td>{discount}.00</td>
                                    </tr>
                                    <tr>
                                        <td><b>Final Amount</b></td>
                                        <td><b>{(timingSlotArr.length * turf.price) - discount }.00</b></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            Amount to Be Paid
                                            <br />
                                            <button onClick={()=>handleBook(((timingSlotArr.length * turf.price) - discount), ((timingSlotArr.length * turf.price) - discount), 0)} className='m-2 btn btn-secondary btn-sm'>Full Amount 
                                            ({(timingSlotArr.length * turf.price) - discount }.00)

                                            </button>
                                            <br />
                                            
                                            <button onClick={()=>handleBook(    ((timingSlotArr.length * turf.price) - discount) * 25/100,  ((timingSlotArr.length * turf.price) - discount),   ( ((timingSlotArr.length * turf.price) - discount) -  ((timingSlotArr.length * turf.price) - discount) * 25/100 )     )} className='m-2 btn btn-secondary btn-sm'>25% Amount
                                                
                                                ({((timingSlotArr.length * turf.price) - discount) * 25/100 }.00)
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   }
        
    
    
   



    
                            
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>If You want to Book this slot, you have to Login First</Modal.Body>
        <Modal.Footer>
             <button onClick={goToLogin} className='btn btn-success btn-sm'>Login</button>               
             <button onClick={handleClose} className='btn btn-danger btn-sm'>Close</button>               
        </Modal.Footer>
      </Modal>                       


    </>
  )
}



export default Turfs