import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import JavaCertificate from './components/JavaCertificate'
import PythonCertificate from "./components/PythonCertificate";
import SoftwareDevelopCertificate from "./components/SoftwareDevelopCertificate";
import WebAppCertificate from "./components/WebAppCertificate";
import TechnicalDiploma from "./components/TechnicalDiploma";
import BachelorDiploma from "./components/BachelorDiploma";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; 
import Experience from "./components/Experience";
import Error404 from './components/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/skills" exact element={<Skills/>} />
        <Route path="/certificates" exact element={<Certificates/>} />
        <Route path="/java_certificate" exact element={<JavaCertificate/>} />
        <Route path="/python_certificate" exact element={<PythonCertificate/>} />
        <Route path="/software_development_certificate" exact element={<SoftwareDevelopCertificate/>} />
        <Route path="/webapp_certificate" exact element={<WebAppCertificate/>} />
        <Route path="/technical_diploma" exact element={<TechnicalDiploma/>} />
        <Route path="/bachelor_diploma" exact element={<BachelorDiploma/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/projects" exact element={<Projects/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/experience" exact element={<Experience/>} />
        <Route path='*' exact element={<Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
