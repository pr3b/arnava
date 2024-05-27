import Image from 'next/image';
import React from 'react';

function Newsletter() {
  return (
    <div class='bg-[#f2f5f9] py-16 sm:py-32'>
      <div class='text-center m-4 sm:m-0'>
        <h2 class='pb-8 text-3xl font-bold sm:text-4xl text-[#070707]'>
          Sign up to our newsletter
        </h2>
        <div className='mt-2 w-[250px] md:w-[579px] h-[60px] pl-2 md:pl-5 pr-2.5 py-5 bg-white rounded-lg justify-start items-center gap-3 inline-flex'>
          <input
            className='bg-white focus:outline-none grow shrink basis-0 text-zinc-500 text-[12px] md:text-[24px] font-normal leading-normal'
            placeholder='Enter your email here ...'
            // type="text"
            // onChange={handleSearchChange}
            // value={valueInput}
          />
          <button
            className='px-2 md:px-6 py-2 bg-blue-600 rounded-lg justify-start items-center gap-2 flex'
            //   onClick={() => clicked(valueInput)}
          >
            <div className='text-white text-[10px] md:text-[16px] font-medium leading-normal'>
              Submit
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
