import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Resume_Conainer/Home/Navbar";
import Home from "./Resume_Conainer/Home/Home";
import AboutUs from "./Resume_Conainer/AboutUs/AboutUs";
import ResumeTemp from "./Resume_Conainer/ResumeTemp/ResumeTemp";
import UploadResume from "./UploadResume/UploadResume";
import Newapp from "./Newapp";
import Login from "./Login";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Newapp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
