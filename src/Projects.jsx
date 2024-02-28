import React from 'react';
import './Projects.css'
import nintySix from './assets/logos/96.png'
import Amaltas from './assets/logos/AMALTASlogo.png'
import kLogo from './assets/logos/k10.png'
import nysa from './assets/logos/NYSA.png'
import opulent from './assets/logos/OPULENT.png'
import serene from './assets/logos/serene_edfice.png'
import vrundavan from './assets/logos/vrundavanbliss.png'
import zillion from './assets/logos/ZILLION.png'
import Carousel, { CarouselItem } from './components/Carousel';

export default function Project() {
  return (
    <div style={{
      backgroundColor: "#055591",
      // marginTop: "-10%",
      paddingBlock:20,
      display:"flex",
      flexDirection:"column"
    }}>
      <div className='projects-heading'>
        <div className='white-line'>

        </div>
        <text style={{
          // fontSize: 52,
          marginInline: "2%",
          // width: "12%",
          // alignSelf: "center"
        }}>
          Projects
        </text>
        <div className='white-line'>

        </div>
      </div>

      <div style={{
        marginTop:20
      }}>
          <Carousel>
          <CarouselItem>
            <img src={nintySix}
              // height={200}
              // width={200}
              className='carouselimg'
              // style={{
              //   margin:30
              // }}
            />
            </CarouselItem>
            <CarouselItem>

            <img src={Amaltas}
            className='carouselimg'
              // height={200}
              // width={200}
              // style={{
              //   margin:30
              // }}
              />
              </CarouselItem>
              <CarouselItem>

            <img src={kLogo}
            className='carouselimg'
              // height={200}
              // width={200}
              // style={{
              //   margin:30
              // }}
              />
              </CarouselItem>

              <CarouselItem>

            <img src={nysa}
              className='carouselimg'
              // height={200}
              // width={200}
              // style={{
              //   margin:30
              // }}
              />
              </CarouselItem>
              <CarouselItem>

            <img src={opulent}
            className='carouselimg'
              // height={200}
              // width={200}
              // style={{
              //   margin:30
              // }}
              />
              </CarouselItem>
              <CarouselItem>

            <img src={serene}
            className='carouselimg'
              // height={200}
              // width={200}
              // style={{
              //   margin:30
              // }}
              />
              </CarouselItem>
              <CarouselItem>

            <img src={vrundavan}
            className='carouselimg'
              // height={200}
              // width={200}
              // style={{
              //   margin:30
              // }}
              />
              </CarouselItem>
              <CarouselItem>

            <img src={zillion}
            className='carouselimg'
              // height={200}
              // width={200}
              // style={{
              //   margin:30
              // }}
              />
              </CarouselItem>
            </Carousel>

          {/* </div>
         
        </Carousel> */}
      </div>
    </div>
  );
}
