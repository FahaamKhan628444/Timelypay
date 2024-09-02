import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          {/* Company Logo and Slogan */}
          <div className="flex flex-col items-start">
            <img src="/title.png" alt="TimelyPay Logo" className="h-12 mb-2" />
            <h2 className="text-2xl font-extrabold text-white mt-4">TimelyPay</h2>
            <p className="font-semibold">Never Forget, Always Pay</p>
          </div>

          {/* Important Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-bold mb-3">Important Links</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Career</a></li>
                <li><a href="#" className="hover:text-gray-300">Stores</a></li>
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              </ul>
            </div>
          </div>

          {/* Contact and Social Media */}
          <div className="flex flex-col items-start lg:items-end space-y-4">
          <h2 className="text-2xl font-extrabold text-white mt-4">Follow us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
            </div>

            <div>
              <p><strong>Phone:</strong> +91 90000-80000</p>
              <p><strong>Email:</strong> timelypay@gmail.com</p>
              <p><strong>Mon-Fri:</strong> 9am-5pm</p>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; 2024 TimelyPay Service Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
