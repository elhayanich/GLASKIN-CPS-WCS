// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar';

// export default function TipsPage() {
//   const [tips, setTips] = useState([]);

//   useEffect(() => {
//     async function fetchTips() {
//       try {
//         const response = await axios.get('http://localhost:3310/api/tips');
//         setTips(response.data);
//       } catch (error) {
//         console.error('Error fetching tips:', error);
//       }
//     }

//     fetchTips();
//   }, []);

//   return (
//     <div className="min-h-screen bg-Creamy">
//       <Navbar />
//       <div className="container mx-auto p-4">
//         {tips.map((tip, index) => (
//           <div
//             key={tip.tipsId}
//             className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center mb-8`}
//           >
//             <div className="w-full md:w-1/2 p-4">
//               <img
//                 src={tip.image}
//                 alt={tip.title}
//                 className="w-full h-48 object-cover rounded-full mb-4"
//               />
//             </div>
//             <div className="w-full md:w-1/2 p-4">
//               <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-Pinky via-Dark via-60% to-Bluey bg-clip-text text-transparent">{tip.title}</h2>
//               <p className="text-lg">{tip.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import tipsData from "../assets/data/tips.json"; // Importing the tips data

export default function TipsPage() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setTips(tipsData); // Setting the tips data directly from the imported JSON
  }, []);

  return (
    <div className="min-h-screen bg-Creamy">
      <Navbar />
      <div className="container mx-auto p-4">
        {tips.map((tip, index) => (
          <div
            key={tip.tipsId}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center mb-8`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover rounded-full mb-4"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-Pinky via-Dark via-60% to-Bluey bg-clip-text text-transparent">{tip.title}</h2>
              <p className="text-lg">{tip.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
