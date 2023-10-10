import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from '../images/logo_mern1.png'

const Navbar = () => {

    const links = [
        //all of this change text-color hover
        { title: 'Home', link: '/' },//bg-black and my picture - Hello! I am Carlos Salcedo Full Stack Mern Developer (Hire me)
        { title: 'About', link: '/about' },//who I am,  
        { title: 'Skills', link: '/skills' },//Mostly MERN, But all of rest languages
        { title: 'Experience', link: '/experience' },// talk about my 20 years experience and all skills I have adquired and how positive this experience impact in this field or in a company that hire me. 
        { title: 'Projects', link: '/projects' }, //squares with a foto, bg-opacy and a text with tittle
        { title: 'Certificates', link: '/certificates' },//squares with a low definition photo and title explaining the type of degree and level hover: cursor pointer to get a QR
        { title: 'Contact', link: '/contact' }
    ]

    const [open, setOpen] = useState(false)

    return (
        <div className="fixed flex bg-black w-full h-20 z-10">
            <div className="flex justify-around md:justify-center items-center w-full md:w-[30%]">

                <img className="w-[140px]" src={img} alt="img_logo"></img>

                <div className="text-3xl text-white font-bold md:hidden " onClick={() => setOpen(!open)}>
                    <ion-icon name={`${open ? "close" : "menu-outline"}`}></ion-icon>
                </div>

            </div>

            <div className="hidden md:flex h-full w-full">
                <ul className="flex justify-between items-center h-full w-[85%]">
                    {
                        links.map((link, index) => (
                            <div key={index}>
                                <Link to={link.link}>
                                    <li className="font-bold text-white text-sm lg:text-base hover:cursor-pointer hover:text-yellow-400 shadow-2xl">{link.title}</li>
                                </Link>
                            </div>
                        ))
                    }
                </ul>
            </div>

            <div className="hidden md:flex items-center justify-center w-[15%]">
                <button className="bg-yellow-400 font-semibold w-20 h-7 rounded-2xl hover:opacity-70">Sign In</button>
            </div>


            {/* Setting Mobile Nav */}

            <ul className={`absolute flex flex-col items-center gap-5 md:hidden top-20 w-full h-screen bg-black bottom-0 py-24 pl-4 duration-500 uppercase ${open ? "left-0" : "left-[-100%]"}`}>
                {
                    links.map((link, index) => (
                        <div key={index}>
                            <Link to={link.link}>
                                <li className="font-bold text-white text-sm lg:text-base hover:cursor-pointer hover:text-yellow-400 shadow-2xl">{link.title}</li>
                            </Link>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar;