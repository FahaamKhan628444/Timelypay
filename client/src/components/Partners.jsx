import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Volkswagen', logo: '/airtel.png' },
    { name: 'Samsung', logo: '/jio.png' },
    { name: 'Cisco', logo: '/tata-play.jpg' },
    { name: 'Vimeo', logo: '/connect.jpeg' },
    { name: 'P&G', logo: '/el.png' },
    { name: 'Hewlett Packard Enterprise', logo: '/fast.png' },
  ];

  return (
    <div className=" p-6 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 mb-8">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="h-12 filter grayscale"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
