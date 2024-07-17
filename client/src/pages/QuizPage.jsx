import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

export default function Quiz() {
    const [products, setProducts] = useState([]);
    const [answer, setAnswer] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3310/api/skinproduct')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const questions = [
        {
            id: 'q1',
            question: 'What is your skin type?',
            options: [
                { id: 'Dry', label: 'Dry' },
                { id: 'Oily', label: 'Oily' },
                { id: 'Combination', label: 'Combination' },
                { id: 'Sensitive', label: 'Sensitive' },
                { id: 'Normal', label: 'Normal' },
                { id: 'Mature', label: 'Mature' }
            ],
        },
    ];

    const handleAnswerSelect = (selectedAnswer) => {
        setAnswer(selectedAnswer);
    };

    const handleQuizSubmit = () => {
        if (answer) {
            const filtered = products.filter(product => product.skintype === answer);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <div className='min-h-screen bg-Creamy'>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="bg-Softy p-10 mt-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4">Discover the product made for your skin</h2>
                    {questions.map((question) => (
                        <div key={question.id} className="mb-4">
                            <p className="text-lg font-semibold mb-2">{question.question}</p>
                            <div className="flex flex-wrap gap-2">
                                {question.options.map((option) => (
                                    <button
                                        type='button'
                                        key={option.id}
                                        onClick={() => handleAnswerSelect(option.id)}
                                        className={`px-4 py-2 rounded-md shadow-md ${answer === option.id ? 'bg-Dark text-white' : 'bg-Bluey text-Dark'} hover:bg-Pinky`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <button
                            type='button'
                            onClick={handleQuizSubmit}
                            className="px-4 py-2 rounded-md shadow-md bg-Dark text-white hover:bg-Pinky"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            {filteredProducts.length > 0 && (
                <div className="mt-8 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
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
                    <div className="flex justify-center mb-2 mt-4">
                        <Link to="/skincare" className="bg-Dark text-Softy px-4 py-2 rounded-lg">
                            Discover all our products
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}