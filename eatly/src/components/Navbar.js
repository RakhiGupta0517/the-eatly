import React from 'react'
import './navbar.css';
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-list">
                  
                   {/* <a href=""></a> */}
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                    <Link to="/about">ABOUT</Link>
                    </li>
                    <div className="logo"><img src="logopg.png" alt="logo"/></div>
                    <li>                        
                        <Link to="/menu">MENU</Link>
                    </li>
                    <li><Link to="/franchise">FRANCHISE</Link></li>
                    </ul>

                    <div className="right-nav">
                        <div className="right-list">
                            <div className="enquiry">FOR ENQIREY </div>
                            <div className="contact">+9728824465</div>
                       
                        </div>
                    </div>
                

            </nav>
        </>

    )
}

export default Navbar