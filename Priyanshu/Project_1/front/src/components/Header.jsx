import React, { useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
    let location = useLocation();

    useEffect(() => {
        let x = location.pathname;
        let arr = x.split("/");
        if (arr[1] === "turfs") {
            window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
    }, [location]);

    return (
        <>

            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <a href="#" className="text-light me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                            <a href="#" className="text-light me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
                            <a href="#" className="text-light me-0"><i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex align-items-center justify-content-end">
                            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar & Hero Start --> */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                    <a href="index.html" className="navbar-brand p-0">
                        <h1 className="text-success"><i className="fas fa-star-of-life me-3"></i>Terapia</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/'>Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/about'>About</NavLink>
                                </li>

                                {
                                    localStorage.getItem("bussiness_access")
                                        ?
                                        <NavLink className='nav-link' to='/bussiness/myaccount'>{localStorage.getItem("bussiness_name")}</NavLink>
                                        :
                                        localStorage.getItem("user_access")
                                            ?
                                            ''
                                            :
                                            <div className="nav-item dropdown">
                                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Bussiness</a>
                                                <div className="dropdown-menu m-0">
                                                    <NavLink to="/bussiness/login" className="dropdown-item">Login</NavLink>
                                                    <NavLink to="/bussiness/signup" className="dropdown-item">Register</NavLink>
                                                </div>
                                            </div>
                                }

                                {
                                    localStorage.getItem("user_access")
                                        ?
                                        <>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link' to='/myaccount'>My Account</NavLink>
                                            </li>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link' to='/logout'>Logout</NavLink>
                                            </li>
                                        </>
                                        :
                                        localStorage.getItem("bussiness_access")
                                            ?
                                            ''
                                            :
                                            <>
                                                <li className='nav-item'>
                                                    <NavLink className='nav-link' to='/login'>Login</NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink className='nav-link' to='/signup'>Sign-Up</NavLink>
                                                </li>
                                            </>
                                }

                            </ul>
                        </div>
                        {
                            localStorage.getItem("user_access")
                                ?
                                <span className='fw-bold text-light offset-3 rounded-pill pt-1 pb-1' style={{ fontSize: "20px", border: "2px solid ", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "#1F4902" }}>{localStorage.getItem("name")}</span>
                                :
                                ''
                        }
                    </div>
                </nav>
            </div>
            {/* <!-- Navbar & Hero End --> */}

        </>
    )
}

export default Header







//password- NTUXopuXzQzRv7gD
// priyanshujha855
// mongodb+srv://priyanshujha855:RRAyDGQJLxDNYaKQ@cluster0.bl1vhrn.mongodb.net/