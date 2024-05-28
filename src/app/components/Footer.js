import Image from 'next/image';

function Footer() {
  return (
    <div className='bg-[#f2f5f9] py-0 sm:py-32'>
      <footer className='max-w-4xl footer text-[#070707] p-10 flex flex-col md:flex-row md:justify-center md:items-center mx-auto'>
        <aside className='md:mr-20'>
          <div className='mb-4'>
            <Image
              src='/logo-black.png'
              width={125}
              height={125}
              quality={100}
              priority={true}
              alt='Arnava Logo'
            />
          </div>
          <p className='w-60 md:w-full'>
            Discover how Arnava can enhance maritime operations through
            streamlined procurement, advanced sensor system and software
            integration.
          </p>
          <nav className='mt-6'>
            <div className='grid grid-flow-col gap-4'>
              {/* <Image
                src='/twitter.png'
                width={25}
                height={25}
                quality={100}
                priority={true}
                alt='Twitter Logo'
              />
              <Image
                src='/ig.png'
                width={25}
                height={25}
                quality={100}
                priority={true}
                alt='Instagram Logo'
              /> */}
              {/* <Image
                src='/fb.png'
                width={25}
                height={25}
                quality={100}
                priority={true}
                alt='Facebook Logo'
              /> */}
            </div>
          </nav>
        </aside>
        <div className='flex flex-col md:flex-row gap-x-4'>
          <nav className='flex flex-col text-left md:text-right'>
            {' '}
            {/* <h6 className='font-bold text-[#2154F5] mb-6'>Our Services</h6> */}
            {/* <a className='link link-hover mb-2'>Documentation</a> */}
            {/* <a className='link link-hover mb-2'>Hardware</a> */}
            {/* <a className='link link-hover mb-2'>API Reference</a> */}
            {/* <a className='link link-hover mb-2'>Changelog</a> */}
          </nav>
          <nav className='flex flex-col text-left md:text-right'>
            <h6 className='font-bold text-[#2154F5] mb-6'>Community</h6>
            <a className='link link-hover mb-2'>Github</a>
            {/* <a className='link link-hover mb-2'>Discord</a> */}
            {/* <a className='link link-hover mb-2'>Twitter</a> */}
          </nav>
          <nav className='flex flex-col text-left md:text-right'>
            <h6 className='font-bold text-[#2154F5] mb-6'>Company</h6>
            <a href='#about' className='link link-hover mb-2'>
              About
            </a>
            {/* <a className='link link-hover mb-2'>Blog</a> */}
            {/* <a className='link link-hover mb-2'>Careers</a> */}
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
