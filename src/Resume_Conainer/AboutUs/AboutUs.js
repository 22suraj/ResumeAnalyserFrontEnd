import React from 'react';
import './AboutUs.css'

export default function AboutUs()
{
    return(
         <div className='about-me-section aboutme-inside my-5'>
             <div className='d-flex flex-column'>
                 <span className='about-me-text'>How does resume scanner analyzer works?</span>
                 <div className='row justify-content-center shadow-lg my-5'>
                     <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                         <img  style={{width:"500px",height:"500px"}} src={require ('../../../src/assets/Home/new_resume.jpg')} alt="imagee"/>
                         </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column '>
                        <span className='some-text-about-us'>
                            We will scan the resume using <b>ML </b> then through our machine learning algorithm we will analyze the resume on the basis of
                            grammatical mistakes,spelling error,job interset and it compatiblity to relevant job.By analysing 
                            will generate a report to show a resume scanner what are its......  
                        </span>
                        
                        </div>
                     </div>

             </div>

         </div>
    )
}