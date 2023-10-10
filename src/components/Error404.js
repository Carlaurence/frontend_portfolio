import React from "react";
import Navbar from "./Navbar";

const Error404 = () => {
    return (
        <div className="bg-black min-h-screen h-full w-full">
            <Navbar />
            <div className="bg-black flex flex-col justify-center items-center h-screen pb-[80px]">
                <h1 className="text-2xl font-bold text-white">ERROR 404. NOT FOUND</h1>
            </div>
        </div>

    )
}

export default Error404;