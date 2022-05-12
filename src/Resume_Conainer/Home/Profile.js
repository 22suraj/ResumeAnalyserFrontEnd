import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
// import { Navigate, useNavigate } from "react-router-dom";
import { Redirect } from "react-router-dom";
export default function Profile() {
  const [image, setImage] = useState("");
  const [quan_list, setQuanList] = useState("");
  const [common_words, setCommonWords] = useState("");
  const [grammarchk_dict, setGrammarchkDict] = useState("");
  const [misspelled_words, setMisspelledWords] = useState("");

  async function uploadImage() {
    setQuanList("Loading....");
    setCommonWords("Loading....");
    setGrammarchkDict("Loading....");
    setMisspelledWords("Loading....");
    const url = "http://localhost:4000/getpdfinfo";

    const formData = new FormData();
    formData.append("imagefile", image);

    axios({
      // Endpoint to send files
      url: url,
      method: "POST",
      data: formData,
    })
      // Handle the response from backend here
      .then((res) => {
        console.warn(res.data);
        setQuanList(res.data["quan_list"]);
        setCommonWords(res.data["common_words"]);
        setGrammarchkDict(res.data["grammarchk_dict"]);
        setMisspelledWords(res.data["misspelled_words"]);
      })

      // Catch errors if any
      .catch((err) => {});
  }

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (e) => {
    setImage(e.target.files[0]);

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
          <span className="information py-2">
            Learn How to Improve Your Resume Instantly. Scan the Resume and get
            Analyzed
          </span>
          <span className="sub-heading">
            Resume checker score your resume help you to improve your resume and
            tell you the missig words according to the job title you are
            interseted in
          </span>
          <div className=" justify-content-center mt-5 ">
            {/* {this.renderRedirect()} */}
            <input
              className="mb-5 ml-5 form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              id="formFile"
              onChange={handleChange}
            />
            <button
              className="mb-5 btn-upload-resume highlighted-btn  "
              onClick={uploadImage}
            >
              Analyse Resume
            </button>
            {/* </div> */}
            <h2> QUAN-LIST </h2>
            <p className="ml-5">{quan_list}</p>
            <h2> COMMON-WORDS </h2>
            <p className="ml-5">{common_words}</p>
            <h2> GRAMMARCHK-LIST </h2>
            <p className="ml-5">{grammarchk_dict}</p>
            <h2> MISSPELLED-WORDS </h2>
            <p className="ml-5">{misspelled_words}</p>
            {/* <Link to="/Uploadresume">Upload Resume</Link> */}
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="d-flex justify-content-center custom-div-outer-img">
          <img
            className="img-fluid"
            alt="no internet"
            src={require("../../assets/Home/prof.jpg")}
            height="400px"
            width="400px"
          />
          <div className="img-bac"></div>
        </div>
      </div>
      {/* <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>UploadResume</button>
       </div> */}
    </div>
  );
}
