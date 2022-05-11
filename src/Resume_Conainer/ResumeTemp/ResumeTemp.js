import React from 'react';
import './ResumeTemp.css'


export default function ResumeTemp()
{
    return(
        <div className='Resume-container'>
            <div className='container-left'>
           <span className='resume-cont'>
            <h1>
                            An example of a resume template
                        </h1>
                        </span>
                        
                        <p>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.</p>
                        <p>Notice the clean single-column design and how fancy formatting like tables, diagrams and graphs have been stripped out. ATS resume scanners either ignore these or read them incorrectly. You want to make sure you stick to text and a standard font with minimal use of special characters.

Similarly, notice how this resume also uses standard section titles, such as "Experience" and "Education". Resume scanners specifically look out for these core sections and you want to make sure they're easy to find.</p>

                </div>
            <div className='container-right'>
                
            {/* <div className='container-card bg'>
                </div> */}
                <div className='container-card'>
                <img  style={{width:"400px",height:"450spx"}} src={require ('../../../src/assets/Home/resume_4.jpg')} alt="imagee"/>      
                              </div>
                </div>
            </div>
        
    )

}