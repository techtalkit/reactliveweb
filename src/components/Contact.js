import React, { useState } from 'react'

const Contact = () => {
  const[data,setData]=useState({
    fname:'',
    phone:'',
    email:'',
    message:''
  }
  );
  const inputEvent=(event)=>{
    // Object destructuring
    const{name,value}=event.target;
    setData((preVal)=>{
      return {
        // Here below with spread operator (...) it gather previuos values and then name with value captured
        //in the setData
        ...preVal,
        [name]: value,
      }
    })
  }
  const formSubmit=(e)=>{
    //e.preventDefault will restrict the reload of the page
    e.preventDefault();
    alert(`My name is ${data.fname} , my phone number is ${data.phone}
    ,my email is ${data.email} and my message is ${data.message}`);
  }
  return (
    <>
      <div classNameName='my-5'>
        <h1 classNameName='text-center'>Contact Us</h1>
      </div>
      <div classNameName='container  contact_div'>
        <div classNameName='row'>
          <div classNameName='col-md-6  col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="fname" className="form-label">Full name</label>
                <input type="text" name="fname" value={data.fname} onChange={inputEvent} className="form-control" id="fname" aria-describedby="fname" />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">Phone</label>
                <input type="number" name="phone" value={data.phone} onChange={inputEvent} className="form-control" id="phone" aria-describedby="phone" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Password</label>
                <input type="email" name="email" value={data.email} onChange={inputEvent} className="form-control" id="email" />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" name="message" value={data.message} onChange={inputEvent} id="message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
