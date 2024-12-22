'use client';

import Lottie from 'lottie-react';
import loaderAnimation from '../../public/loader.json';

import React from 'react';

const Loader = () => {
  return (
    <>
      <Lottie
        className="loader h-full w-full grid place-items-center"
        animationData={loaderAnimation}
        loop={true}
        autoplay={true}
      />
    </>
  );
};

export default Loader;
