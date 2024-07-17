import skin from "../assets/images/skin.png";

export default function SkincareCat() {
  return (
    <div className="category-card">
      <h2 className="pr-8 text-xl bg-Dark text-Softy px-2 py-2 rounded-lg mb-2 font-title font-bold flex items-center justify-center">
        <img src={skin} alt="Skincare" className="w-12 h-12 mr-6" /> 
        <span className="inline-block">Skincare</span>
      </h2>
      <p className="text-Dark">Discover our skincare products.</p>
    </div>
  );
};


