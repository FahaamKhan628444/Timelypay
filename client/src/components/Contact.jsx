import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    slotTime: ''  // New state for slot time
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful form submission
    setSuccessMessage('We received your query. Our team will contact you in 24 hours.');
    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
      slotTime: ''
    });
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-100 to-white">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <img src="" alt="" />
        <h2 className="text-2xl font-extrabold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder='Enter your name'
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border bg-gradient-to-r from-white to-white border-gray-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border bg-gradient-to-r from-white to-white border-gray-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border bg-gradient-to-r from-white to-white border-gray-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 text-black"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="slotTime" className="block text-sm font-medium text-gray-700">Preferred Slot Time</label>
            <select
              id="slotTime"
              name="slotTime"
              value={formData.slotTime}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-200"
              required
            >
              <option value="" disabled>Select a time slot</option>
              <option value="morning">9 AM - 11 AM</option>
              <option value="afternoon">11 AM - 1 PM</option>
              <option value="evening">2 PM - 4 PM</option>
              <option value="night">4 PM - 5:30 PM</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Send
          </button>
        </form>
        {successMessage && (
          <div className="mt-4 text-green-600 text-center">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}
