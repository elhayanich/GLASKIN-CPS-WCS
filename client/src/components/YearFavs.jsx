import star from "../assets/images/star.png";
import soonImage from "../assets/images/soon.jpg";

export default function YearFavs() {
  return (
    <div className="category-card">
      <h2 className="pr-8 text-xl bg-Dark text-Softy px-2 py-2 rounded-lg mb-2 font-title font-bold flex items-center justify-center">
        <img src={star} alt="Skincare" className="w-12 h-12 mr-6" /> 
        <span className="inline-block">2024 favorites</span>
      </h2>
      <p className="text-Dark">Check out our top picks of the year on December!</p>
      <img src={soonImage} alt="Coming soon" className="w-full h-auto pt-9 rounded-lg mt-4" />
    </div>
  );
};
