// src/pages/SkincareDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

export default function SkincareDetailPage ()  {
  const { id } = useParams(); // Get the id from the URL

  // Fetch product details based on id (this is just an example)
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/skinproduct/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='min-h-screen bg-Creamy'>
      <h1 className="text-3xl font-bold text-center mb-8">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-full mb-4" />
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 text-gray-700">Price: ${product.price}</p>
    </div>
  );
};
