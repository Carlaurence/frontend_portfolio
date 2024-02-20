import React from "react";
import Navbar from "./Navbar";
import ecommerce1 from '../images/screenshot_ecommerce1.png'
import multicomerciales from '../images/Screenshot_multicom_web.png'
import { BsFillCheckCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const Projects = () => {

    return (
        <div className="bg-black min-h-screen h-full w-full">
            <Navbar />

            <div className="bg-black w-full relative top-28 md:top-20 flex flex-col justify-center items-center">
                <h1 className="mt-4 mb-6 text-white font-semibold">MY PROJECTS</h1>
                
                <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px] lg:gap-[100px]">

                    <div className="mb-6 flex flex-col text-white text-base w-[340px] md:w-[340px] lg:w-[400px]">
                        <h1 className="flex justify-center items-center text-[14px] md:text-[14px] lg:text-[16px] uppercase">My first project as a full-stack developer</h1>
                        <Link target="_blank" to={'https://frontend-ecommerce-rho.vercel.app/'}>
                            <img className="w-full h-[250px] rounded-xl border-2 border-black opacity-70 hover:opacity-90" src={ecommerce1} alt="#image1"></img>
                        </Link>

                        <span className="mb-2 text-sm md:text-sm lg:text-[15px] text-justify">The technologies used to make this project are the following:</span>
                        <ol className=" mb-2 text-sm grid grid-cols-2">
                            
                            <li className="flex items-center"><BsFillCheckCircleFill/>Backend: Nodejs & Expressjs</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>Database: MongoDB</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>frontend: Reactjs</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>frontend deployment: Vercel</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>Styles: Tailwind CSS</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>Backend deployment: Azure</li>
                        </ol>
                        <span className=" text-sm md:text-sm lg:text-[15px] text-justify">This project is an E-commerce, 
                        where you will be able to see all variety of availble products at the /home page and also will see 
                        the available products by category if you are interested. Also you will be able to interact with the 
                        API RESTFULL where you can create, update, or delete any category or product previouly created by you.
                        Please, keep in mind that you must be logged as a guest or create an account to use the API functions.
                        </span>
                    </div>
                    

                    <div className="mb-6 flex flex-col text-white text-base w-[340px] md:w-[340px] lg:w-[400px]">
                        <h1 className="flex justify-center items-center text-[14px] md:text-[14px] lg:text-[16px] uppercase">Working on my first project as a freelance</h1>
                        <Link target="_blank" to={'https://frontend-multicamiones.vercel.app/'}>
                            <img className="w-full h-[250px] rounded-xl border-2 border-black opacity-70 hover:opacity-90" src={multicomerciales} alt="#image1"></img>
                        </Link>

                        <span className="mb-2 text-sm md:text-sm lg:text-[15px] text-justify">The technologies used to make this project are the following:</span>
                        <ol className="mb-2 text-sm grid grid-cols-2">
                            
                            <li className="flex items-center"><BsFillCheckCircleFill/>Backend: Nodejs & Expressjs</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>Database: MongoDB</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>frontend: Reactjs</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>frontend deployment: Vercel</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>Styles: Tailwind CSS</li>
                            <li className="flex items-center"><BsFillCheckCircleFill/>Backend deployment: Azure</li>
                        </ol>
                        <span className="text-sm md:text-sm lg:text-[15px] text-justify">This web application is being 
                            developed for a Truck Dealership. It has a software module where customers can create categories, 
                            truck manufacturers, models, engine manufacturers, engine power, and cargo body type, in order to 
                            create products-trucks with accurate information and avoid typing errors. You are invited to test
                            the API-RESTFULL where you will be able to create, update, and delete any category or product.                            
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
