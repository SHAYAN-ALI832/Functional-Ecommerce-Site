import React from 'react';
import {
  FaChartLine,
  FaExchangeAlt,
  FaMousePointer,
  FaShoppingCart,
} from 'react-icons/fa';

// Individual Stat Card Component
const StatsCard = ({ icon, value, label, isHighlighted }) => {
  return (
    <div className={`rounded-sm border-[1px] border-gray-300 p-6 flex flex-col items-center ${isHighlighted ? 'bg-red-600 text-white' : 'bg-white'}`}>
      <div className={`text-3xl mb-3 p-4 rounded-full border-[1px] ${isHighlighted ? 'bg-white text-red-600' : 'bg-gray-100 text-black'} border-gray-300`}>
        {icon}
      </div>
      <div className={`text-3xl font-semibold mb-1 ${isHighlighted ? 'text-white' : 'text-gray-800'}`}>
        {value}
      </div>
      <div className={`text-sm uppercase tracking-wider text-center ${isHighlighted ? 'text-white/80' : 'text-gray-600'}`}>
        {label}
      </div>
    </div>
  );
};

// Dashboard with Data Mapped
const StatisticsDashboard = () => {
  const stats = [
    {
      icon: <FaChartLine />,
      value: '10.5k',
      label: 'Selling active our site',
    },
    {
      icon: <FaExchangeAlt />,
      value: '3.3k',
      label: 'Acceptify Forwards/Exits',
    },
    {
      icon: <FaMousePointer />,
      value: '45.5k',
      label: 'Customer action in our site',
    },
    {
      icon: <FaShoppingCart />,
      value: '25k',
      label: 'Annual gross sales in our site',
    },
  ];

  return (
    <div className=" bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              isHighlighted={index === 1} // Make second card red
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
