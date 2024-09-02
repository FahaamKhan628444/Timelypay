import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      quote: "This service is amazing! Highly recommend to everyone.",
    },
    {
      name: "Jane Smith",
      quote: "Absolutely fantastic experience, the best I've ever had!",
    },
    {
      name: "Michael Johnson",
      quote: "Professional and top-notch service. Will use again.",
    },
    {
      name: "Emily Davis",
      quote: "The team was very responsive and supportive.",
    },
    {
      name: "David Brown",
      quote: "Excellent service with a smile. I'm very satisfied.",
    },
    {
      name: "Sarah Wilson",
      quote: "Great experience, would definitely recommend.",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 30000,
    slidesToShow: 5, // Default number of slides to show on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 640, // Tailwind 'sm' breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Tailwind 'md' breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // Tailwind 'lg' breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280, // Tailwind 'xl' breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1536, // Tailwind '2xl' breakpoint
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-white to-blue-100 p-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold mb-8">Our Work Speaks</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <p className="text-base text-gray-800 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-blue-700">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
