import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const [isAgreed, setIsAgreed] = useState(false); // State for checkbox

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const response = await axios.post('/register', { name, email, password });
      const { data } = response;
      if (data.error) {
        toast.error(data.error);  
      } else {
        toast.success('Registered Successfully. Welcome to TimelyPay');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-200 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row w-full lg:w-3/4 max-w-4xl shadow-lg rounded-2xl overflow-hidden">
        <div className="w-full lg:w-1/2 bg-[#9591C4] flex flex-col items-center justify-center p-12">
          <img
            src="/title.png" 
            alt="TimelyPay Logo" 
            className="w-full h-full object-cover lg:object-contain lg:w-80 lg:h-auto lg:rounded-3xl" 
          />
        </div>
        <div className="w-full lg:w-1/2 bg-white p-8">
          <h2 className="text-2xl lg:text-xl font-semibold font-serif text-center text-gray-800 mb-6">
            We are excited to Serve you Better, Sign up now!
          </h2>
          <form onSubmit={registerUser} className="space-y-6">
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={data.name} 
              onChange={(e) => setData({ ...data, name: e.target.value })} 
              required 
              className="w-full p-3 border bg-gradient-to-r from-white to-white border-gray-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 text-black"
            />
            <input 
              type="email" 
              placeholder="Enter your Email" 
              value={data.email} 
              onChange={(e) => setData({ ...data, email: e.target.value })} 
              required 
              className="w-full p-3 border bg-gradient-to-r from-white to-white border-gray-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 text-black"
            />
            <input 
              type="password" 
              placeholder="Enter password" 
              value={data.password} 
              onChange={(e) => setData({ ...data, password: e.target.value })} 
              required 
              className="w-full p-3 border bg-gradient-to-r from-white to-white border-gray-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 text-black"
            />

            {/* Checkbox for terms and conditions */}
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="terms"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)} 
                className="mr-2" 
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                By clicking on Register you are agree to our <a href="/terms" className="text-purple-600 hover:underline">Terms and Policies</a>
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={!isAgreed} // Disable button if checkbox is not checked
              className={`w-full p-3 rounded-xl font-semibold transition duration-300 ${
                isAgreed 
                ? "bg-[#9591C4] text-white hover:bg-violet-400"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Register
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Already have an account? <a href="/login" className="text-purple-600 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
