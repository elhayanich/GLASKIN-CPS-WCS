import React from 'react';
import { useParams } from 'react-router-dom';
import favoriteIcon from "../assets/images/favorite.png"; 
import fetchAuth from "../lib/auth"; 

export default function SkincareDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null); 

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

    const checkUserAuth = async () => {
      const user = await fetchAuth();
      setCurrentUser(user);
    };

    fetchProduct();
    checkUserAuth();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='min-h-screen bg-Creamy'>
      <h1 className="text-3xl font-bold text-center mb-8">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-full mb-4" />
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 text-gray-700">Price: ${product.price}</p>

      {currentUser && ( 
        <div className="mt-4 flex justify-center">
          <button type='button'  className="bg-Dark text-Softy px-4 py-2 rounded-lg flex items-center">
            Add to favorites
            <img src={favoriteIcon} alt="Favorite Icon" className="w-14" />
          </button>
        </div>
      )}
    </div>
  );
}

