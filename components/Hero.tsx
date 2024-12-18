'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const Hero = ({}) => {
  const t = useTranslations();
  const locale = useLocale();

  const [dir, setDir] = useState('ltr');

  const dire = ['ar'].includes(locale) ? 'rtl' : 'ltr';
  useEffect(() => {
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
              className={`text container flex flex-col gap-2 justify-end pb-16 md:pb-28 absolute bottom-0  inset-x-0  z-10  w-full h-full`}
            >
              <span className="text-base font-semibold text-white">
                85% would make this again
              </span>
              <h2 className=" max-w-[80%] md:max-w-[70%] text-3xl md:text-[3rem] md:leading-[3rem] lg:text-[6rem] lg:leading-[6rem] text-white">
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
              className={`text container flex flex-col gap-2 justify-end pb-16 md:pb-28 absolute bottom-0  inset-x-0  z-10  w-full h-full`}
            >
              <span className="text-base font-semibold text-white">
                85% would make this again
              </span>
              <h2 className="max-w-[80%] md:max-w-[70%] text-3xl md:text-[3rem] md:leading-[3rem] lg:text-[6rem] lg:leading-[6rem] text-white">
                {t('title')}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
