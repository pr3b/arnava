// pages/index.js

import About from './components/About';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Footer />
      <Copyright />
    </>
  );
}
