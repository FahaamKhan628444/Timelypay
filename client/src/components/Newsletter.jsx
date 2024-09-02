import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success('Thanks for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-300 p-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">Subscribe to Our Newsletter</h2>
      <p className="text-md md:text-lg text-gray-600 mb-6 text-center">Stay updated with the latest news and offers.</p>
      <form onSubmit={handleSubscribe} className="flex flex-col items-center w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-96 mb-8 p-3 border border-gray-500 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-200"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 w-full max-w-md"
        >
          Subscribe
        </button>
      </form>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
