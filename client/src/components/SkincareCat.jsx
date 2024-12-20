
// import { useState, useEffect } from 'react';
// import skin from "../assets/images/skin.png";

// export default function SkincareCat() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_API_URL}/api/skinproduct`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setProducts(data.slice(0, 4)); 
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="category-card">
//       <h2 className="pr-8 text-xl bg-Dark text-Softy px-2 py-2 rounded-lg mb-2 font-title font-bold flex items-center justify-center">
//         <img src={skin} alt="Skincare" className="w-12 h-12 mr-6" />
//         <span className="inline-block">Skincare</span>
//       </h2>
//       <div className="flex flex-col gap-8">
//         {products.map((product) => (
//           <div key={product.skinproductId} className="bg-Softy bg-opacity-40 backdrop-blur-md rounded-lg shadow-md p-4 flex items-center">
//             <img src={product.image} alt={product.name} className=" rounded-full w-16 h-16 mr-4" />
//             <h3 className="text-Dark">{product.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import skin from "../assets/images/skin.png";
import skinproducts from "../assets/data/skinproducts.json"; 

export default function SkincareCat() {
  const [products] = useState(skinproducts);

  return (
    <div className="category-card">
      <h2 className="pr-8 text-xl bg-Dark text-Softy px-2 py-2 rounded-lg mb-2 font-title font-bold flex items-center justify-center">
        <img src={skin} alt="Skincare" className="w-12 h-12 mr-6" />
        <span className="inline-block">Skincare</span>
      </h2>
      <div className="flex flex-col gap-8">
        {products.slice(0, 4).map((product) => (
          <div key={product.skinproductId} className="bg-Softy bg-opacity-40 backdrop-blur-md rounded-lg shadow-md p-4 flex items-center">
            <img src={product.image} alt={product.name} className="rounded-full w-16 h-16 mr-4" />
            <h3 className="text-Dark">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}


