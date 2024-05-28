import Image from 'next/image';
import React from 'react';

function Services() {
  return (
    <div id='services'>
      <section className='bg-[#f2f5f9] py-32'>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div class='text-center mb-12'>
            <p class='mb-4 text-xl text-gray-400 uppercase tracking-[.25em]'>
              Our Services
            </p>
            <h2 class='pb-8 text-3xl font-bold sm:text-4xl text-[#070707]'>
              What will you get
            </h2>
          </div>

          <div class='m-4 sm:m-0 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3'>
            <div className='group bg-white rounded-lg shadow-lg p-10 transform hover:scale-105 hover:bg-[#2154F5] transition duration-300'>
              <div className='bg-[#F2F5F9] transition duration-300 w-[100px] h-[100px] rounded-lg flex items-center justify-center p-6 group-hover:bg-[#1848DF]'>
                <Image
                  src='/procurement.png'
                  width={100}
                  height={100}
                  quality={100} // Optional: set image quality
                  priority={true} // Optional: prioritize loading of the image
                  alt='Hero background'
                  className='group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100'
                />
              </div>
              <p className='text-[#070707] pt-8 text-lg font-bold group-hover:text-white'>
                Procurement
              </p>
              <p className='text-[#070707] pt-8 text-lg group-hover:text-white'>
                We've streamlined the buying process for Electric Ships and
                Sensors, following Pelindo-approved standards for compliance and
                efficiency. Trust us to efficiently source and procure the ideal
                maritime solutions for your operations.
              </p>
              <p className='text-[#070707] pt-8 text-lg group-hover:text-white'>
                Learn More →
              </p>
            </div>
            <div className='group bg-white rounded-lg shadow-lg p-10 transform hover:scale-105 hover:bg-[#2154F5] transition duration-300'>
              <div className='bg-[#F2F5F9] transition duration-300 w-[100px] h-[100px] rounded-lg flex items-center justify-center p-6 group-hover:bg-[#1848DF]'>
                <Image
                  src='/consultation.png'
                  width={100}
                  height={100}
                  quality={100} // Optional: set image quality
                  priority={true} // Optional: prioritize loading of the image
                  alt='Hero background'
                  className='group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100'
                />
              </div>
              <p className='text-[#070707] pt-8 text-lg font-bold group-hover:text-white'>
                Consultation
              </p>
              <p className='text-[#070707] pt-8 text-lg group-hover:text-white'>
                Enhance your maritime operations with expert advice on advanced
                sensor systems. Our specialists guide selecting and implementing
                the best sensor solutions for surveillance, navigation, or
                safety, ensuring your operations are effective and efficient.
              </p>
              <p className='text-[#070707] pt-8 text-lg group-hover:text-white'>
                Learn More →
              </p>
            </div>
            <div className='group bg-white rounded-lg shadow-lg p-10 transform hover:scale-105 hover:bg-[#2154F5] transition duration-300'>
              <div className='bg-[#F2F5F9] transition duration-300 w-[100px] h-[100px] rounded-lg flex items-center justify-center p-6 group-hover:bg-[#1848DF]'>
                <Image
                  src='/software.png'
                  width={100}
                  height={100}
                  quality={100} // Optional: set image quality
                  priority={true} // Optional: prioritize loading of the image
                  alt='Hero background'
                  className='group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100'
                />
              </div>
              <p className='text-[#070707] pt-8 text-lg font-bold group-hover:text-white'>
                Software Development
              </p>
              <p className='text-[#070707] pt-8 text-lg group-hover:text-white'>
                We develop tailored software solutions to streamline your
                operations. From package tracking to fleet management, our
                custom software enhances efficiency and simplifies your maritime
                operations.
              </p>
              <p className='text-[#070707] pt-8 text-lg group-hover:text-white'>
                Learn More →
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full mt-24 text-[#2154F5] font-semibold'>
          <div className='divider'>View All Services →</div>
        </div>
      </section>
    </div>
  );
}

export default Services;
