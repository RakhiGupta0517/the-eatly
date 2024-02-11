import React from 'react'
import './home.css';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
   <>
  
         
           <div className="main-image"> 
          <img src="cutburger.jpg" alt="burger"/> 
          <div className="aboutus"> <Link to="/about">ABOUT </Link>
                  </div>
          <div className="menu"> <Link to="/menu">MENU</Link></div>
          <div className="franchise"> <Link to="/franchise">FRANCHISE</Link></div>
          <div className="eatly">
            <div>BECOME A </div>
            <div> THE EATLY FRACHISE </div>
            
        


       </div>
       </div>
       
   
   </>
  )
}

export default Home;