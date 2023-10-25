import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { BsTelephonePlusFill, BsFillPersonCheckFill, BsEnvelopeAtFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot, FaSquareWhatsapp, FaSquareInstagram, FaSquareTwitter, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import crud from '../api/crud'
import swal from "sweetalert";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    /*SE DESHABILITO ESTA PARTE DE CODIGO PORQUE NO ESTAMOS UTILIZANDO CONEXION A LA API NI A LA DB 
    const [data, setData] = useState({ name: '', email: '', subject: '', message: ''})
    const { name, email, subject, message } = data
    const onChange = (e) => { setData({ ...data, [e.target.name]: e.target.value.trimStart() })}
    const createMessage = async () => {
        const body = { name: data.name, phone: phoneNumber, subject: data.subject, email: data, email, message: data.message}
        const response = await crud.POST(`/api/message`, body)
        //CLEANING INPUT BOXES FILELD// setData({ name: '', subject: '', email: '', message: '' })
        //CLEANING INPUT NUMBER PHONE FILELD// setPhoneNumber('+1')
        //SUCCESSFULL MESSAGE// swal("success", "Thank you for contacting me. I will be in contact with you as soon as posible", "success");
        //RESET useState[product] VALUES FOR EACH FIELD// const resetDataValues = Object.keys(data).map(key => {data[key] = ''})
    }
    const onSubmit = (e) => { e.preventDefault(); createMessage();}
    */

    const [phoneNumber, setPhoneNumber] = useState('')
    const onChangePhoneNummber = (value) => {
        setPhoneNumber(value)
    }
    const [state, handleSubmit] = useForm("xrgwjakr");
    const navigate = useNavigate();
    if (state.succeeded) {
        navigate('/')
        swal("success", "Thank you for contacting me. I will be in contact with you as soon as posible", "success"); 
        //<p>Thanks for joining!</p>;
    }

    return (
        <div className="bg-black min-h-screen h-full w-full">
            <Navbar />

            <div className="bg-black relative top-28 md:top-20 flex flex-col justify-center items-center">

                <h1 className="text-white font-semibold">CONTACT ME</h1>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 justify-center w-[85%]">

                    {/*INFORMACION DE CONTACTO LADO IZQUIERDO*/}
                    <div className="w-full  py-4 md:py-10 px-10 md:px-0 lg:px-3">

                        {/*LISTA DE INFORMACION EN ICONOS Y TEXT*/}
                        <ol className="text-white text-lg font-normal">
                            <li className="flex items-center"><BsFillPersonCheckFill className="text-xl" />&nbsp; Carlos Salcedo</li>
                            <li className="flex items-center"><BsTelephonePlusFill className="text-xl" />&nbsp; +1 347 3264935</li>
                            <li className="flex items-center"><IoLogoWhatsapp className="text-xl" />&nbsp; +57 318 7825631 </li>
                            <li className="flex items-center text-sm md:text-lg"><BsEnvelopeAtFill className="text-xl" />&nbsp; ingeniero.indbermeo@gmail.com</li>
                            <li className="flex items-center"><FaLocationDot className="text-xl" />&nbsp; Flushing, New York</li>
                            <li className="flex items-center"><FaLocationDot className="text-xl" />&nbsp; Cali, Colombia</li>
                        </ol>
                        <br />
                        {/*LOS ICONOS INFERIORES DE REDES SOCIALES*/}
                        <div className="flex justify-center md:justify-start gap-2">
                            <Link target="_blank" to={'https://wa.me/573187825631'}><FaSquareWhatsapp className="text-white text-3xl" /></Link>
                            <Link target="_blank" to={'http://linkedin.com/in/carlos-salcedo-203493215'}><FaLinkedin className="text-white text-3xl" /></Link>
                            <Link><FaSquareFacebook className="text-white text-3xl" /></Link>
                            <Link><FaSquareTwitter className="text-white text-3xl" /></Link>
                        </div>

                    </div>

                    {/*FORMULARIO DE CONTACTO LADO DERECHO*/}
                    <form onSubmit={handleSubmit} className=" flex flex-col gap-1 text-white text-[15px] font-semibold py-6 px-10 md:px-4 lg:px-10">

                        <div className="flex flex-col">
                            <label>Name</label>
                            <input className="text-black px-2 py-1 rounded-md leading-tight border-double border-4 border-black"
                                id="name"
                                type="text"
                                name="name"
                                //value={name}
                                placeholder="Enter your name"
                                //onChange={onChange}
                            >

                            </input>
                        </div>

                        <div className="flex flex-col">
                            <label>Phone Number

                                <PhoneInput className='bg-white text-black rounded-md leading-tight border-double border-4 border-black'
                                    country={'us'}
                                    value={phoneNumber}
                                    onChange={onChangePhoneNummber}
                                    inputStyle={{width:'auto', border:'white'}}
                                    inputProps={{
                                        required: true

                                    }}
                                />

                                <input className="hidden" id="phone" name="phone" value={phoneNumber}></input>

                            </label>
                            
                        </div>

                        <div className="flex flex-col">
                            <label>Email</label>
                            <input className="text-black px-2 py-1 rounded-md leading-tight border-double border-4 border-black"
                                id="email"
                                type="email"
                                name="email"
                                //value={email}
                                placeholder="Enter a valid email address"
                                required
                                //onChange={onChange}
                            >
                            </input>

                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>

                        <div className="flex flex-col">
                            <label>Subject</label>
                            <input className="text-black px-2 py-1 rounded-md leading-tight border-double border-4 border-black"
                                id="subject"
                                type="text"
                                name="subject"
                                //value={subject}
                                placeholder="Subject"
                                //onChange={onChange}
                            >

                            </input>
                        </div>

                        <div className="flex flex-col">
                            <label>Message</label>
                            <textarea className="text-black px-2 py-1 rounded-md leading-tight border-double border-4 border-black"
                                id="message"
                                type="text"
                                name="message"
                                //value={message}
                                rows={4}
                                placeholder="Enter your message"
                                //onChange={onChange}
                            ></textarea>

                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        </div>
                        {/*BOTON PARA ENVIAR LA INFORMACION DEL FORMULARIO*/}
                        <button type="submit" className="mt-2 bg-yellow-400 text-black rounded-md w-[80px] h-7 hover:opacity-70">Submit</button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contact;