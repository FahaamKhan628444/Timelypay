import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    category: '',
    amount: '',
    date: '',
    number: '',
  });
  const [submittedPayments, setSubmittedPayments] = useState([]);
  const [showPricing, setShowPricing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const storedPayments = localStorage.getItem('payments');
    if (storedPayments) {
      setSubmittedPayments(JSON.parse(storedPayments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(submittedPayments));
  }, [submittedPayments]);

  const handleToggleForm = () => {
    if (submittedPayments.length >= 4) {
      setShowForm(false);
      setShowPricing(true);
    } else {
      setShowForm(prev => !prev);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentDetails.number.length < 10 || paymentDetails.number.length>10) {
      toast.error('Mobile number must be at least 10 digits long!');
      return;
    }
    setSubmittedPayments(prev => [...prev, paymentDetails]);
    setPaymentDetails({ category: '', amount: '', date: '', number: '' });
    setShowForm(false);
  };

  const handleChoosePlan = () => {
    setShowPricing(false);
    setShowThankYou(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

      <div className="flex-1 p-6 w-screen">
        <h1 className="text-3xl font-bold mb-6">TimelyPay - Never Forget, Always Pay</h1>
        <p className="text-lg mb-6">Your one-stop solution for managing payments and avoiding late fees</p>


        <button 
          onClick={handleToggleForm} 
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
        >
         + Add Payment
        </button>
        
      
        {submittedPayments.length > 0 && (
          <div className="mt-6 p-4 border border-gray-300 rounded-md bg-white shadow-md">
            <h2 className="text-xl font-semibold mb-4">Submitted Payments</h2>
            <ul className="space-y-2">
              {submittedPayments.map((payment, index) => (
                <li key={index} className="border border-gray-200 p-4 rounded-md">
                  <div><strong>Category:</strong> {payment.category}</div>
                  <div><strong>Amount:</strong> INR {payment.amount}</div>
                  <div><strong>Date:</strong> {payment.date}</div>
                  <div><strong>Mobile Number:</strong> {payment.number}</div>
                </li>
              ))}
            </ul>
          </div>  
        )}
      </div>

      
      <div className="w-full md:w-1/4 bg-white shadow-lg flex flex-col items-center md:fixed md:right-0 md:top-0 md:h-screen">
       
        <div className="w-full p-6 flex flex-col items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 overflow-hidden">
            {user?.profileImage ? (
              <img 
                src={user.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <i className="fas fa-user text-gray-500 text-4xl"></i>
            )}
          </div>
          {!!user && <h3 className="text-xl font-semibold">{user.name}</h3>}
          {!!user && <p className="text-sm text-gray-200">{user.email}</p>}
        </div>

      
        <div className="w-full flex-1 p-6">
          <nav className="space-y-6">
            <a href="/settings" className="flex items-center text-gray-700 hover:text-purple-500 transition-colors">
              <i className="fas fa-cog"></i>
              <span className="ml-4 font-medium">Settings</span>
            </a>
            <a href="/contact" className="flex items-center text-gray-700 hover:text-purple-500 transition-colors">
              <i className="fas fa-envelope"></i>
              <span className="ml-4 font-medium">Contact</span>
            </a>
            <a href="/terms" className="flex items-center text-gray-700 hover:text-purple-500 transition-colors">
              <i className="fas fa-gavel"></i>
              <span className="ml-4 font-medium">Terms of Use</span>
            </a>
            <a href="/signout" className="flex items-center text-gray-700 hover:text-purple-500 transition-colors">
              <i className="fas fa-sign-out-alt"></i>
              <span className="ml-4 font-medium">Sign Out</span>
            </a>
          </nav>
        </div>
      </div>

    
      {showForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <button 
              onClick={handleToggleForm} 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
            <h2 className="text-xl font-semibold mb-4">Add Payment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    value={paymentDetails.category}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-500 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-200"
                    required
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="Mobile Recharge">Mobile Recharge</option>
                    <option value="Wifi Recharge">Wifi Recharge</option>
                    <option value="T.V Recharge">T.V Recharge</option>
                    <option value="House Rent">House Rent</option>
                    <option value="Electricity bill">Electricity bill</option>
                    <option value="Water bill">Water bill</option>
                    <option value="College Fees">College Fees</option>
                    <option value="Tuition Fees">Tuition Fees</option>
                    <option value="Gym Fees">Gym Fees</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <input 
                  type="number" 
                  id="amount" 
                  name="amount" 
                  value={paymentDetails.amount} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border border-gray-500 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input 
                  type="number" 
                  id="number" 
                  name="number" 
                  value={paymentDetails.number} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border border-gray-500 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={paymentDetails.date} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border border-gray-500 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-200"
                  required
                />
              </div>
              
              <button 
                type="submit"
                className= "bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
              >
               Add Payment
              </button>
            </form>
          </div>
        </div>
      )}

  
{showPricing && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg md:max-w-3xl">
      <button 
        onClick={() => setShowPricing(false)} 
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        aria-label="Close"
      >
        <i className="fas fa-times"></i>
      </button>
      <h2 className="text-xl font-semibold mb-4 text-center">Upgrade Your Plan</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
       
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Basic</h3>
          <p className="text-4xl font-bold mb-4">Free</p>
          <ul className="mb-6 space-y-2 text-gray-700 text-center">
            <li>✔️ Add up to 4 payments</li>
            <li>✔️ Basic Support</li>
          </ul>
          <button 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed"
            disabled
          >
            Current Plan
          </button>
        </div>

        <div className="border border-purple-500 rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Pro</h3>
          <p className="text-4xl font-bold mb-4">₹249/4 months</p>
          <ul className="mb-6 space-y-2 text-gray-700 text-center">
            <li>✔️ Add unlimited payments</li>
            <li>✔️ Email reminders</li>
            <li>✔️ Priority Support</li>
          </ul>
          <button 
            onClick={handleChoosePlan}
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
          >
            Choose Pro
          </button>
        </div>

        <div className="border border-yellow-500 rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Premium</h3>
          <p className="text-4xl font-bold mb-4">₹729/ 1 year</p>
          <ul className="mb-6 space-y-2 text-gray-700 text-center">
            <li>✔️ All Pro features</li>
            <li>✔️ Whatsapp reminders</li>
            <li>✔️ Personalized support</li>
            <li>✔️ Advanced analytics</li>
          </ul>
          <button 
            onClick={handleChoosePlan}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Choose Premium
          </button>
        </div>
      </div>
    </div>
  </div>
)}


      {showThankYou && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">TimelyPay Service Pvt. Ltd.</h2>
            <p className="text-lg">Thank you for choosing a plan. Currently, the service is unavailable. We will inform you when the service will start. Thank you for your patience. </p>
            <button 
              onClick={() => setShowThankYou(false)} 
              className="mt-6 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
