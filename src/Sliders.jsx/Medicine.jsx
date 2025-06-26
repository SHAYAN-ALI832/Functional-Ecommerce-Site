import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Medicine = () => {
    const navigate = useNavigate();
    const Medicine = useSelector(
        (state) => state.Sliderproduct.categories?.Medicine?.products || []
    );

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % Medicine.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [Medicine.length]);

    return (
        <div className="w-full relative overflow-hidden bg-black">
            <div className="w-full relative h-[380px]">
                {Medicine.map((product, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <img
                            loading="lazy"
                            src={product.image}
                            alt={product.title}
                            className="w-full h-[380px] object-cover"
                        />
                        <div className="absolute top-10 left-10 text-white">
                            <h3 className="text-sm mb-2">{product.title}</h3>
                            <h1 className="text-4xl font-bold mb-4">
                                Up to {product.Discount}% Off Voucher
                            </h1>
                            <h2 className='font-semibold text-slate-50'>{product.description}</h2>
                            <button
                                onClick={() => navigate(`/sliderproducts/${product.id}`)}
                                className="border-b text-sm hover:text-gray-400 mt-4 inline-block">
                                Shop Now →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {Medicine.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-red-500 scale-125' : 'bg-yellow-500 hover:bg-yellow-400'
                            }`}
                        onClick={() => setCurrent(i)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Medicine;
