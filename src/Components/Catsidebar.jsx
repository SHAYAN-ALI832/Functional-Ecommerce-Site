// src/components/CategorySidebar.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor',
  "Baby's & Toys",
  'Groceries & Pets',
  'Health & Beauty',
];

const CategorySidebar = () => {
  return (
    <div className="w-60 border-r p-4 space-y-4 font-semibold bg-white">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="flex justify-between items-center hover:text-red-500 cursor-pointer"
        >
          <span>{cat}</span>
          {(cat === "Woman's Fashion" || cat === "Men's Fashion") && (
            <ChevronRight size={16} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
