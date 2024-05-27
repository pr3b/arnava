import Image from 'next/image';
import React from 'react';

function Marquee() {
  return (
    <div class='bg-[#E7ECF3]'>
      <div class='relative flex overflow-x-hidden'>
        <div class='py-12 animate-marquee whitespace-nowrap'>
          <span class='text-4xl mx-4'>Marquee Item 1</span>
          <span class='text-4xl mx-4'>Marquee Item 2</span>
          <span class='text-4xl mx-4'>Marquee Item 3</span>
          <span class='text-4xl mx-4'>Marquee Item 4</span>
          <span class='text-4xl mx-4'>Marquee Item 5</span>
        </div>

        <div class='absolute top-0 py-12 animate-marquee2 whitespace-nowrap'>
          <span class='text-4xl mx-4'>Marquee Item 1</span>
          <span class='text-4xl mx-4'>Marquee Item 2</span>
          <span class='text-4xl mx-4'>Marquee Item 3</span>
          <span class='text-4xl mx-4'>Marquee Item 4</span>
          <span class='text-4xl mx-4'>Marquee Item 5</span>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
