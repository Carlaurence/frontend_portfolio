import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import photo from '../images/lau.png'

const About = () => {

    const [warning, setWarning] = useState(false)

    useEffect(() => {
        setWarning(true)
    }, [])

    return (
        <div className="bg-black min-h-screen w-full h-full">
            <Navbar />
            <div className=" bg-black relative top-28 md:top-20 grid grid-cols-1 md:grid-cols-2 h-full w-full">

                <div className={` mb-6 lg:mb-0  relative flex items-center duration-[2000ms] ${warning ? 'left-0' : 'left-[-100%]'}`}>



                    <div className=" flex flex-col gap-2 text-white text-justify text-[16px]  px-[40px] md:px-[0px] lg:px-[0px] md:pl-[40px] lg:pl-[70px]">
                        <h1 className="flex justify-center items-center w-full font-semibold">ABOUT ME</h1>
                        <span>I am an Industrial Engineer with over 20 years of experience working in the
                            automotive industry as a service manager. However, during the pandemic, I faced
                            an unprecedented challenge that ultimately affected my job stability. As a result,
                            I had the opportunity to observe the importance of web applications in the world today,
                            which sparked my interest in changing careers.
                        </span>

                        <span>Based on this analysis, I decided to pursue a career in web development field, whereby in the last
                            3 years I have dedicated a lot of time to get training in different programming languages.
                            As of now, I can not only say that I have obtained several certifications and an
                            associate degree in web development, but I can also demonstrate my skills and knowledge
                            through the projects uploaded to this portfolio.
                        </span>

                        <span>Currently, I feel prepared to take on this new challenge and am looking for a web
                            developer position at a company where I can apply my knowledge and skills.
                        </span>

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

export default About;