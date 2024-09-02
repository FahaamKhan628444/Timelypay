import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar({ onAboutUsClick, onServiceClick, onPartnersClick, onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b fixed top-0 left-0 w-full bg-gradient-to-r from-gray-300 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="text-xl font-bold text-gray-900 hover:text-gray-600">
              TimelyPay
            </RouterLink>
            <div className="ml-32 space-x-16 hidden md:flex">
              <RouterLink to="/" className="text-gray-600 hover:text-gray-800">Home</RouterLink>
              <RouterLink to="#" onClick={onAboutUsClick} className="text-gray-600 hover:text-gray-800">About Us</RouterLink>
              <RouterLink to="#" onClick={onServiceClick} className="text-gray-600 hover:text-gray-800">Service</RouterLink>
              <RouterLink to="#" onClick={onPartnersClick} className="text-gray-600 hover:text-gray-800">Our Partners</RouterLink>
              <RouterLink to="#" onClick={onContactClick} className="text-gray-600 hover:text-gray-800">Contact Us</RouterLink>
            </div>
          </div>

          <div className="flex space-x-8 hidden md:flex ml-1">
            {/* <ThemeToggle /> Add the ThemeToggle button here */}
            <RouterLink
              to="/register"
              className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-200 transition"
            >
              Sign in
            </RouterLink>
            <RouterLink
              to="/login"
              className="bg-violet-200 text-black px-4 py-2 rounded-md hover:bg-violet-600 hover:text-white"
            >
              Login
            </RouterLink>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-4">
          <RouterLink to="/" className="text-gray-600 hover:text-gray-800 py-2" onClick={toggleMenu}>Home</RouterLink>
          <RouterLink to="#" className="text-gray-600 hover:text-gray-800 py-2" onClick={() => { toggleMenu(); onAboutUsClick(); }}>About Us</RouterLink>
          <RouterLink to="#" className="text-gray-600 hover:text-gray-800 py-2" onClick={() => { toggleMenu(); onServiceClick(); }}>Service</RouterLink>
          <RouterLink to="#" className="text-gray-600 hover:text-gray-800 py-2" onClick={() => { toggleMenu(); onPartnersClick(); }}>Our Partners</RouterLink>
          <RouterLink to="#" className="text-gray-600 hover:text-gray-800 py-2" onClick={() => { toggleMenu(); onContactClick(); }}>Contact Us</RouterLink>
          <RouterLink to="/register" className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-200 transition mt-4" onClick={toggleMenu}>Register</RouterLink>
          <RouterLink to="/login" className="bg-violet-200 text-black px-4 py-2 rounded-md hover:bg-violet-600 transition mt-2" onClick={toggleMenu}>Login</RouterLink>
        </div>
      </div>
    </nav>
  );
}
