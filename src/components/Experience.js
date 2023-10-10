import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import photo from '../images/lau.png'
import { PiDotOutlineFill } from "react-icons/pi";
import { BiListCheck } from "react-icons/bi";
import { TbWorldCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

const Experience = () => {

    const [warning, setWarning] = useState(false)

    useEffect(() => {
        setWarning(true)
    }, [])

    return (
        <div className="bg-black min-h-screen w-full h-full">
            <Navbar />
            <div className=" bg-black relative top-28 md:top-20 grid grid-cols-1 md:grid-cols-2 h-full w-full">

                <div className={`lg:mb-0  relative flex items-center duration-[2000ms] ${warning ? 'left-0' : 'left-[-100%]'}`}>



                    <div className="mb-8 flex flex-col gap-2 text-white text-justify text-[17px]  px-[40px] md:px-[0px] lg:px-[0px] md:pl-[40px] lg:pl-[70px]">
                        <h1 className=" mt-4 flex justify-center items-center w-full font-semibold">EXPERIENCE</h1>
                        <span>During the last 3 years, I have been fully dedicated to get training in several
                            programming languages such as Java, Python and JavaScript. I have also trained in
                            how to develop web applications, for which I have learned to use technologies such
                            as  Node.js, React.js, Express.js, MongoDB, Tailwind CSS among others.
                        </span>

                        <span>Currently I have an associate degree in Web Application Development and during this
                            year I have developed some personal web applications to test my knowledge. Additionally,
                            I have been working as a freelance developer for 3 months on the construction of a web
                            application with the MERN stack technologies for a truck dealership.
                        </span>

                        <span>Although I have not worked in a web development team or any IT company, I have 20 years
                            of experience in the Automotive Industry. During this time, I have acquired a wide range of
                            skills, including teamwork, time management, decision making, communication and adaptability,
                            furthermore I have a great motivation. These skills have allowed me to successfully complete
                            a variety of tasks and projects, and I am confident that I can apply them to a career in web
                            development.
                        </span>
                        <br />
                        <div className="w-full p-1 border-2 border-white">
                            <span>
                                <h1 className="flex justify-center items-center text-base  underline">Work Experience</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Freelance</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Web Developer: Jun 2023 - Currently</h1>
                                <h1 className="flex text-[15px]"><BiListCheck className="text-3xl" />Working on a web application using MERN Stack technologies for a Truck Dealership</h1>
                                <Link target="_blank" to={'https://frontend-multicomerciales.vercel.app/'} className="flex items-center text-sm hover:text-yellow-400" ><TbWorldCheck className="text-xl" />&nbsp;&nbsp;https://frontend-multicomerciales.vercel.app</Link>
                            </span>
                        </div>
                        <br />
                        <div className="w-full p-1 border-2 border-white">
                            <span>
                                <h1 className="flex justify-center items-center text-base underline">Personal Project</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Freelance</h1>
                                <h1 className="flex text-[15px]"><BiListCheck className="text-3xl" />Development of a web application for online shopping</h1>
                                <Link target="_blank" to={'https://frontend-ecommerce-rho.vercel.app/'} className="flex items-center text-sm hover:text-yellow-400" ><TbWorldCheck className="text-xl" />&nbsp;&nbsp;https://frontend-ecommerce-rho.vercel.app</Link>
                            </span>
                        </div>
                        <br/>
                        <div className="w-full p-1 border-2 border-white">
                            <span>
                                <h1 className="flex justify-center items-center text-base underline">Other Previous Work Experience</h1>
                                <br/>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Company: Taller Automotriz La bodega SAS</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Position: Manager of Automotive Maintenance & Auto Body shop</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Location: Cali, Colombia</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Time: February 2018 - March 2021</h1>
                                <br/>
                                <h1 className="flex justify-center items-center text-base underline">Other Previous Work Experience</h1>
                                <br/>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Company: Industrias Bermeo</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Position: Manager of Truck Maintenance & Truck Body shop</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Location: Yumbo, Colombia</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Time: January 2012 - February 2018</h1>
                                <Link target="_blank" to={'https://www.industriasbermeo.com/'} className="flex items-center text-sm hover:text-yellow-400" ><TbWorldCheck className="text-xl" />&nbsp;&nbsp;https://www.industriasbermeo.com</Link>
                                <br/>
                                <h1 className="flex justify-center items-center text-base underline">Common Tasks & Responsibilities</h1>
                                <br/>
                                <ol className="flex flex-col gap-1">
                                    <li className="flex text-base px-2"> - Manage and coordinate the technical staff team</li>
                                    <li className="flex text-base px-2"> - Plan, schedule and coordinate all tasks related to truck/cars maintenance and body repair processes</li>
                                    <li className="flex text-base px-2"> - Hearing customers issues is the first step to providing them with solutions</li>
                                    <li className="flex text-base px-2"> - Deliver an excellent customer service</li>
                                    <li className="flex text-base px-2"> - To Market our services to customers</li>
                                    <li className="flex text-base px-2"> - To analyze and evaluate Auto/Truck body damages and then make an estimate</li>
                                    <li className="flex text-base px-2"> - To make work orders and give to each technician</li>
                                    <li className="flex text-base px-2"> - To follow up and keep under control the time required for eachprocess to be able to comply with the deadlines set to our customers</li>
                                    <li className="flex text-base px-2"> - To keep in contact with our customers by email, call phone or in person to give them information about it</li>
                                    <li className="flex text-base px-2"> - Management of average indicators for production control</li>
                                </ol>
                            </span>
                            
                        </div>

                    </div>
                </div>

                {/*LA FOTO MIA GRANDE DE PISO A TECHO */}
                <div className="hidden md:flex  items-start justify-center h-[450px]">
                    <img className="md:w-[385px] lg:w-[385px] lg:h-[450px]" src={photo} alt="#photo"></img>
                </div>
            </div>
        </div>
    );
}

export default Experience;