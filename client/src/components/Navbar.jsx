import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import fetchlogout from '../lib/logout'; 
import logobw from '../assets/images/logobw.png';
import loginIcon from '../assets/images/login.png';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const { currentUser, setCurrentUser } = useOutletContext();
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleLoginDropdown = () => setIsLoginDropdownOpen(prev => !prev);

  const handleLogout = async () => {
    const user = await fetchlogout();
    if (!user) {
      setCurrentUser(null);
      navigate('/login');
    }
  };

  return (
    <nav className="bg-Softy text-Dark font-main font-bold rounded-lg border border-Dark px-2 mx-2 my-2 flex items-center justify-between max-h-16 relative z-20 lg:max-h-20 lg:px-6 lg:py-4">
      <div className="flex items-center space-x-4 text-sm lg:text-lg">
        <div className="relative">
          <button
            type="button"
            className="flex items-center"
            onClick={toggleDropdown}
          >
            Categories
            <svg
              className="ml-1 w-4 h-4 lg:w-5 lg:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 w-36 lg:w-48 bg-Softy bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg z-30 text-sm lg:text-base">
              <li className="p-2 hover:bg-Bluey">
                <Link to="/skincare">SkinCare</Link>
              </li>
              <li className="p-2 hover:bg-Bluey">
                <Link to="/haircare">HairCare</Link>
              </li>
              <li className="p-2 hover:bg-Bluey">
                <Link to="/bodycare">BodyCare - soon</Link>
              </li>
            </ul>
          )}
        </div>
        <Link to="/tips" className="hover:text-Bluey">Tips</Link>
        <Link to="/contact" className="hover:text-Bluey">Contact</Link>
      </div>
      <div className="flex items-center">
        <Link to="/">
          <img src={logobw} alt="Logo" className="h-12 w-16 lg:h-16 lg:w-20" />
        </Link>
      </div>
      <div className="flex items-center space-x-2 text-sm lg:text-lg">
        <Link to="/quiz" className="bg-Dark text-Softy px-2 py-1 lg:px-4 lg:py-2 rounded-lg">
          <span className="block md:hidden">Quiz</span>
          <span className="hidden md:block">Take the Quiz</span>
        </Link>
        {currentUser ? (
          <button
            type="button"
            onClick={handleLogout}
            className="bg-Dark text-Softy px-2 py-1 lg:px-4 lg:py-2 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <div className="relative flex items-center">
            <button
              type="button"
              className="flex items-center"
              onClick={toggleLoginDropdown}
            >
              <img src={loginIcon} alt="Login" className="h-4 w-4 lg:h-6 lg:w-6 mr-1" />
              <svg
                className="ml-1 w-4 h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isLoginDropdownOpen && (
              <ul className="absolute mt-2 right-0 w-36 lg:w-48 bg-Softy bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg z-30 text-sm lg:text-base">
                <li className="p-2 hover:bg-Bluey">
                  <Link to="/register">Register</Link>
                </li>
                <li className="p-2 hover:bg-Bluey">
                  <Link to="/login">Log In</Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
