import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Profile.css'
// import { Navigate, useNavigate } from "react-router-dom";
import {Redirect} from "react-router-dom";
export default function Profile() {

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    // props.handleFile(fileUploaded);
  };

  // state = {
  //   redirect: false
  // }
  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/UploadResume' />
  //   }
  // }

  // const navigate = useNavigate();

  return (
  //   <div className="Profile-Container">
  //     <div className="Profile-Parent">
  //         <div className="Profile-details">
  //           <div className="colz">
  //             {/* <div className="colz-icon">

  //             </div> */}

  //           </div> 
           
  //           <div className="profile-details-name">
  //         <span className="primary-text">
  //          Free Code Scanner and Analyzer
  //       </span>
  //         </div>
  //         <div className="profile-details-role ">
  //           <span className="primary-text">
  //            Learn How to Improve Your Resume Instantly.
  //            Scan the Resume and get Analyzed
  //               </span>
            
  //           <span className="profile-role">
           
  //            <p>Resume checker score your resume help you to 
  //              {/* improve your resume and tell you the missig words according to the job title you are interseted in */}
  //           </p> 
  //           <span className="profile-role-tagline">

  //           </span>
  //           </span>

  //         </div>
          

  //      <div className="profile-options">
  //          <a href='#'>
  //          <button className="btn highlighted-btn">
  //               {""}
  //                Upload Resume{""}
  //          </button>

  //          </a>
         
  //      </div>
        

  // </div>
  // </div>
  // <div className="profile-picture">
  //          <div className="profile-picture-background">

  //          </div>  

  //     </div>
  //   </div>
  <div className="profile-2 row justify-conent-center">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="d-flex flex-column justify-content-center text-section">
        <span className="intro">
          FREE CODE SCANNER AND ANALYZER-SCORE YOUR RESUME
          </span>
          <span className="information py-2" >
          Learn How to Improve Your Resume Instantly.
            Scan the Resume and get Analyzed
                

          </span>
          <span className="sub-heading">
          Resume checker score your resume help you to 
              improve your resume and tell you the missig words according to the job title you are interseted in 
          </span>
          <div className="d-flex flex-row justify-content-center mt-5" >
            {/* {this.renderRedirect()} */}
             <button className="btn-upload-resume highlighted-btn  " onClick={handleClick}>Upload Resume</button> 
              {/* </div> */}
             
              {/* <Link to="/Uploadresume">Upload Resume</Link> */}
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}}
      />
           </div>

      </div>

    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="d-flex justify-content-center custom-div-outer-img">
          <img className="img-fluid" alt="no internet" src={require ("../../assets/Home/prof.jpg")} height="400px" width="400px" />
          <div className="img-bac">
            </div>
      </div>

    </div>
     {/* <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>UploadResume</button>
       </div> */}

  </div>
    
  );
}
