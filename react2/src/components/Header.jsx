import {NavLink} from 'react-router-dom'
let Header = ()=>{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/help">Help</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/student">Student</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/demo1">Demo1</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Product</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Header;