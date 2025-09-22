import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../config/Api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.css'
import Modal from 'react-bootstrap/Modal';
import './Turf.css'

const Turf = () => {
    let navigate = useNavigate()
    let [show, setShow] = useState(false)
    let param = useParams();
    let [turf, setTurf] = useState({});
    let [timingLoopArr, setTimingLoopArr] = useState([])
    let [timingClose, setTimingClose] = useState(null)
    let [timingOpen, setTimingOpen] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    let [price, setPrice] = useState(0)
    let currTime = new Date().getHours();
    let [timingSloteArr, setTimingSloteArr] = useState([])
    let [discount, setDiscount] = useState(0)

    useEffect(() => {
        axios
            .get(`${API_URL}/turf/${param.id}`)
            .then(response => {
                setTurf(response.data);

                let timing_open = response.data.timing_open.split(" ");
                let timing_close = response.data.timing_close.split(" ");
                let timing_open_hr = parseInt(timing_open[0].split(":")[0]);
                let timing_close_hr = parseInt(timing_close[0].split(":")[0]);

                setTimingOpen(timing_open_hr)
                setTimingClose(timing_close_hr)

                if (timing_open[1] === "PM") {
                    if (timing_open_hr !== 12) {
                        timing_open_hr += 12;
                    }
                }
                if (timing_close[1] === "PM") {
                    timing_close_hr += 12;
                }

                let diff_timing = timing_close_hr - timing_open_hr;
                let timing_arr = Array.from({ length: diff_timing }).fill("");
                setTimingLoopArr(timing_arr);
            })
    }, [param.id])

    let handlePrice = (e) => {
        let time = e.target.value;
        if (e.target.checked) {
            setTimingSloteArr(prevTime => [...prevTime, time])
            setPrice(prev => prev + 1);
        } else {
            setTimingSloteArr(prevTime => prevTime.filter(item => item !== time))
            setPrice(prev => prev - 1);
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let isLoggedIn = () => {
        if (localStorage.getItem("user_access")) {
            navigate("/book")
        } else {
            handleShow();
        }
    }

    let goToLoggin = () => {
        handleClose()
        navigate("/login")
    }

    let handelBook = (amount, full_amount, remain) => {
        let turfData = {
            turf_id: param.id,
            date: startDate,
            slot: timingSloteArr,
            amount: full_amount,
            adv_Amount: amount,
            remain_amount: remain
        }
        axios
            .post(`${API_URL}/booking`, turfData, {
                headers: { Authorization: localStorage.getItem("user_access") }
            })
            .then(response => {
                // console.log(response.data)
                navigate("/myaccount")
            })
    }

    return (
        <>
            <Hero />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8">
                        <h3>{turf.title}</h3>
                        <p><i className="fa fa-map-marker text-danger" aria-hidden="true"></i>
                            &nbsp; {turf.address}
                        </p>
                        <p>{turf.detail}</p>
                        <h4 className='mt-5'>Gallery</h4>
                        <img src="http://localhost:3000/images/4.jpg" alt="" style={{ width: "100%", height: "350px" }} />
                        <br />
                        <br />
                        <iframe
                            className='rounded w-100'
                            src={`https://maps.google.com/maps?q=${turf.lat},${turf.long}&z=15&output=embed`}
                            width="600"
                            height="450"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>

                    <div className="col-md-4 text-dark">
                        <h3>Book Your Appointment</h3>
                        <div className='card my-5'>
                            <div className="card-header">
                                Booking Date
                            </div>
                            <div className="card-body">
                                <DatePicker
                                    selected={startDate}
                                    showIcon
                                    minDate={new Date()}
                                    dateFormat={"dd/MMM/yyyy"}
                                    onChange={(date) => setStartDate(date)}
                                    className='form-control text-dark'
                                />
                            </div>
                        </div>

                        <div className='card my-5'>
                            <div className="card-header">
                                Booking Time ({turf.timing_open}-{turf.timing_close})
                            </div>
                            <div className="card-body timing-body">
                                <ul className="ks-cboxtags">
                                    {
                                        timingLoopArr.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    {
                                                        timingOpen + index <= currTime &&
                                                            startDate.getDate() === new Date().getDate() &&
                                                            startDate.getMonth() === new Date().getMonth() &&
                                                            startDate.getFullYear() === new Date().getFullYear()
                                                            ?
                                                            <>
                                                                <input disabled className='disabled' type="checkbox" id={"checkboxOne" + index} />
                                                                <label htmlFor={"checkboxOne" + index}>
                                                                    {(timingOpen + index) < 13 ? (timingOpen + index) : (timingOpen + index - 12)}:00
                                                                    {(timingOpen + index) < 13 ? 'AM' : 'PM'}
                                                                </label>
                                                            </>
                                                            :
                                                            <>
                                                                <input
                                                                    onChange={handlePrice}
                                                                    type="checkbox"
                                                                    id={"checkboxOne" + index}
                                                                    value={((timingOpen + index) < 13 ? (timingOpen + index) : (timingOpen + index - 12)) + ":00" + ((timingOpen + index) < 13 ? 'AM' : 'PM')}
                                                                />
                                                                <label htmlFor={"checkboxOne" + index}>
                                                                    {(timingOpen + index) < 13 ? (timingOpen + index) : (timingOpen + index - 12)}:00
                                                                    {(timingOpen + index) < 13 ? 'AM' : 'PM'}
                                                                </label>
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
                            <div className="card-header text-dark">
                                Price (₹{turf.price}/hr)
                            </div>
                            <div className="card-body text-dark">
                                Amount : {turf ? (price * turf.price).toFixed(2) : 0.00}
                            </div>
                        </div>

                        <button onClick={isLoggedIn} className='btn btn-success'>Book Now</button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-dark'>
                    If You Want To Book Turf So You Have To Login First
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={goToLoggin} className='btn btn-success btn-sm'>Login</button>
                    <button onClick={handleClose} className='btn btn-danger btn-sm'>Close</button>
                </Modal.Footer>
            </Modal>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <h3 className='text-dark text-center fw-bold'>Confirm Payment</h3>
                        <hr />
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <div className="alert alert-success">
                                    <table className="table form-control text-dark">
                                        <tbody>
                                            <tr>
                                                <td>Turf Name</td>
                                                <td>{turf.title}</td>
                                            </tr>
                                            <tr>
                                                <td>Booking Date</td>
                                                <td>{startDate.getDate() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getFullYear()}</td>
                                            </tr>
                                            <tr>
                                                <td>Timing Slot</td>
                                                <td>{timingSloteArr.map(item => item + ",")} ({timingSloteArr.length})</td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "300px" }}>Coupon Code</td>
                                                <td>
                                                    <p>
                                                        Lorem ipsum dolor sit amet.
                                                        <button onClick={() => setDiscount(100)} className='btn btn-success btn-sm'>Apply</button>
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4">
                                <div className="alert alert-success">
                                    <table className="table form-control text-dark">
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "300px" }}>Per Slot Amount</td>
                                                <td>{turf.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Slot Amount</td>
                                                <td>{timingSloteArr.length * turf.price}.00</td>
                                            </tr>
                                            <tr>
                                                <td>Discount</td>
                                                <td>{discount}.00</td>
                                            </tr>
                                            <tr>
                                                <td><b>Final Amount</b></td>
                                                <td><b>{(timingSloteArr.length * turf.price) - discount}</b></td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" className='fw-bold'>
                                                    Amount To Be Paid
                                                    <br /><br />
                                                    <button
                                                        onClick={() => handelBook(((timingSloteArr.length * turf.price) - discount), ((timingSloteArr.length * turf.price) - discount), 0)}
                                                        className='btn btn-light btn-sm equal-btn alert alert-success'
                                                    >
                                                        <small>Full Amount - ({(timingSloteArr.length * turf.price) - discount}.00)</small>
                                                    </button>
                                                    <br />
                                                    <button
                                                        onClick={() => handelBook(
                                                            ((timingSloteArr.length * turf.price) - discount) * 25 / 100,
                                                            ((timingSloteArr.length * turf.price) - discount),
                                                            ((timingSloteArr.length * turf.price) - discount) - (((timingSloteArr.length * turf.price) - discount) * 25 / 100)
                                                        )}
                                                        className='btn btn-light btn-borderd btn-sm equal-btn text-center alert alert-success'
                                                    >
                                                        <small>25% Amount - ({(((timingSloteArr.length * turf.price) - discount) * 25 / 100).toFixed(2)})</small>
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
        </>
    )
}

export default Turf