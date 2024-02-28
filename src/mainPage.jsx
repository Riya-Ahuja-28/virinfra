import React, { useEffect, useRef, useState } from 'react'
import homeImage from "./assets/images/HomeImage.gif"
import Navbar from './navbar'
import fonts, { fontFamily } from './fonts'
import Service from './service'
import Aboutus from './aboutus'
import Project from './Projects'
import ContactUs from './components/ContactUs'
import Headroom from 'react-headroom'
import './mainpage.css'

function MainPage() {
    const [showmodal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [fix, setFix] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const servicesRef = useRef();
    const homeRef = useRef();
    const contactusRef = useRef();
    const aboutusRef = useRef();

    // useEffect(() => {
    //   window.addEventListener('scroll', () => {
    //     var header = document.querySelector("header");
    //     console.log("headerheaderheaderheader", header);
    //    header!=null && header?.classList?.toggle("sticky", window.scrollY>0);
    //   })
    // }, [])
    

    const handleService = () => {
        setIsOpen(false)
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleHome = () => {
        setIsOpen(false)
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleAboutus = () => {
        setIsOpen(false)
        aboutusRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const contactus = () => {
        setIsOpen(false)
        contactusRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    function setFixed() {
        if(window.scrollY>0){
            setScrolled(true)
        }
        if (window.scrollY >= 400) {
            setFix(true)
        }
        else {
            setFix(false)
            setScrolled(false)
        }
    }

    window.addEventListener("scroll", setFixed)
    return (
        <div style={{
            backgroundColor: "#055591",
        }}>
            <div
                ref={homeRef}
                style={{
                    backgroundImage: `url(${homeImage})`,
                    // backgroundColor:"#055591",
                    paddingTop: "5%",
                    paddingRight: "5%",
                    paddingLeft: "5%"
                }}>
                    <Headroom className='headroom'
                    style={{
                        backgroundColor: scrolled? "#012b7b":'transparent',
                        zIndex:3,
                        width:"100%"
                    }}
                    >
                        <Navbar
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            handleHome={handleHome}
                            handleAboutus={handleAboutus}
                            handleService={handleService}
                            contactus={contactus} />
                    </Headroom>
                <div style={{
                    marginBottom: "10%"
                }}>
                    <div style={{
                        flex: 0.5,
                        // backgroundColor:"aqua",
                        alignSelf: "start",
                        // margin:"2%",
                        marginTop: "2%",
                        width: "50%",
                        // borderRadius:8,
                        display: 'flex',
                        flexDirection: "column"
                    }}>
                        <text className='mainheading'>
                            ARE YOU A REAL ESTATE DEVELOPER?
                        </text>
                        <text className='wheading'
                        // style={{
                        //     color: "#fff",
                        //     fontSize: 32,
                        //     marginBlock: 10
                        // }}
                        >
                            WE HAVE A LOT IN BOX FOR YOU!
                        </text>
                    </div>
                    <div>
                        <text 
                        className='mainbody'
                        // style={{
                        //     color: "#fff",
                        //     // fontFamily: fontFamily.MonteserratLight,
                        //     fontSize: 18
                        // }}
                        >
                           {" We specialize in overseeing the comprehensive non-technical aspects of business operations for real estate developers. Our expertise empowers developers and builders to enhance their sales processes, ensuring timely revenue turnover. This, in turn, facilitates the execution of high-end, quality constructions and guarantees the committed delivery of projects. Partner with us for a seamless journey from sales efficiency to successful project completion.".toUpperCase()}
                        </text>
                    </div>
                    <div style={{
                        marginBlock: "2%",
                        backfaceVisibility: "visible",
                        // width: "20%",
                        // backgroundColor:"tan",
                        height: 45,

                    }}>
                        <button
                            onClick={
                                contactus
                            }
                            className='enquirebtn'
                            // style={{
                            //     backgroundColor: "transparent",
                            //     color: "#fff",
                            //     width: "100%",
                            //     height: "100%",
                            //     borderColor: "#fff",
                            //     borderRightColor: "#fff"
                            // }}
                            >
                            ENQUIRE
                        </button>
                    </div>

                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                >
                    <div className='homeWhite'>

                    </div>

                </div>
            </div>
            <div ref={servicesRef}>
                <Service />
            </div>

            <div ref={aboutusRef}>
                <Aboutus
                    onPressContinue={contactus}
                />
                <Project />
            </div>
            <div ref={contactusRef}>

                <ContactUs />
            </div>
        </div>

    )
}

export default MainPage
