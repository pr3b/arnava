'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  // { name: 'Blog', href: '#' },
  // { name: 'Projects', href: '#' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id='hero' className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8 backdrop-blur-lg text-white'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <Image
                class='z-0'
                src='/logo.png'
                width={100}
                height={100}
                quality={100} // Optional: set image quality
                priority={true} // Optional: prioritize loading of the image
                alt='Hero background'
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-white'
              >
                {item.name}
              </a>
            ))}
            {/* <div className='text-[14px] bg-[#2154F5] -ml-[2.5rem] px-2 rounded-md'>
              beta
            </div> */}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-x-6'>
            {/* <a
              href='#'
              className='p-2 text-sm font-semibold leading-6 text-white'
            >
              Log in
            </a>
            <a
              href='#'
              className='p-2 px-4 text-sm rounded-md font-semibold leading-6 text-white bg-[#2154F5]'
            >
              Sign Up
            </a> */}
          </div>
        </nav>
        <Dialog
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <Image
                  class='z-0'
                  src='/logo-black.png'
                  width={100}
                  height={100}
                  quality={100} // Optional: set image quality
                  priority={true} // Optional: prioritize loading of the image
                  alt='Hero background'
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <Image
          class='z-0'
          src='/hero-bg.png'
          layout='fill'
          objectFit='cover' // Ensures the image covers the container
          quality={100} // Optional: set image quality
          priority={true} // Optional: prioritize loading of the image
          alt='Hero background'
        />
        <div className='z-30 relative mx-auto max-w-3xl pt-24 pb-[15rem] text-white'>
          <div className='text-center mb-8 sm:mb-8 sm:flex sm:justify-center'>
            <div className='font-semibold relative px-3 py-1 text-md leading-6 text-[#00C7C8] tracking-[.50em] uppercase'>
              Arnava Team
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-light tracking-tight sm:text-6xl'>
              Seas the Day
            </h1>
            <p className='mt-6 text-lg leading-8'>
              Our expert services enhance your maritime operations with
              precision and innovation. Let us help you navigate the
              complexities of maritime operations with our service.
            </p>
            <div className='mt-12 w-[250px] md:w-[579px] h-[60px] pl-0 md:pl-5 pr-2.5 py-5 bg-white rounded-lg justify-start items-center gap-3 inline-flex'>
              <div className='w-1 md:w-5 h-5 relative'>
                <div className='w-1 md:w-5 h-5 left-0 top-0 absolute'></div>
                <Image
                  className='w-1 md:w-5 h-5 left-0 top-0 absolute'
                  src='/search-normal.png'
                  height={50}
                  width={50}
                  alt='Search Icon'
                />
              </div>
              <input
                className='bg-white focus:outline-none grow shrink basis-0 text-zinc-500 text-[12px] md:text-[24px] font-normal leading-normal'
                placeholder='Search here...'
                // type="text"
                // onChange={handleSearchChange}
                // value={valueInput}
              />
              <button
                className='px-2 md:px-6 py-2 bg-blue-600 rounded-lg justify-start items-center gap-2 flex'
                //   onClick={() => clicked(valueInput)}
              >
                <div className='text-white text-[10px] md:text-[16px] font-medium leading-normal'>
                  Search
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
