import React, { useEffect, useRef, useState } from 'react'
import './ContactUs.css'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import insta from '../assets/images/insta.png'
import fb from '../assets/images/fb.png'
import linkedin from '../assets/images/linkedin.png'
import { FaRegCopyright } from "react-icons/fa";



function ContactUs({ showmodal, setShowModal }) {
    const form = useRef();
    // const [showmodal, setShowModal] = useState(false);
    const [formState, setFormState] = useState({});
    // useEffect(() => {
    //     document.body.style.overflowY = "hidden"
    //     return () => {
    //         document.body.style.overflowY = "scroll"
    //     }
    // }, [])
    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    const submitFunction = (event) => {
        if (!formState.name) {
            alert("Please enter your name")
        }
        else if (!formState.email) {
            alert("Please enter your email")
        }
        else if (!formState.contactNo) {
            alert("Please enter your contact number")
        }
        else if (!formState.message) {
            event.preventDefault();
            const config = {
                SecureToken: "6343b922-9841-4053-b8e5-1a6ba3b55996",
                // Host: "smtp.elasticemail.com",
                To: "mrvirvijaymakwana@gmail.com",
                From: formState.email,
                Subject: `${formState.name} connected to you from website virinfra`,
                Body: `${formState.name} connected to you from website virinfra, user's Contact No ${formState.contactNo} and mail ${formState.email}`
            };
            if (window.Email) {
                window.Email.send(config).then(message => alert(message))
            }
            // console.log("showmodalshowmodalshowmodal", showmodal);
            setFormState({})
        }
        else {

            event.preventDefault();
            const config = {
                SecureToken: "6343b922-9841-4053-b8e5-1a6ba3b55996",
                // Host: "smtp.elasticemail.com",
                To: "mrvirvijaymakwana@gmail.com",
                From: formState.email,
                Subject: `${formState.name} connected to you from website virinfra`,
                Body: `${formState.name} connected to you from website virinfra,, user's Contact No ${formState.contactNo} and mail ${formState.email} message is ${formState.message}`
            };
            if (window.Email) {
                window.Email.send(config).then(message => alert(message))
            }
            // console.log("showmodalshowmodalshowmodal", showmodal);
            setFormState({})
        }
        // setShowModal(false)
    }
    return (
        <div style={{
            background: "#055591"
        }}>
            {/* <div className='modal-wrapper' ></div> */}
            <div className='pheading'>
                <div className='white-lines'>

                </div>
                <div className='heading' >
                    CONTACT US
                </div>
                <div className='white-lines'>

                </div>
            </div>
            <div className='modal-container' style={{
                // backgroundColor: 'linear-gradient(to bottom,#0175e7,#012b7b )'
            }}>
                {/* Modal */}

                <form ref={form} onSubmit={submitFunction} style={{
                    flexDirection: "column",
                    display: 'flex',
                    marginInline: 10,
                    padding: 15
                }}>
                    <div
                        className='contactus'
                    >
                        <div style={{
                            flexDirection: "column",
                            display: 'flex',
                            flex: 1,
                            // margin: 10,
                            marginTop: -5,
                            // backgroundColor:"tan"
                        }}>

                            <div className='divLabel'>
                                <label className='label'>*</label>
                                <input className='placeholder' placeholder='Full Name' type="text" name="name" value={formState.name || ''} onChange={changeHandler} />
                            </div>
                            <div className='divLabel'>
                                <label className='label'>*</label>
                                <input className='placeholder' type="email" placeholder='Email' name="email" value={formState.email || ''} onChange={changeHandler} />
                            </div>
                            <div className='divLabel'>
                                <label className='label'>*</label>
                                <input className='placeholder' type="number" placeholder='Contact No.' name="contactNo" value={formState.contactNo || ''} onChange={changeHandler} />
                            </div>
                        </div>
                        <div style={{
                            flexDirection: "column",
                            display: 'flex',
                            flex: 1,
                            margin: 10
                        }}>
                            {/* <label className='label'>Message</label> */}
                            <textarea className='message' name="message" placeholder='Message(Optional)' value={formState.message || ''} onChange={changeHandler} />
                        </div>
                    </div>
                    {/* <div className='submitBtn'>  */}
                    <input type="submit" className='submitBtn' value="Send" />
                    {/* </div> */}
                </form>
            </div>
            <div className='copyright'>
                <div className='copyrighttext'>
                   Copyright <FaRegCopyright style={{
                    marginInline:8
                        // backgroundColor:"tan" 
                    }} /> VIRINFRA MANAGEMENT SERVICES
                </div>
                <div className='socialmedia'>
                    <div className='socialmediachild'>
                        <a href='https://www.instagram.com/virinfrastructure/' target='_blank' ><img  className='insta' src={insta}/></a>
                    </div>
                    <div className='socialmediachild'><a  href='https://www.facebook.com/virinfra.in' target='_blank' ><img  className='fb' src={fb}/></a></div>
                    <div className='socialmediachild'><a href='https://www.linkedin.com/company/virinfra/' target='_blank' ><img  className='linkedin' src={linkedin}/></a></div>
                </div>
            </div>

        </div>
        // document.querySelector(".myContactUs")
    )
}

export default ContactUs
