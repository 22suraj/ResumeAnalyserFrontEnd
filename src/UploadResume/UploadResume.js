import React from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { useNavigate} from "react-router-dom";


export default function UploadResume()
{
    const [file,setFile] = useState(null);

    const onInputChange =(e) =>
    {
        console.log(e.target.files)
       setFile(e.target.files[0])
    };

    const onSubmit = (e) =>
    {
            e.preventDefault(); 

            const data = new FormData();

            data.append('file',file)
            axios.post('//localhost:3000/upload',data)
            .then((e) =>
            {
                console.log("Success")
            })
            .catch((e)=>{
                console.error('Error',e)
            })
    };
  

    // let history=useNavigate();
    
    //   function handleClick() {
    //     history("/UploadResume");
    //   }
    
    return(
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            
                        <div className='form-group files'>
                <label>Upload Your Resume</label>
                
                <input type="file" 
                onChange={onInputChange}
                className='form-control' multiple=""/>
                
                </div>
                {/* <button type="button" onClick={handleClick}>
      Upload and Scan

    </button> */}
    <button type='button'>
         Scan and Analyze</button>
        </form>
    )

}
 
