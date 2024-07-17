import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Skincare() {
  const [skincareProducts, setSkincareProducts] = useState([]);
  const [filteredSkintypes, setFilteredSkintypes] = useState([]);
  const [filteredSkinconcerns, setFilteredSkinconcerns] = useState([]);
  const [selectedSkintype, setSelectedSkintype] = useState('All');
  const [selectedSkinconcern, setSelectedSkinconcern] = useState('');

  useEffect(() => {
    const fetchSkincareProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/skinproduct`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSkincareProducts(data);

        
        const skintypes = [...new Set(data.map(product => product.skintype))].filter(skintype => skintype).map((skintype, index) => ({ id: index, label: skintype }));
        const skinconcerns = [...new Set(data.map(product => product.skinconcern))].map((skinconcern, index) => ({ id: index, label: skinconcern }));

        setFilteredSkintypes(skintypes);
        setFilteredSkinconcerns(skinconcerns);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSkincareProducts();
  }, []);

  const handleSkintypeChange = (event) => {
    setSelectedSkintype(event.target.value);
  };

  const handleSkinconcernChange = (event) => {
    setSelectedSkinconcern(event.target.value);
  };

  const filterProducts = (product) => {
    if (
      (selectedSkintype === 'All' || product.skintype === selectedSkintype) &&
      (selectedSkinconcern === '' || product.skinconcern === selectedSkinconcern)
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className='min-h-screen bg-Creamy'>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Skincare Products</h1>

        
        <div className="flex flex-wrap gap-10 mb-8">
          <div>
            <label htmlFor="skintypeFilter" className="block text-Dark text-sm">Filter by Skin Type:</label>
            <select
              id="skintypeFilter"
              value={selectedSkintype}
              onChange={handleSkintypeChange}
              className="mt-1 block w-full px-20 py-2 border border-gray-300 bg-Softy bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-Bluey"
            >
              {filteredSkintypes.map((skintype) => (
                <option key={skintype.id} value={skintype.label}>{skintype.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="skinconcernFilter" className="block text-Dark">Filter by Skin Concern:</label>
            <select
              id="skinconcernFilter"
              value={selectedSkinconcern}
              onChange={handleSkinconcernChange}
              className="mt-1 block w-full px-20 py-2 border border-gray-300 bg-Softy bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-Bluey"
            >
              <option value="">All</option>
              {filteredSkinconcerns.map((skinconcern) => (
                <option key={skinconcern.id} value={skinconcern.label}>{skinconcern.label}</option>
              ))}
            </select>
          </div>
        </div>

 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skincareProducts.filter(filterProducts).map(product => (
            <div key={product.skinproductId} className="bg-Softy bg-opacity-40 backdrop-blur-md rounded-lg shadow-md p-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-full mb-4" 
              />
              <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="mt-2 text-gray-700">Price: ${product.price}</p>
              <div className="mt-4 flex justify-end">
                <Link to={`/skincare/${product.skinproductId}`} className="bg-Dark text-Softy px-4 py-2 rounded-lg">
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
