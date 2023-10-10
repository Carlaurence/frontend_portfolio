import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LogoJava from '../images/Java.png'
import LogoJS from '../images/JavaScript-bg-black.png'
import LogoPython from '../images/python.png'
import LogoNodejs from '../images/nodejs.png'
import LogoReactJs from '../images/Reactjs1.png'
import LogoSpringBoot from '../images/spring-boot.png'
import LogoTailwind from '../images/tailwindcss.png'
import LogoGithub from '../images/github.png'
import LogoVercel from '../images/vercel.png'
import LogoCloudinary from '../images/Cloudinary.png'
import LogoMongodb from '../images/mongodb.png'
import LogoSql from '../images/mysql.png'
import LogoExpress from '../images/expressjs.png'
import LogoHTML from '../images/html.png'
import LogoAzure from '../images/Azure.png'
import LogoNGINX from '../images/NGINX.png'
import LogoApache from '../images/apache.png'
import LogoDocker from '../images/docker.png'
import LogoVSCode from '../images/vs-code.png'
import LogoNetBeans from '../images/NetBeans.png'
import LogoPM2 from '../images/PM2.png'
import photo from '../images/lau.png'
import LogoUbuntu from '../images/Ubuntu.png'
import LogoLinux from '../images/Linux.png'

const Skills = () => {
    const [warning, setWarning] = useState(false)

    useEffect(() => {
        setWarning(true)
    }, [])

    return (
        <div className="min-h-screen bg-black h-full w-full">
            <Navbar />
            <div className="bg-black relative top-20 grid grid-cols-1 md:grid-cols-2 h-full w-full">

                <div className={`relative top-0 duration-[2000ms] ${warning ? 'left-0' : 'left-[-100%]'}`}>

                    <div className="grid grid-cols-1 items-center pl-[0px] md:pl-[40px] lg:pl-[60px] h-full">{/*GRID SKILLS*/}

                        <div className="mb-4 mt-4 flex flex-col items-center">{/*DIV SOFT SKILLS*/}

                            <h1 className="font-semibold text-white uppercase">Soft Skills</h1>

                            <hr className=" bg-white h-[2px] w-full" />
                            

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"> {/*GRID SOFT SKILLS*/}


                                <ol className="flex flex-col gap-2 items-center md:items-start text-[15px] text-white shadow-2xl">
                                    <li>TeamWork</li>
                                    <li>Comunication</li>
                                    <li>Emotional Intelligence</li>
                                </ol>

                                <ol className="flex flex-col gap-2 items-center md:items-start text-base text-white shadow-2xl">
                                    <li>Time Management</li>
                                    <li>Work Under Pressure</li>
                                    <li>Decision Making</li>
                                </ol>


                            </div>

                        </div>


                        <div className="mb-8 flex flex-col items-center">{/*DIV HARD SKILLS*/}
                            <h1 className="font-semibold text-white  uppercase">Hard Skills</h1>

                            <hr className=" mb-2 bg-white h-[2px] w-full" />
                            

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-white text-base font-semibold ">{/*GRID HARD SKILLS*/}

                                <div className="flex flex-col justify-center items-center  shadow-2xl">
                                    <h1>Languages</h1>
                                    <hr className=" bg-white w-[100%]" />
                                    <div className="flex items-center justify-center gap-2">
                                        <img className="w-[52px] h-[52px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src={LogoJava} alt="img_logo"></img>
                                        <img className="w-[52px] h-[52px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src={LogoPython} alt="img_logo"></img>
                                        <img className="w-[52px] h-[52px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src={LogoJS} alt="img_logo"></img>
                                        <img className="w-[52px] h-[52px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src={LogoHTML} alt="img_logo"></img>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center  shadow-2xl">
                                    <h1>FrameWorks & Libraries</h1>
                                    <hr className=" bg-white w-[100%]" />
                                    <div className="flex items-center justify-center gap-2">
                                        <img className="w-[65px] h-[49px] md:w-[40px] md:h-[30px] lg:w-[50px] lg:h-[38px]" src={LogoNodejs} alt="img_logo"></img>
                                        <img className="w-[65px] h-[49px] md:w-[40px] md:h-[30px] lg:w-[50px] lg:h-[38px]" src={LogoExpress} alt="img_logo"></img>
                                        <img className="w-[52px] h-[52px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src={LogoReactJs} alt="img_logo"></img>
                                        <img className="w-[52px] h-[52px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src={LogoTailwind} alt="img_logo"></img>
                                        <img className="w-[67px] h-[49px] md:w-[40px] md:h-[30px] lg:w-[50px] lg:h-[38px]" src={LogoSpringBoot} alt="img_logo"></img>
                                    </div>

                                </div>

                                <div className="flex flex-col justify-center items-center  shadow-2xl">
                                    <h1>Repositories & Clouds</h1>
                                    <hr className=" bg-white w-[100%]" />
                                    <div className="flex items-center justify-center gap-2">
                                        <img className="w-[52px] h-[52px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src={LogoGithub} alt="img_logo"></img>
                                        <img className="w-[52px] h-[52px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src={LogoCloudinary} alt="img_logo"></img>
                                        <img className="w-[91px] h-[32px] md:w-[56px] md:h-[20px] lg:w-[70px] lg:h-[25px]" src={LogoVercel} alt="img_logo"></img>
                                        <img className="w-[49px] h-[49px] md:w-[30px] md:h-[30px] lg:w-[38px] lg:h-[38px]" src={LogoAzure} alt="img_logo"></img>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center  shadow-2xl">
                                    <h1>DataBases & Servers</h1>
                                    <hr className=" bg-white w-[100%]" />
                                    <div className="flex items-center justify-center gap-2">
                                        <img className="w-[91px] h-[52px] md:w-[56px] md:h-[32px] lg:w-[70px] lg:h-[40px]" src={LogoMongodb} alt="img_logo"></img>
                                        <img className="w-[58px] h-[52px] md:w-[36px] md:h-[32px] lg:w-[45px] lg:h-[40px]" src={LogoSql} alt="img_logo"></img>
                                        <img className="w-[62px] h-[62px] md:w-[38px] md:h-[38px] lg:w-[48px] lg:h-[48px]" src={LogoNGINX} alt="img_logo"></img>
                                        <img className="w-[78px] h-[39px] md:w-[48px] md:h-[24px] lg:w-[60px] lg:h-[30px]" src={LogoApache} alt="img_logo"></img>
                                    </div>

                                </div>

                                <div className=" w-full flex flex-col justify-center items-center shadow-2xl">
                                    <h1>Enviroments IDE'S</h1>
                                    <hr className=" bg-white w-[100%]" />
                                    <div className="flex items-center justify-center gap-2">
                                        <img className="w-[156px] h-[40px] md:w-[96px] md:h-[28px] lg:w-[120px] lg:h-[35px]" src={LogoVSCode} alt="img_logo"></img>
                                        <img className="w-[117px] h-[39px] md:w-[72px] md:h-[24px] lg:w-[90px] lg:h-[30px]" src={LogoNetBeans} alt="img_logo"></img>
                                    </div>

                                </div>


                                <div className=" w-full flex flex-col justify-center items-center shadow-2xl">
                                    <h1>O.S & Tools</h1>
                                    <hr className=" bg-white w-[100%]" />
                                    <div className="flex items-center justify-center gap-2">
                                        <img className="w-[78px] h-[39px] md:w-[48x] md:h-[24px] lg:w-[60px] lg:h-[30px]" src={LogoLinux} alt="img_logo"></img>
                                        <img className="w-[84px] h-[28px] md:w-[52x] md:h-[18px] lg:w-[65px] lg:h-[23px]" src={LogoUbuntu} alt="img_logo"></img>
                                        <img className="w-[52px] h-[52px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src={LogoDocker} alt="img_logo"></img>
                                        <img className="w-[78px] h-[26px] md:w-[48x] md:h-[16px] lg:w-[60px] lg:h-[20px]" src={LogoPM2} alt="img_logo"></img>
                                    </div>

                                </div>


                            </div>






                        </div>

                    </div>
                </div>
                
                
                <div className="hidden md:flex items-start justify-center h-[450px]"> {/*DIV FOTO EN MD Y LG*/}
                    <img className="md:w-[385px] lg:w-[385px] lg:h-[450px]" src={photo} alt="#photo"></img>
                </div>
            </div>
        </div>
    );
}

export default Skills;

/***
import TeamWork from '../images/team-bg-black.png'
import Comunications from '../images/comunication-bg-black.png'
import Emotional from '../images/emotional intelligence1-bg-black.png'
import TimeManagement from '../images/Time Management-bg-black.png'
import UnderPressure from '../images/UnderPressure.png'
import MakingDecision from '../images/making Decision.png'
 * 
<img className="w-[9%]" src={TeamWork} alt="img_logo"></img>
<img className="w-[9%]" src={Comunications} alt="img_logo"></img>
<img className="w-[9%]" src={Emotional} alt="img_logo"></img>
<img className="w-[9%]" src={TimeManagement} alt="img_logo"></img>
<img className="w-[9%]" src={UnderPressure} alt="img_logo"></img>
<img className="w-[9%]" src={MakingDecision} alt="img_logo"></img>
 */