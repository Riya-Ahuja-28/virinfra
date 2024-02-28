import React from 'react'
import DollarVideo from './assets/videos/dollarVideo.mp4'
import Graphs from './assets/videos/graphsVideo.mp4'
import BridgeVideo from './assets/videos/bridgeVideo.mp4'
import './sevices.css'
import graphics from './assets/images/whitegraphics.png'
import building from './assets/images/whitebuilding.png'

function Service() {
    return (
        <div>
            <div
                style={{
                    background: 'linear-gradient(to bottom,#0175e7,#012b7b )'
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }}>
                    {/* <div
                        style={{
                            height: 100,
                            width: 147,
                            backgroundColor: "#fff",
                            borderBottomLeftRadius: 25,
                            marginTop:-5
                        }}
                    /> */}

                </div>
                <div
                className='services'
                    // style={{
                    //     padding: "5%",
                    //     display: "flex",
                    //     flexDirection: "row",

                    // }}
                >
                    <div style={{
                        flex: 0.3,
                        marginBlock: 10
                        // position:"absolute"
                    }}>
                        <div className='whiteBox' />
                        <div style={{
                            position: "sticky",
                            marginBlock: 20
                        }}>
                            <video src={BridgeVideo}
                                autoPlay
                                muted
                                loop
                                className='bridgeVideo'
                                // style={{
                                //     borderRadius: 20
                                // }} 
                                />
                                <img 
                                className='buildingimg'
                                src={building} />
                        </div>
                    </div>
                    <div style={{
                        flex: 0.7,
                        
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            
                        }}>
                            <h1 

                            className='servicesheading'
                            >
                                REAL ESTATE SALES
                            </h1>
                            <div 
                            className='realwhite'
                            >

                            </div>
                        </div>
                        <div style={{
                            // backgroundColor:"tan",
                            // alignContent:"center",
                            // alignItems:"center",
                            // alignSelf:"center",
                            // margin:20
                        }}>

                        <div
                         className='realestatebody'
                            // style={{
                            //     justifyContent: "center",
                            //     color: "#fff",
                            //     padding: "1%",
                            //     margin: "1%",
                            //     alignContent: "center",
                            //     textAlign: "",
                            //     marginInline: "5%",
                            // }}
                        >
                            Step into the vibrant realm of real estate sales, where each
                            property transaction is a finely tuned symphony, weaving together the fulfillment
                            of needs and the realization of dreams. As a dedicated real estate professional, you assume
                            the role of the maestro, skillfully orchestrating the perfect harmony between eager buyers and
                            motivated sellers. Your journey is marked by the artful balance of strong communication skills, acting as
                            your baton, and negotiation finesse, serving as your instrumental prowess.
                        </div>
                        <div
                        className='realestatebody'
                            // style={{
                            //     justifyContent: "center",
                            //     color: "#fff",
                            //     padding: "1%",
                            //     margin: "1%",
                            //     alignContent: "center",
                            //     textAlign: "justify",
                            //     marginInline: "5%",
                            // }}
                        >


                            In this exhilarating landscape, you have the power to transform mere property
                            dealings into a captivating crescendo of satisfaction for all parties involved. Become the conductor of
                            success, guiding each transaction with precision and expertise. Join the exclusive league of achievers who skillfully
                            turn keys into opportunities, ensuring that every sale becomes a standing ovation in the grand symphony of your rewarding
                            and fulfilling career encore!
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    background: 'linear-gradient(to bottom,#0175e7,#012b7b )'
                }}
            >

                <div
                    // style={{
                    //     padding: "5%",
                    //     display: "flex",
                    //     flexDirection: "row",


                    // }}
                    className='finance'
                >
                    <div style={{
                        flex: 0.7,
                        // backgroundColor:"aqua",
                        alignSelf:"flex-start",
                        display:'flex',
                        flexDirection:"column",
                    
                    }}>
                        <div 

                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <div
                            className='whiteLine'
                                // style={{
                                //     display: "flex",
                                //     flex: 0.5,
                                //     height: 5,
                                //     backgroundColor: "#fff",
                                //     marginLeft: "-9%",
                                // }}
                            >

                            </div>
                            <div
                            className='servicesheading'
                            style={{
                                // display: "flex",
                                // flex: 0.5,
                                // fontSize: 42,
                                // color: '#fff',
                                // marginLeft: "3%",
                                // marginRight: "15%"
                                // marginRight:"2%"
                                marginTop:35,
                                alignSelf:"flex-start"
                            }}
                            
                            >
                                PROJECT FINANCE & FUNDING

                            </div>

                        </div>
                        <div 
                        className='realestatebody'
                        // style={{

                        //     justifyContent: "center",
                        //     color: "#fff",
                        //     padding: "1%",
                        //     margin: "1%",
                        //     alignContent: "center",
                        //     textAlign: "justify",
                        //     marginInline: "5%",

                        // }}
                        >
                            Project finance represents a specialized method of financing large-scale projects,
                            relying on the future cash flows generated by the project for debt repayment. This financing
                            approach is commonly employed in endeavors such as infrastructure development or
                            energy projects. The essence of project finance lies in establishing a financial
                            structure independent of the project sponsor's balance sheet, emphasizing the project's
                            self-sufficiency and revenue potential.

                        </div>
                        <div 
                         className='realestatebody'
                        // style={{

                        //     justifyContent: "center",
                        //     color: "#fff",
                        //     padding: "1%",
                        //     margin: "1%",
                        //     alignContent: "center",
                        //     textAlign: "justify",
                        //     marginInline: "5%",

                        // }}
                        >
                            While project finance comes with inherent risks,
                            it offers significant rewards. Navigating this landscape requires a
                            keen understanding of diverse factors, including stakeholder dynamics and
                            regulatory considerations. Effectively managing these complexities can lead to a
                            successful project outcome, making project finance a dynamic and potentially lucrative
                            avenue for large-scale initiatives.
                        </div>
                    </div>
                    <div style={{
                        flex: 0.3,
                        display: "flex",
                        flexDirection: "column-reverse"
                    }}>
                        {/* <div style={{
                            height:200,
                            width:500,
                            zIndex:5,
                            backgroundColor:"red",
                            borderRadius:25
                        }}> */}


                        <video src={DollarVideo}
                            autoPlay
                            loop
                            muted
                            // controls
                            type='video/mp4'
                            className='dollarVideo'
                            
                            // style={{ 
                            // borderRadius: 25, 
                            // // position: "absolute", 
                            // // position: "sticky", 
                            // zIndex: 1, 
                            // top:25

                        // }}
                        // width={500} height={500}
                        >

                        </video>
                            <img src={graphics} className='grphicsimg' />
                        {/* </div> */}

                        <div 

                        className='dollarWhiteBox'
                        >

                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    background: 'linear-gradient(to bottom,#0175e7,#012b7b )',
                    // paddingBlock: "5%"
                }}
            >
                <div 
                className='investors'
                style={{
                    // display: "flex",
                    // flexDirection: "row",
                    // flex: 1,
                    // alignItems: "center",
                }}
                >
                    <div 
                    className='whites'
                    // style={{
                    //     flex: 0.1,
                    //     height: 5,
                    //     backgroundColor: "#fff"
                    // }}
                    >

                    </div>
                    <div 
                    className='investorsHeading'
                    // style={{
                    //     flex: 1.5,
                    //     margin: "3%",
                    //     color: "#fff",
                    //     fontSize: 48,
                    //     display:'flex',
                    //     justifyContent:"center"
                    //     // fontWeight: "700"
                    // }} 
                    >
                        INVESTORS PORTFOLIO MANAGEMENT
                    </div>
                    <div
                     className='whites'
                    // className='white-lines'
                    //  style={{
                    //     flex: 0.1,
                    //     height: 5,
                    //     backgroundColor: "#fff"
                    // }}
                    >

                    </div>

                </div>
                <div style={{
                    justifyContent:"center",
                    alignItems:"center",
                    alignContent:"center",
                    // padding:50
                }}>
                <video src={Graphs}  // controls={true}
                    // width={500}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    className='graphVideo'
                    width={"90%"}
                    // width={window.innerWidth-100}
                            height={window.height-100}
                >

                </video>
                    </div>
                <div
                className='investorsbody'
                    // style={{
                    //     color: "#fff",
                    //     textAlign: "center",
                    //     alignSelf: "center",
                    //     paddingInline: "5%",
                    //     fontSize: 20,
                    //     // paddingBlock: 20

                    // }}
                    >
                    {"Investors Portfolio Management is the process of selecting, monitoring, and adjusting investments to meet goals. It's a complex process that requires deep understanding of financial markets.".toUpperCase()}
                </div>
            </div>
        </div>
    )
}

export default Service