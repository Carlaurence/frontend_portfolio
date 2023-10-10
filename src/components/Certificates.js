import React from "react";
import Navbar from "./Navbar";
import JavaCertificateES from '../images/Certificate_Java_ES.jpg'
import PythonCertificateES from '../images/Certificate Python_ES.jpg'
import SoftwareDeveloperCertificateES from '../images/Certificate_Software_Developer_ES.jpg'
import WebAppsDeveloperCertificateES from '../images/Certificate Web App Development_ES.jpg'
import TechnicianDiplomaES from '../images/Technical_Diploma_Web_Apps_Development_ES.jpg'
import BachelorOfIndustrialEngineeringES from '../images/Bachelor_of_Industrial_Engineering_ES .jpg'
import { Link } from "react-router-dom";

const Certificates = () => {
    return (
        <div className="bg-black min-h-screen h-full w-full">
            <Navbar />

            
            <div className="bg-black relative top-28 md:top-20 flex flex-col justify-center items-center">

            <h1 className="mb-6 text-white font-semibold">CERTIFICATES</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-20 mb-8">

                <div className="flex flex-col text-white text-sm w-[300px] h-[400px]">{/*CARD*/}
                    <Link to={'/bachelor_diploma'}><img className="w-full h-[250px] border-2 border-black opacity-70 hover:opacity-90" src={BachelorOfIndustrialEngineeringES} alt="img_diploma"></img></Link>
                    <span className="font-semibold text-[16px]">Bachelor of Science in Industrial Engineering</span>
                    <span className="uppercase">Autonoma De Occidente University</span>
                    <span>Intensity Of 5 Years</span>
                    <span>Cali, Colombia</span>
                    <span>July 28th, 2017</span>
                    <Link target="_blank" to={'https://www.uao.edu.co/'}>https://www.uao.edu.co</Link>
                </div>

                <div className="flex flex-col text-white text-sm w-[300px] h-[400px]">{/*CARD*/}
                    <Link to={'/technical_diploma'}><img className="w-full h-[250px] border-2 border-black opacity-70 hover:opacity-90" src={TechnicianDiplomaES} alt="img_diploma"></img></Link>
                    <span className="font-semibold text-[16px]">Associate Degree in Web Applications Developer</span>
                    <span className="uppercase">Autonoma De Bucaramanga University</span>
                    <span>Intensity Of 800 Hours</span>
                    <span>Bucaramanga, Colombia</span>
                    <span>May 8th, 2023</span>
                    <Link target="_blank" to={'https://unab.edu.co/'}>https://unab.edu.co</Link>
                </div>

                <div className="flex flex-col text-white text-sm w-[300px] h-[400px]">{/*CARD*/}
                    <Link to={'/webapp_certificate'}><img className="w-full h-[250px] border-2 border-black opacity-70 hover:opacity-90" src={WebAppsDeveloperCertificateES} alt="img_diploma"></img></Link>
                    <span className="font-semibold text-[16px]">Completion Certificate for Web App Development Course</span>
                    <span className="uppercase">Autonoma De Bucaramanga University</span>
                    <span>Intensity Of 200 Hours</span>
                    <span>Bucaramanga, Colombia</span>
                    <span>December 29th, 2022</span>
                    <Link target="_blank" to={'https://unab.edu.co/'}>https://unab.edu.co</Link>
                </div>

                <div className="flex flex-col text-white text-sm w-[300px] h-[400px]">{/*CARD*/}
                    <Link to={'/software_development_certificate'}><img className="w-full h-[250px] border-2 border-black opacity-70 hover:opacity-90" src={SoftwareDeveloperCertificateES} alt="img_diploma"></img></Link>
                    <span className="font-semibold text-[16px]">Completion Certificate for Software Development Course</span>
                    <span className="uppercase">Sergio Arboleda University</span>
                    <span>Intensity Of 200 Hours</span>
                    <span>Bogota, Colombia</span>
                    <span>November 09th, 2022</span>
                    <Link target="_blank" to={'https://www.usergioarboleda.edu.co'}>https://www.usergioarboleda.edu.co</Link>
                </div>

                <div className="flex flex-col text-white text-sm w-[300px] h-[400px]">{/*CARD*/}
                    <Link to={'/java_certificate'}><img className="w-full h-[250px] border-2 border-black opacity-70 hover:opacity-90" src={JavaCertificateES} alt="img_diploma"></img></Link>
                    <span className="font-semibold text-[16px]">Completion Certificate for Java Programming Course</span>
                    <span className="uppercase">Sergio Arboleda University</span>
                    <span>Intensity Of 200 Hours</span>
                    <span>Bogota, Colombia</span>
                    <span>September 14th, 2022</span>
                    <Link target="_blank" to={'https://www.usergioarboleda.edu.co'}>https://www.usergioarboleda.edu.co</Link>
                </div>

                <div className="flex flex-col text-white text-sm w-[300px] h-[400px]">{/*CARD*/}
                    <Link to={'/python_certificate'}><img className="w-full h-[250px] border-2 border-black opacity-70 hover:opacity-90" src={PythonCertificateES} alt="img_diploma"></img></Link>
                    <span className="font-semibold text-[16px]">Completion Certificate for Python Programming Course</span>
                    <span className="uppercase">Sergio Arboleda University</span>
                    <span>Intensity Of 200 Hours</span>
                    <span>Bogota, Colombia</span>
                    <span>July 19th, 2022</span>
                    <Link target="_blank" to={'https://www.usergioarboleda.edu.co'}>https://www.usergioarboleda.edu.co</Link>
                </div>



            </div>
            </div>
        </div>
    );
}

export default Certificates;