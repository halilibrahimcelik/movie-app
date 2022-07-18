import React, { Fragment, useRef, useState } from 'react'

const PasswordModule = () => {
   // const emaillInputRef=useRef();
   const APP_KEY=process.env.REACT_APP_APP_KEY;

   const [email,setEmail]=useState()
    const handleSubmit=(e)=>{
        // const enteredEmail=emailInputRef.current.value;
        e.preventDefault();

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${APP_KEY}`)
    }

    return (
    <Fragment>
           <div className="modal" tabIndex="-1" id="edit-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Reset Your Password</h5>
         
            </div>
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control"  onChange={e=>{setEmail(e.target.value)}} id="exampleInputEmail1" />
    



            <div className="modal-footer">
        
              <button  
               data-bs-dismiss="modal"
              className="btn btn-danger">
                Send Confirmation Link
              </button>
            </div>
</form>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default PasswordModule;