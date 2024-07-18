import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Haircare() {
  const [haircareProducts, setHaircareProducts] = useState([]);
  const [filteredHairtypes, setFilteredHairtypes] = useState([]);
  const [filteredHairconcerns, setFilteredHairconcerns] = useState([]);
  const [selectedHairtype, setSelectedHairtype] = useState('');
  const [selectedHairconcern, setSelectedHairconcern] = useState('');

  useEffect(() => {
    const fetchHaircareProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/hairproduct`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setHaircareProducts(data);

        const hairtypes = [...new Set(data.map(product => product.hairtype))].map((hairtype, index) => ({ id: index, label: hairtype }));
        const hairconcerns = [...new Set(data.map(product => product.hairconcern))].map((hairconcern, index) => ({ id: index, label: hairconcern }));

        setFilteredHairtypes(hairtypes);
        setFilteredHairconcerns(hairconcerns);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHaircareProducts();
  }, []);

  const handleHairtypeChange = (event) => {
    setSelectedHairtype(event.target.value);
  };

  const handleHairconcernChange = (event) => {
    setSelectedHairconcern(event.target.value);
  };

  const filterProducts = (product) => {
    if (
      (selectedHairtype === '' || product.hairtype === selectedHairtype) &&
      (selectedHairconcern === '' || product.hairconcern === selectedHairconcern)
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className='min-h-screen bg-Creamy'>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Haircare Products</h1>

        <div className="flex flex-wrap gap-10 mb-8">
          <div>
            <label htmlFor="hairtypeFilter" className="block text-Dark text-sm">Filter by Hair Type:</label>
            <select
              id="hairtypeFilter"
              value={selectedHairtype}
              onChange={handleHairtypeChange}
              className="mt-1 block w-full px-20 py-2 border border-gray-300 bg-Softy bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-Bluey"
            >
              <option value="All">All</option>
              {filteredHairtypes.map((hairtype) => (
                <option key={hairtype.id} value={hairtype.label}>{hairtype.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="hairconcernFilter" className="block text-Dark">Filter by Hair Concern:</label>
            <select
              id="hairconcernFilter"
              value={selectedHairconcern}
              onChange={handleHairconcernChange}
              className="mt-1 block w-full px-20 py-2 border border-gray-300 bg-Softy bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-Bluey"
            >
              <option value="">All</option>
              {filteredHairconcerns.map((hairconcern) => (
                <option key={hairconcern.id} value={hairconcern.label}>{hairconcern.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {haircareProducts.filter(filterProducts).map(product => (
            <div key={product.hairproductId} className="bg-Softy bg-opacity-40 backdrop-blur-md rounded-lg shadow-md p-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-full mb-4" 
              />
              <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="mt-2 text-gray-700">Price: ${product.price}</p>
              <div className="mt-4 flex justify-end">
                <Link to={`/haircare/${product.hairproductId}`} className="bg-Dark text-Softy px-4 py-2 rounded-lg">
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
