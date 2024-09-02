import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (el) => {
    el.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post('/login', {
        email,
        password
      });
      
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        // Save login state to local storage
        localStorage.setItem('isLoggedIn', 'true');
        
        // Optionally store user data or token
        localStorage.setItem('userData', JSON.stringify(response.data.user)); // Assuming response contains user data
        
        setData({ email: '', password: '' });
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen bg-gray-200 w-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl m-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:w-1/2 bg-[#9591C4] p-10 flex justify-center items-center">
          <img src="/title.png" alt="TimelyPay Logo" className="max-w-xs md:max-w-sm lg:rounded-3xl" />
        </div>
        <form 
          onSubmit={loginUser} 
          className="w-full md:w-1/2 p-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome back!</h2>
          
          <input 
            type="email" 
            placeholder="Enter your Email" 
            value={data.email} 
            onChange={(e) => setData({ ...data, email: e.target.value })} 
            required 
            className="text-black w-full p-3 border bg-white border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-200"
          /> 
          <input 
            type="password" 
            placeholder="Enter password" 
            value={data.password} 
            onChange={(e) => setData({ ...data, password: e.target.value })} 
            required 
            className="text-black w-full p-3 border bg-white border-gray-300 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-purple-200"
          /> 

          <button 
            type="submit" 
            className="w-full bg-purple-500 text-white p-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300"
          >
            Login
          </button> 
          <p className="mt-4 text-center text-gray-600">Have no account yet? <a href="/register" className="text-purple-500 hover:underline">Sign up </a></p>
        </form>
      </div>
    </div>
  );
}
