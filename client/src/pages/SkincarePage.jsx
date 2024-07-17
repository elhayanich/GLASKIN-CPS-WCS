import  { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";

export default function Skincare () {
  const [skincareProducts, setSkincareProducts] = useState([]);

  useEffect(() => {
    const fetchSkincareProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSkincareProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSkincareProducts();
  }, []);

  return (
    <div className='min-h-screen bg-Creamy'>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Skincare Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skincareProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="mt-2 text-gray-700">Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
