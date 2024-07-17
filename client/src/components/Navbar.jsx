import  { useState } from 'react';
import { Link } from 'react-router-dom';
import logobw from '../assets/images/logobw.png';
import loginIcon from '../assets/images/login.png';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  return (
    <nav className="bg-Softy text-Dark font-main font-bold rounded-lg border border-Dark px-4 mx-2 my-2 flex items-center justify-between max-h-16">
      <div className="flex items-center space-x-6 ml-1">
        <div className="relative">
          <button
            type="button"
            className="flex items-center"
            onClick={toggleDropdown}
          >
            Categories
            <svg
              className="ml-1 w-4 h-4"
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
            <ul className="absolute mt-2 w-48 bg-Softy bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg z-10">
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
      <div className="transform scale-125 flex items-center">
        <Link to="/">
          <img src={logobw} alt="Logo" className="h-20 w-24" />
        </Link>
      </div>
      <div className="flex items-center space-x-4 mt-4 lg:mt-0 relative">
        <Link to="/quiz" className="bg-Dark text-Softy px-4 py-2 rounded-lg">
          Take the Quiz
        </Link>
        <div className="relative">
          <button type="button" className="flex items-center" onClick={toggleLoginDropdown}>
            <img src={loginIcon} alt="Login" className="h-6 w-6 lg:h-8 lg:w-8 mr-1 ml-6" />
            <svg
              className="ml-1 w-4 h-4"
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
            <ul className="absolute mt-2 right-0 w-48 bg-Softy bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg z-10">
              <li className="p-2 hover:bg-Bluey">
                <Link to="/register">Register</Link>
              </li>
              <li className="p-2 hover:bg-Bluey">
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
