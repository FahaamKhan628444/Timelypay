
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:7081';
axios.defaults.withCredentials = true;

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();  // Get current route location

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <>
      {loading ? (
        console.log("Loading...")
      ) : (
        <>
          <UserContextProvider>
            {/* Conditionally render Navbar based on the route */}
            {location.pathname !== '/dashboard' && <Navbar />}
            <Toaster position='bottom-right' toastOptions={{ duration: 4000 }} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </UserContextProvider>
        </>
      )}
    </>
  );
}

export default App;
  