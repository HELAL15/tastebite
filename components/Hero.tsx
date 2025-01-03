'use client';

//import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// interface IProps {}
// : FC<IProps>
const Hero = ({}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination , Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="hero"
    >
      <SwiperSlide>
        <div 
          className="relative w-full h-full overflow-hidden shadow-overlay">
            <Image src='/header2.jpeg' alt="slider" sizes="100vh" width={0} height={0} loading="eager" className="w-full h-full object-cover" />
            <div className="text absolute bottom-14 md:bottom-20 inset-x-14 md:inset-x-24 z-10 w-[70%] md:max-w-[350px] lg:max-w-[700px]">
              <span className="text-base font-semibold text-white">85% would make this again</span>
              <h2 className=" text-3xl md:text-[3rem] md:leading-[3rem] lg:text-[6rem] lg:leading-[6rem] text-white">cinnamon apple loaded tart</h2>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        <div 
          className="relative w-full h-full overflow-hidden shadow-overlay">
            <Image src='/header.png' alt="slider" sizes="100vh" width={0} height={0} loading="eager" className="w-full h-full object-cover" />
            <div className="text absolute bottom-14 md:bottom-20 inset-x-14 md:inset-x-24 z-10 w-[70%] md:max-w-[350px] lg:max-w-[700px]">
              <span className="text-base font-semibold text-white">85% would make this again</span>
              <h2 className=" text-3xl md:text-[3rem] md:leading-[3rem] lg:text-[6rem] lg:leading-[6rem] text-white">cinnamon apple loaded tart</h2>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        <div 
          className="relative w-full h-full overflow-hidden shadow-overlay">
            <Image src='/header1.jpg' alt="slider" sizes="100vh" width={0} height={0} loading="eager" className="w-full h-full object-cover" />
            <div className="text absolute bottom-14 md:bottom-20 inset-x-14 md:inset-x-24 z-10 w-[70%] md:max-w-[350px] lg:max-w-[700px]">
              <span className="text-base font-semibold text-white">85% would make this again</span>
              <h2 className=" text-3xl md:text-[3rem] md:leading-[3rem] lg:text-[6rem] lg:leading-[6rem] text-white">cinnamon apple loaded tart</h2>
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
