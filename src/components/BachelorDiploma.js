import React from "react";
import Navbar from "./Navbar";
import BachelorOfIndustrialEngineeringES from '../images/Bachelor_of_Industrial_Engineering_ES .jpg'
import BachelorOfIndustrialEngineeringEN from '../images/Bachelor_of_Industrial_Engineering_EN .jpg'
import { Link } from "react-router-dom";

const BachelorDiploma = () => {
    return (
        <div className="bg-black min-h-screen w-full">
            <Navbar />
            <div className="bg-black relative top-28 flex justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-6 md:gap-10 lg:gap-2 mb-6">

                    <div className="flex flex-col items-center text-white w-[360px] md:w-[600px] lg:w-[500px]">{/*CARD*/}
                        <h1 className="font-semibold">TRADUCTION TO ENGLISH</h1>
                        <img className=" border-2 border-black" src={BachelorOfIndustrialEngineeringEN} alt="img_diploma"></img>
                    </div>

                    <div className="flex flex-col items-center text-white w-[360px] md:w-[600px] lg:w-[500px]">{/*CARD*/}
                        <h1 className="font-semibold">ORIGINAL IN SPANISH</h1>
                        <img className=" border-2 border-black" src={BachelorOfIndustrialEngineeringES} alt="img_diploma"></img>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default BachelorDiploma;
