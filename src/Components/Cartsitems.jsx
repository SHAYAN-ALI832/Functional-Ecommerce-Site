import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HandleRemoveItems } from '../State-Global/Slices/cartslice'; // Adjust path as needed

function Cartsitems() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.Cart.Cartsitems);

  return (
    <div className="p-4 min-h-screen">
      {Array.isArray(cartitems) && cartitems.length > 0 ? (
        <div className="space-y-4 max-w-6xl mx-auto">
          {cartitems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 border p-2 rounded-lg shadow-md bg-white">
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h2 className="text-xl  font-semibold text-gray-800">{item.title || 'Unnamed Product'}</h2>
                <p className="text-gray-600">Price: <span className="font-medium">${item.price?.toFixed(2) || 'N/A'}</span></p>
                <p className="text-gray-600">Quantity: {item.quantity || 1}</p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => dispatch(HandleRemoveItems(item))}
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-sm transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-600 min-h-screen flex items-center justify-center">
          <p className="bg-red-600 p-10 rounded-lg text-white font-bold text-xl">
            Your cart is empty. Please add some products.
          </p>
        </div>
      )}
    </div>
  );
}

export default Cartsitems;
