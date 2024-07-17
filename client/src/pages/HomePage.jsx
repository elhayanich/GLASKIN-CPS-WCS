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
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-64 w-64 mr-4 mb-4 md:mb-0" /> 
          <div>
            <p className="font-quote text-Dark text-4xl font-bold mb-4">
              Glow Beyond Limits : Embrace the Glaskin experience ! 💞
            </p>
            <p className="font-inter text-Dark mt-2">
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

      
        <div className="flex justify-center mt-8">
          <SkincareCat />
          <HaircareCat />
          <YearFavs />
        </div>
      </div>
    </div>
  );
}


