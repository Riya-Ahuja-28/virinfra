import React from 'react'
import HomeImage from "./assets/images/HomeImage.png"
import VirVijay from "./assets/images/VirVijayMakwana.png"
import Aditya from "./assets/images/AdityaIndulkar.png"
import Sakshi from "./assets/images/SakshiThaker.png"
import Ravi from "./assets/images/RaviYadav.png"
import Deep from "./assets/images/DeepPatel.png"
import NightVideo from "./assets/videos/nightVideo.mp4"
import NightCity from "./assets/videos/nightCity.mp4"
import DayCity from './assets/videos/dayVideo.mp4'
import Kavita from './assets/images/KavitaSahani.png'
import Sonal from './assets/images/SonalPatel.png'
import Project from './Projects'
import './aboutus.css'

function Aboutus({onPressContinue}) {

    return (
        <div
            style={{ backgroundColor: "#055591" }}
        >
            <div className='about'>
                <div style={{
                    flex: 0.5
                }}>
                    <div style={{
                        flex: 1,
                        // alignContent:"center",
                        // justifyContent:"center",
                        // alignItems:"center",
                        // alignSelf:"center"
                        display:"flex",
                        flexDirection:"column"

                    }}>
                        <div className='visionheading'
                        >
                            OUR VISION FOR IMPACT
                        </div>

                        <div 
                        // style={{
                        //     height: 5,
                        //     backgroundColor: "#fff",
                        //     // marginBlock:"10%",
                        //     // paddingLeft: "9%"
                        // }}

                        className='visionwhite'
                        >

                        </div>
                        <div style={{
                            // backgroundColor:"green",
                            // marginBlock: "10%",
                            padding: "2%"
                        }}>
                            <div className='pioneertext'
                            // style={{
                            //     padding: "2%",
                            //     marginInline: "5%",
                            //     // marginBlock:"5%",
                            //     color: "#fff",
                            //     textAlign: "justify",
                            //     fontSize: 18,
                            // }}
                            >
                                {"Welcome to VIR Infra Management Services, where our vision is to shape a sustainable future marked by thriving communities, flourishing industries, and relentless innovation.".toUpperCase()}
                            </div>
                            <div className='pioneertext'
                            // style={{
                            //     padding: "2%",
                            //     color: "#fff",
                            //     textAlign: "justify",
                            //     fontSize: 18,
                            //     marginInline: "5%",
                            // }}
                            >
                                {"Committed to excellence, we go beyond conventional boundaries, collaborating with diverse stakeholders to craft solutions that leave a lasting impact.".toUpperCase()}
                            </div>
                            <div className='pioneertext'
                            // style={{
                            //     padding: "2%",
                            //     color: "#fff",
                            //     textAlign: "justify",
                            //     fontSize: 18,
                            //     marginInline: "5%",
                            // }}
                            >
                                {"Our focus extends past projects; we strive to build legacies that empower future generations, fostering enduring prosperity for communities and industries alike.".toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    flex: 0.5,
                    // backgroundColor: "whitesmoke",
                }}>
                    <video
                        // // controls={true}
                        autoPlay
                        loop
                        muted
                        src={NightVideo}
                        type="video/mp4"
                        style={{
                            width: "100%",
                            height: "100%",
                            // flex:1
                        }}>
                    </video>
                </div>
            </div>
            <div
                className='about'
            // style={{
            //     backgroundColor: "#055591",
            //     display: "flex",
            //     flex: 1,
            //     flexDirection: "row",
            //     // padding:"5%"
            // }}
            >
                <div style={{
                    flex: 0.5,
                    // backgroundColor:"whitesmoke"
                }}>
                    <video src={DayCity}
                        autoPlay
                        loop
                        muted
                        // controls
                        typeo="video/mp4"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    // height={600}
                    // width={window.innerWidth-100}
                    />
                </div>
                <div style={{
                    flex: 0.5,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"flex-start",
                    alignItems:"flex-start",
                    alignContent:"flex-start",
                    // backgroundColor:"tan",
                    margin:0
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent:"center",
                        width:"100%"
                        // flex: 1,
                    }}>
                        <div className='pioneerheading'
                        >
                            PIONEERING COLLABORATIONS
                        </div>

                        <div className='pioneerwhite'>

                        </div>
                    </div>
                    <div style={{
                        // backgroundColor:"green",
                        // marginBlock:"10%",
                        padding: "2%"
                    }}>
                        <div className='pioneertext'
                        // style={{
                        //     padding: "2%",
                        //     marginInline: "5%",
                        //     // marginBlock:"5%",
                        //     color: "#fff",
                        //     textAlign: "justify",
                        //     fontSize: 18,
                        // }}
                        >
                            {"Our journey is guided by the belief that true transformation requires collaborative endeavors. We work hand in hand with government bodies, private enterprises, and communities, fostering partnerships that transcend short-term gains and instead, focus on long-term impact.".toUpperCase()}
                        </div>
                        <div className='pioneertext'>
                            {"From conceptualization to execution, our approach is rooted in a shared commitment to progress. By merging expertise from diverse fields, we develop holistic solutions that address complex challenges while fostering growth, resilience, and sustainability.".toUpperCase()}
                        </div>
                    </div>

                </div>
            </div>
            <div style={{
                backgroundColor: "#055591",
                // display:"flex",
                // flex:1,
                // flexDirection:"row",
                // padding:"5%"
            }}>
                <div className='innovatingtext'
                // style={{
                //     padding: "5%",
                //     color: "#fff",
                //     fontSize: 72,
                //     textAlign: "center",
                //     justifyContent: "center",
                //     alignContent: "center",
                //     alignItems: "center",
                //     // backgroundColor:"purple"
                // }}
                >
                    <text>
                        INNOVATING TOMORROW, TODAY
                    </text>


                </div>
                <img
                    src={HomeImage}
                    style={{
                        width: "100%"
                    }}
                />
                <div className='innovationtext'
                
                // style={{
                //     padding: "5%",
                //     textAlign: "center",
                //     display: "flex",
                //     color: "#fff",
                //     fontSize: 18
                // }}
                >
                    At VIR Infra, innovation isn't just a buzzword—it's the cornerstone of our endeavors. We embrace cutting-edge technologies, forward-thinking strategies, and imaginative approaches to reshape the infrastructure landscape.
                    Our commitment to sustainability is unwavering. We recognize that progress must harmonize with the environment. Through our initiatives, we aim to strike a balance that enriches lives while preserving the natural world for generations to come.

                </div>
                <div style={{
                    // backgroundColor: "tan",
                    flex: 1,
                    display: "flex"
                }}>
                    <video
                        src={NightCity}
                        // controls={true}
                        // height={800}
                        width={"100%"}
                        autoPlay
                        loop
                        muted
                    // width={800}
                    >
                    </video>
                </div>
            </div>
            <div
            className='virvijay'
            //  style={{
            //     display: "flex",
            //     flexDirection: "row",
            //     flex: 1,

            // }}
            >
                <div style={{
                    flex: 0.5
                }}>
                    <img src={VirVijay}
                     className='virvijayimg'
                    // onResize={}
                    />
                </div>
                <div style={{
                    flex: 0.5,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5%",
                    alignContent: "center"
                }}>
                    <div className='virtext'
                    // style={{
                    //     // textAlign:"center",
                    //     color: "#fff",
                    //     fontSize: 52,
                    //     fontWeight: "700"
                    // }}
                    >
                        VIRVIJAY MAKWANA
                    </div>
                    <div className='titletext'
                    // style={{
                    //     // textAlign:"center",
                    //     color: "#fff",
                    //     fontSize: 36,
                    //     fontWeight: "100"
                    // }}
                    >
                        EXECUTIVE DIRECTOR
                    </div>
                    <div style={{
                        height: 4,
                        backgroundColor: "#fff",
                        marginBlock: 15,

                    }}></div>
                    <div 
                    className='ceotext'
                    // style={{
                    //     // padding:"5%",
                    //     color: "#fff",
                    //     fontSize: 20,
                    //     textAlign: "justify"
                    // }}
                    >
                        LOOKING AFTER END TO END NON TECHNICAL BUSINESS
                        OPERATIONS OF REAL ESTATES DEVELOPERS, ENABLING DEVELOPERS/BUILDERS TO FACILITATE THEIR SALES EFFICIENCIES
                        TO ROTATE THEIR REVENUE
                        TIMELY TO EXECUTE HIGH END QUALITY CONSTRUCTIONS AND FOR THE COMMITTED DELIVERY OF THE PROJECTS.
                    </div>
                    <button style={{
                        height: 45,
                        width: 150,
                        marginBlock: 15,
                        backgroundColor: "#6fc1ce",
                        borderColor: "#fff",
                        borderBottomColor: "#fff",
                        color: "#fff",
                        fontWeight: "600"
                    }}
                    onClick={onPressContinue}
                    >
                        CONTACT US
                    </button>
                </div>
            </div>
            <div style={{
                display: "flex",
                flex: 1,
                marginBlock: "5%",
                flexDirection: "column"
            }}>
                <div
                    className='teamHeading'
                // style={{
                //     display: "flex",
                //     // marginInline:"-5%",
                //     // flex:0.2,
                //     flexDirection: "row",
                //     width: "100%",
                //     // backgroundColor:"aqua",
                //     justifyContent: "center",
                //     alignContent: "center",
                //     alignItems: "center",
                //     // alignSelf:"center"

                // }}
                >
                    <div
                        className='whiteBorder'
                    />
                    <div
                        className='ourTeam'
                    // style={{
                    //     marginInline: "2%",
                    //     color: "#fff",
                    //     fontSize: 42,
                    //     width: "15%"
                    //     // flex:0.1
                    // }}
                    >
                        OUR TEAM
                    </div>
                    <div
                        className='whiteBorder'
                    // style={{
                    //     height: 5,
                    //     backgroundColor: "#fff",
                    //     width: "42%",
                    //     // flex:0.4

                    // }} 
                    />

                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <ul
                        className='teamList'
                    // style={{
                    //     display: "flex",
                    //     flexDirection: "row",
                    //     justifyContent: "space-between",
                    //     alignItems: "center",
                    //     // flexWrap: "wrap",
                    //     textAlign:"center",
                    //     color:"#fff",
                    //     marginBottom:"10%",
                    //     marginTop:"5%",
                    //     padding:10
                    // }}
                    >
                        <div style={{
                            marginInline: 10
                        }}>
                            <div>
                                <img
                                    src={Aditya}
                                />

                            </div>
                            <div style={{
                                marginBlock: 5,
                                fontWeight: "500",
                                fontSize: 28,
                            }}>
                                ADITYA INDULKAR
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "200"
                            }}>
                                {"Business Development Team".toUpperCase()}
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 16,
                                fontWeight: "100"
                            }}>
                                As VirInfra's Business Development Executive, I drive growth
                                through strategic initiatives and expansion
                            </div>
                        </div>
                        <div style={{
                            marginInline: 10,

                        }}>
                            <div>
                                <img
                                    src={Sakshi}
                                />

                            </div>
                            <div style={{
                                marginBlock: 5,
                                fontWeight: "500",
                                fontSize: 28,
                            }}>
                                SAKSHI THAKER
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "200"
                            }}>
                                {"Sales and marketing team".toUpperCase()}
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 16,
                                fontWeight: "100"
                            }}>
                                I lead dynamic efforts to drive business success and
                                elevate our brand in the competitive real estate market
                            </div>
                        </div>
                        <div style={{
                            marginInline: 10
                        }}>
                            <div>
                                <img
                                    src={Kavita}
                                    style={{
                                    }}
                                />

                            </div>
                            <div style={{
                                marginBlock: 5,
                                fontWeight: "500",
                                fontSize: 28,
                            }}>
                                KAVITA SAHANI
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "200"
                            }}>
                                {"Sales and marketing team".toUpperCase()}
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 16,
                                fontWeight: "100"
                            }}>
                                I craft dynamic strategies for business success and brand elevation
                                in the competitive real estate market.
                            </div>
                        </div>
                    </ul>
                    <ul className='teamList'>
                        <div style={{
                            marginInline: 10,
                            // width:"25%",
                        }}>
                            <div>
                                <img
                                    src={Ravi}
                                />

                            </div>
                            <div style={{
                                marginBlock: 5,
                                fontWeight: "500",
                                fontSize: 28,
                            }}>
                                RAVI YADAV
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "200"
                            }}>
                                {"Sales and Marketing team".toUpperCase()}
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 16,
                                fontWeight: "100"
                            }}>
                                I orchestrate dynamic strategies to boost business success and
                                elevate our brand in the competitive real estate market.
                            </div>
                        </div>
                        <div style={{
                            marginInline: 10,
                            // width:"25%",
                        }}>
                            <div>
                                <img
                                    src={Deep}
                                />

                            </div>
                            <div style={{
                                marginBlock: 5,
                                fontWeight: "500",
                                fontSize: 28,
                            }}>
                                DEEP PATEL
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "200"
                            }}>
                                {"Sales and marketing team".toUpperCase()}
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 16,
                                fontWeight: "100"
                            }}>
                                I leverage expertise to drive market presence and fuel business
                                growth with impactful strategies
                            </div>
                        </div>
                        <div style={{
                            marginInline: 10,
                            // width:"25%",
                        }}>
                            <div>
                                <img
                                    src={Sonal}
                                />

                            </div>
                            <div style={{
                                marginBlock: 5,
                                fontWeight: "500",
                                fontSize: 28,
                            }}>
                                SONAL PATEL
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "200"
                            }}>
                                {"Finance and marketing team".toUpperCase()}
                            </div>
                            <div style={{
                                marginBlock: 5,
                                textAlign: "center",
                                fontSize: 16,
                                fontWeight: "100"
                            }}>
                                Aligning finance and marketing teams for seamless collaboration and strategic synergy.
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Aboutus