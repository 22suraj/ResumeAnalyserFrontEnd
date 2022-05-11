
import './App.css';
import Navbar from './Resume_Conainer/Home/Navbar';
import Home from './Resume_Conainer/Home/Home';
import AboutUs from './Resume_Conainer/AboutUs/AboutUs';
import ResumeTemp from './Resume_Conainer/ResumeTemp/ResumeTemp';
import UploadResume from './UploadResume/UploadResume';
function Newapp() {
  return (
    <div className="App">
      <Navbar/>
      <Home/> 
      <AboutUs/>
      <ResumeTemp/>
      <UploadResume/>
     </div>
  );
}

export default Newapp;
