import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div>
      <div className='bg-[#f2f5f9] hero py-2 sm:py-32 text-[#070707]'>
        <div className='max-w-4xl hero-content flex-col lg:flex-row-reverse'>
          <div>
            <Image
              src='/about.png'
              width={2000}
              height={2000}
              quality={100} // Optional: set image quality
              priority={true} // Optional: prioritize loading of the image
              alt='Hero background'
            />
          </div>
          <div className='m-4 sm:m-0 mr-0 sm:mr-6'>
            <p class='mb-4 text-xl text-gray-400 uppercase tracking-[.25em]'>
              About Us
            </p>
            <h1 className='text-4xl font-bold leading-[3rem] mb-6'>
              Streamline your
              <br /> maritime operations
            </h1>
            <p className='py-6'>
              We are a team of maritime operations specialists committed to
              improving the efficiency and safety of marine operations.
            </p>
            <p className='py-6 mb-8'>
              We deliver innovative solutions designed to meet our clients'
              specific requirements. Our goal is to achieve excellence by
              providing solutions that boost operational performance. We value
              solid and enduring relationships with our clients, ensuring that
              each solution we provide significantly enhances their operations.
            </p>
            <button className='p-4 px-12 rounded-lg bg-[#2154F5] text-white'>
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
