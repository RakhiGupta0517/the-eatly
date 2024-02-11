import React from 'react'
import './franchise.css';
function Franchise() {
  return (
    <>
     <div className="contactinfo" id= "contactus">
            <h2 className="text-center"> Contact Us</h2>
            <div className="form">
                <input className="form-input"  type="text" name="name" id="name" placeholder="Enter Your name"/>
                <input className="form-input" type="number" name="name" id="phone" placeholder="Enter Your phone"/>
                <input  className="form-input" type="email" name="name" id="email" placeholder="Enter Your email"/>
                <textarea  className="form-input" name="text" id="text" cols="30" rows="10" placeholder="Elaborte your concern"></textarea>
                <button className="btn btn-sm ">Submit</button>
            </div>
            </div> 
    </>
  )
}

export default Franchise
