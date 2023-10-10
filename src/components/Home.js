import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import img from '../images/logo_mern2.png'
import photo from '../images/lau.png'
import photo2 from '../images/lau2.png'

const Home = () => {

    const [warning, setWarning] = useState(false)

    useEffect(() => {
        setWarning(true)
    }, [])

    return (
        <div className="bg-black min-h-screen w-full">
            <Navbar />
            <div className="bg-black relative top-20 grid grid-cols-1 md:grid-cols-2 h-full w-full">

                <div className="flex md:hidden items-start justify-center h-[150px]">
                    <img className="h-[350px]" src={photo2} alt="#photo"></img>
                </div>

                <div className={`relative flex items-center h-[450px] duration-[2000ms] ${warning ? 'left-0' : 'left-[-100%]'}`}>
                    <div className="pl-[20px] md:pl-[40px] lg:pl-[60px]">
                        <p className="mb-6 text-white font-semibold text-2xl md:text-2xl lg:text-2xl hover:text-yellow-400 shadow-3xl">Hello!</p>
                        <p className="mb-3 text-white font-extrabold text-[35px] md:text-[35px] lg:text-[40px] hover:text-yellow-400 shadow-3xl">I am Carlos Salcedo</p>
                        <p className="mb-5 text-white font-semibold text-[25px] md:text-[25px] lg:text-3xl hover:text-yellow-400 shadow-3xl">Full Stack Developer MERN</p>
                        <div><img className="w-[350px] h-[149px] md:w-[350px] md:h-[149px] lg:w-[400px] lg:h-[170px]" src={img} alt="img_logo"></img></div>
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

export default Home;