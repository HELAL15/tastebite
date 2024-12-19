'use client';

import Lottie from 'lottie-react';
import loaderAnimation from '../public/loader.json';

/**
 * ==> Component
 */
const loading = () => {
  return (
    <>
      <section className="p-0 fixed inset-y-0 inset-x-0 w-screen h-screen bg-white z-[99999999999999999999] ">
        <div className="container h-full w-full grid place-items-center">
          <Lottie
            className="loader h-full w-full grid place-items-center"
            animationData={loaderAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      </section>
    </>
  );
};

export default loading;
