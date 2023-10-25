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



                    <div className="mb-8 flex flex-col gap-2 text-white text-justify text-[16px]  px-[40px] md:px-[0px] lg:px-[0px] md:pl-[40px] lg:pl-[70px]">
                        <h1 className=" mt-4 flex justify-center items-center w-full font-semibold">EXPERIENCE</h1>
                        <span>For the last three years, I have been fully dedicated to acquiring skills in several 
                            programming languages, including Java, Python, and JavaScript. I have also learned how 
                            to develop web applications using technologies such as Node.js, React.js, Express.js, MongoDB, 
                            and Tailwind CSS.
                        </span>

                        <span>I currently hold an associate degree in Web Application Development and several certificates 
                            in programming languages. I am also working on my first professional freelance project, in which 
                            I am building a web application using MERN tech for a Truck Dealership.
                        </span>

                        <span>Although I have not worked in a web development team or any IT Company, in my 20 years of experience 
                            in the Automotive Industry, I have gain valuable skills, including teamwork, time management, decision 
                            making, communication and adaptability, furthermore I have a great motivation.
                        </span>
                        <br />
                        <div className="w-full p-1 border-2 border-white">
                            <span>
                                <h1 className="flex justify-center items-center text-base  underline">Work Experience</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Full Stack Web Developer</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Web Application for a Truck Dealership</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Jun 2023 - Currently</h1>
                                <h1 className="flex text-[15px]">
                                This web application is being developed for a Truck Dealership where I am working
                                as a freelancer. It has a software module where the admin user and authorized staff
                                can create categories, truck manufacturers, models, engine manufacturers, engine
                                power, and cargo body type, in order to create products-trucks with accurate
                                information and avoid typing errors.</h1>
                                <Link target="_blank" to={'https://frontend-multicomerciales.vercel.app/'} className="flex items-center text-sm hover:text-yellow-400" ><TbWorldCheck className="text-xl" />&nbsp;&nbsp;https://frontend-multicomerciales.vercel.app</Link>
                            </span>
                        </div>
                        <br />
                        <div className="w-full p-1 border-2 border-white">
                            <span>
                                <h1 className="flex justify-center items-center text-base underline">E-commerce</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Full Stack Web Developer</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Personal Project</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />2023</h1>
                                <h1 className="flex text-[15px]">
                                This web application is a personal project developed by me, which I built primarily to
                                test my knowledge and skills about full-stack web development. In this application,
                                which is similar to an online shopping store, the customer can see all available
                                products on the /home page, but also has the option to view them by category.
                                Additionally, users can log in and use the REST API functions, such as: getting,
                                creating, updating, or deleting any category or product.</h1>
                                <Link target="_blank" to={'https://frontend-ecommerce-rho.vercel.app/'} className="flex items-center text-sm hover:text-yellow-400" ><TbWorldCheck className="text-xl" />&nbsp;&nbsp;https://frontend-ecommerce-rho.vercel.app</Link>
                            </span>
                        </div>
                        <br/>
                        <div className="w-full p-1 border-2 border-white">
                            <span>
                                <h1 className="flex justify-center items-center text-base underline">My Portfolio Website</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Full Stack Web Developer</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />Personal Project</h1>
                                <h1 className="flex text-[15px] items-center"><PiDotOutlineFill />2023</h1>
                                <h1 className="flex text-[15px]">
                                My portfolio is a web application that is linked to a MongoDB database through an
                                API built with Node.js and Express.js. This API is designed to create and store in the
                                database all messages submitted by the user from the front interface through the
                                /contact link.
                                </h1>
                                <Link target="_blank" to={'https://wwww.salcedocarlos.com/'} className="flex items-center text-sm hover:text-yellow-400" ><TbWorldCheck className="text-xl" />&nbsp;&nbsp;https://wwww.salcedocarlos.com</Link>
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
                                    <li className="flex text-base px-2"> - Manage and coordinate the technical staff team.</li>
                                    <li className="flex text-base px-2"> - Plan, schedule, and coordinate all tasks and actions required in the truck/cars maintenance and body repair processes.</li>
                                    <li className="flex text-base px-2"> - Email daily reports about the repair process stage to our corporate customers and insurance companies.</li>
                                    <li className="flex text-base px-2"> - Promote our services to customers.</li>
                                    <li className="flex text-base px-2"> - Listening to customers' truck/car issues and providing them with effective solutions.</li>
                                    <li className="flex text-base px-2"> - Analyze and evaluate Auto/Truck body damages, and then generate an estimate.</li>
                                    <li className="flex text-base px-2"> - Track and control the time required in the repair process to meet the deadlines set for our customers.</li>
                                    <li className="flex text-base px-2"> - keep in contact with our customers by email, phone or in person to give them updated information about their cars/trucks.</li>
                                    <li className="flex text-base px-2"> - Management of average indicators for production control.</li>
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