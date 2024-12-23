import Navbar from '../components/Navbar';
import logo from '../assets/images/logo.png';
import SkincareCat from '../components/SkincareCat';
import HaircareCat from '../components/HaircareCat';
import YearFavs from '../components/YearFavs';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-Creamy'>
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <img src={logo} alt="Logo" className="h-32 w-32 md:h-64 md:w-64 mr-0 md:mr-4 mb-4 md:mb-0" /> 
          <div>
            <p className="font-quote text-Dark text-2xl md:text-4xl font-bold mb-4">
              Glow Beyond Limits: Embrace the Glaskin experience! 💞
            </p>
            <p className="font-inter text-Dark mt-2 text-sm md:text-base">
              Welcome to Glaskin, your ultimate destination for radiant skin and luscious hair. 
              At Glaskin, we believe in the transformative power of nature, science, and self-care, 
              crafting premium skincare and haircare solutions that empower you to shine. Our expertly
              formulated products harness the finest natural ingredients and cutting-edge technology, 
              ensuring visible results and a luxurious experience. Whether you're looking to rejuvenate 
              your skin, strengthen your hair, or simply indulge in self-love, Glaskin is here to guide 
              you on your journey to unparalleled beauty. Discover the Glaskin difference and glow beyond limits.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-8">
          <SkincareCat />
          <HaircareCat />
          <YearFavs />
        </div>
      </div>
    </div>
  );
}



