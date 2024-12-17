'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const Hero = ({}) => {
  const t = useTranslations();
  const locale = useLocale();

  console.log(locale);
  // const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const [dir, setDir] = useState('ltr');

  // useEffect(() => {
  //   // Update direction when the locale changes
  //   setDir(locale === 'ar' ? 'rtl' : 'ltr');
  // }, [locale]);

  const dire = ['ar'].includes(locale) ? 'rtl' : 'ltr';
  useEffect(() => {
    console.log(dir);
    setDir(dire);
  }, [dire, dir]);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="hero"
        dir="ltr"
      >
        <SwiperSlide>
          <div
            dir={dir}
            className="relative w-full h-full overflow-hidden shadow-overlay"
          >
            <Image
              src="/header2.jpeg"
              alt="slider"
              sizes="100"
              width={0}
              height={0}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div
              className={`text absolute bottom-14 md:bottom-20 inset-x-14 md:inset-x-24 z-10 w-[70%] md:max-w-[350px] lg:max-w-[700px]`}
            >
              <span className="text-base font-semibold text-white">
                85% would make this again
              </span>
              <h2 className=" text-3xl md:text-[3rem] md:leading-[3rem] lg:text-[6rem] lg:leading-[6rem] text-white">
                {t('title')}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            dir={dir}
            className="relative w-full h-full overflow-hidden shadow-overlay"
          >
            <Image
              src="/header2.jpeg"
              alt="slider"
              sizes="100"
              width={0}
              height={0}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div
              className={`text absolute bottom-14 md:bottom-20 inset-x-14 md:inset-x-24 z-10 w-[70%] md:max-w-[350px] lg:max-w-[700px]`}
            >
              <span className="text-base font-semibold text-white">
                85% would make this again
              </span>
              <h2 className=" text-3xl md:text-[3rem] md:leading-[3rem] lg:text-[6rem] lg:leading-[6rem] text-white">
                {t('title')}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            dir={dir}
            className="relative w-full h-full overflow-hidden shadow-overlay"
          >
            <Image
              src="/header2.jpeg"
              alt="slider"
              sizes="100"
              width={0}
              height={0}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div
              className={`text absolute bottom-14 md:bottom-20 inset-x-14 md:inset-x-24 z-10 w-[70%] md:max-w-[350px] lg:max-w-[700px]`}
            >
              <span className="text-base font-semibold text-white">
                85% would make this again
              </span>
              <h2 className=" text-3xl md:text-[3rem] md:leading-[3rem] lg:text-[6rem] lg:leading-[6rem] text-white">
                cinnamon apple loaded tart
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
