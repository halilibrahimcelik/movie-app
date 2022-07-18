import React, { Fragment, useRef, useState } from 'react';
import {toast,ToastContainer} from "react-toastify"

const PasswordModule = () => {
   const emailInputRef=useRef();
   const APP_KEY=process.env.REACT_APP_FIREBASE_WEB_KEY;

   const [email,setEmail]=useState();

    const handleSubmit=(e)=>{
        const enteredEmail=emailInputRef.current.value;
        e.preventDefault();

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${APP_KEY}`,{

        method:"POST",
        body:JSON.stringify({
            requestType:"PASSWORD_RESET",
            email:enteredEmail
        }),
        headers: {
            "Content-type": "application/json",
          },
        }).then(response=>{
        if(!response.ok){
            //?we got an error
            return response.json().then(data=>{
                throw new  Error("Invalid Email")
            })

        }else{
            //!we successfully send the request
            return response.json();
        }
        }).then((data)=>{
            console.log(data);
            toast.success(`Password send to your mail adress!`, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })

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
    <input type="email" className="form-control"   ref={emailInputRef} id="exampleInputEmail1" />
    



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
      <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

    </Fragment>
  )
}

export default PasswordModule;