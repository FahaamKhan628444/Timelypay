import React, { useEffect, useState } from 'react';

const Statistics = () => {
  const stats = [
    { label: 'Happy Customers', end: 150000, suffix: '+' },
    { label: 'Partners', end: 300, suffix: '+' },
    { label: 'Bills added Daily', end: 200, suffix: '+' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-200 to-gray-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our numbers tell our success</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} end={stat.end} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const incrementStep = end > 999 ? 1000 : 1;
    const incrementTime = Math.floor(duration / (end / incrementStep));

    const timer = setInterval(() => {
      start += incrementStep;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  const formatNumber = (num) => {
    if (num < 1000) return num;
    return Math.floor(num / 1000) + 'k';
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h3 className="text-2xl font-bold text-gray-900">{`${formatNumber(count)}${suffix}`}</h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
};

export default Statistics;
