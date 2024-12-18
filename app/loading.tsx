'use client';

import Lottie from 'lottie-react';
import loaderAnimation from '../public/loader.json';

/**
 * ==> Component
 */
const loading = () => {
  return (
    <>
      <section className="h-dvh">
        <Lottie
          className="h-1/2"
          animationData={loaderAnimation}
          loop={true}
          autoplay={true}
        />
      </section>
    </>
  );
};

export default loading;
