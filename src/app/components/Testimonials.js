import Image from 'next/image';
import React from 'react';

function Testimonials() {
  return (
    <div className='bg-[#f2f5f9] py-32 flex justify-center'>
      <div className='max-w-3xl w-full'>
        <div className='text-center mb-12'>
          <p className='mb-4 text-xl text-gray-400 uppercase tracking-[.25em]'>
            Testimonials
          </p>
          <h2 className='pb-8 text-3xl font-bold sm:text-4xl text-[#070707]'>
            What our clients say
          </h2>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center m-4 sm:m-0'>
          <div className='w-[100%] bg-white text-[#070707] p-8 rounded-lg mr-0 sm:mr-16'>
            <div className='flex items-center'>
              <Image
                src='/john.png'
                width={75}
                height={75}
                quality={100}
                priority={true}
                alt='John Doe'
                className='rounded-full'
              />
              <div className='ml-8 flex flex-col'>
                <p className='font-bold text-2xl'>John Doe</p>
                <p className='text-[#B0C1D1] text-sm'>Business Man</p>
              </div>
            </div>
            <div className='divider'></div>
            <p>
              Mauris sed nisi ut magna laoreet accumsan eu eget massa. Nullam
              sit amet nisl nisl. Vestibulum volutpat elit vehicula, suscipit
              est nec, convallis mauris. Nam sed maximus sapien. Proin finibus
              velit ac dignissim congue. Vivamus et mollis felis.
            </p>
          </div>
          <div className='w-[100%] h-[30rem] carousel carousel-vertical rounded-box'>
            <div className='carousel-item h-1/3 w-full flex items-center justify-center'>
              <div className='bg-white rounded-lg w-[100%] p-4 flex items-center'>
                <Image
                  src='/john2.png'
                  width={50}
                  height={50}
                  alt='John Doe'
                  className='rounded-full mr-6 w-[70%]'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-xl text-[#070707] mb-2'>
                    John Doe
                  </p>
                  <p className='text-sm text-[#070707]'>
                    Nulla facilisi. Maecenas sit amet vulputate velit. Interdum
                    et malesuada fames ac ante.
                  </p>
                </div>
              </div>
            </div>
            <div className='carousel-item h-1/3 w-full flex items-center justify-center'>
              <div className='bg-white rounded-lg w-[100%] p-4 flex items-center'>
                <Image
                  src='/jane.png'
                  width={50}
                  height={50}
                  alt='John Doe'
                  className='rounded-full mr-6 w-[70%]'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-xl text-[#070707] mb-2'>
                    Jane Doe
                  </p>
                  <p className='text-sm text-[#070707]'>
                    Nulla facilisi. Maecenas sit amet vulputate velit. Interdum
                    et malesuada fames ac ante.
                  </p>
                </div>
              </div>
            </div>
            <div className='carousel-item h-1/3 w-full flex items-center justify-center'>
              <div className='bg-white rounded-lg w-[100%] p-4 flex items-center'>
                <Image
                  src='/jane2.png'
                  width={50}
                  height={50}
                  alt='John Doe'
                  className='rounded-full mr-6 w-[70%]'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-xl text-[#070707] mb-2'>
                    Jane Doe
                  </p>
                  <p className='text-sm text-[#070707]'>
                    Nulla facilisi. Maecenas sit amet vulputate velit. Interdum
                    et malesuada fames ac ante.
                  </p>
                </div>
              </div>
            </div>
            <div className='carousel-item h-1/3 w-full flex items-center justify-center'>
              <div className='bg-white rounded-lg w-[100%] p-4 flex items-center'>
                <Image
                  src='/john2.png'
                  width={50}
                  height={50}
                  alt='John Doe'
                  className='rounded-full mr-6 w-[70%]'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-xl text-[#070707] mb-2'>
                    John Doe
                  </p>
                  <p className='text-sm text-[#070707]'>
                    Nulla facilisi. Maecenas sit amet vulputate velit. Interdum
                    et malesuada fames ac ante.
                  </p>
                </div>
              </div>
            </div>
            <div className='carousel-item h-1/3 w-full flex items-center justify-center'>
              <div className='bg-white rounded-lg w-[100%] p-4 flex items-center'>
                <Image
                  src='/jane.png'
                  width={50}
                  height={50}
                  alt='John Doe'
                  className='rounded-full mr-6 w-[70%]'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-xl text-[#070707] mb-2'>
                    Jane Doe
                  </p>
                  <p className='text-sm text-[#070707]'>
                    Nulla facilisi. Maecenas sit amet vulputate velit. Interdum
                    et malesuada fames ac ante.
                  </p>
                </div>
              </div>
            </div>
            <div className='carousel-item h-1/3 w-full flex items-center justify-center'>
              <div className='bg-white rounded-lg w-[100%] p-4 flex items-center'>
                <Image
                  src='/jane2.png'
                  width={50}
                  height={50}
                  alt='John Doe'
                  className='rounded-full mr-6 w-[70%]'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-xl text-[#070707] mb-2'>
                    Jane Doe
                  </p>
                  <p className='text-sm text-[#070707]'>
                    Nulla facilisi. Maecenas sit amet vulputate velit. Interdum
                    et malesuada fames ac ante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
