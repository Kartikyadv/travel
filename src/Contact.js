import React, { useState } from 'react'

const Contact = () => {
  const [data,setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });

  const InputEvent = (event) => {
    const {name,value} = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname}.
${data.phone}.
${data.email}.
My request is ${data.msg}.`)
  }

  return (
<>
    <div className="my-5">
      <h1 className="text-center"> Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Full Name</label>
            <input 
            type="text" 
            class="form-control" 
            name="fullname"
            value={data.fullname}
            onChange={InputEvent}
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            placeholder='Enter your Full Name'
            />
            </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Contact Number</label>
            <input 
            type="number" 
            class="form-control" 
            name="phone"
            value={data.phone}
            onChange={InputEvent}
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            placeholder='Enter your Contact Number'
            />
            </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input 
            type="email" 
            class="form-control" 
            name="email"
            value={data.email}
            onChange={InputEvent}
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            placeholder='Enter your Email address'
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Message</label>
            <input 
            type="text" 
            class="form-control" 
            name="msg"
            value={data.msg}
            onChange={InputEvent}
            id="exampleInputPassword1"
            placeholder='Enter your Message'
            />
            <div class="form-text">We'll never share your information with anyone else.</div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    </div>
</>
  )
}

export default Contact