import hair from "../assets/images/hair.png";

export default function HaircareCat() {
  return (
    <div className="category-card">
      <h2 className="pr-8 text-xl bg-Dark text-Softy px-2 py-2 rounded-lg mb-2 font-title font-bold flex items-center justify-center">
        <img src={hair} alt="Skincare" className="w-12 h-12 mr-6" /> {/* Adjust width and height as needed */}
        <span className="inline-block">Haircare</span>
      </h2>
      <p className="text-Dark">Explore our haircare solutions..</p>
    </div>
  );
};
