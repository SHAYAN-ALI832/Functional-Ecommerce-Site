import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { HandleRemoveCartsItems } from '../State-Global/Slices/Wishlist';

function Wishlistitems() {
    const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.Wishlist.Wishlists);

  return (
    <div className="p-4">
      {wishlistItems.length > 0 ? (
        <div className="space-y-4 max-w-6xl mx-auto ">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center gap-4 border p-4 rounded-sm bg-white"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-sm"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title || 'Unnamed Product'}
                </h2>
                <p className="text-gray-600">
                  Price: <span className="font-medium">${item.price?.toFixed(2) || 'N/A'}</span>
                </p>
              </div>
              <button className='bg-red-600 text-white py-1 px-3 rounded-md' onClick={() => dispatch(HandleRemoveCartsItems(item))}>Remove</button>
            </div>
            
          ))}
        </div>
      ) : (
        <div className="text-gray-600 flex items-center justify-center">
          <p className="bg-red-600 p-3 rounded-lg text-white font-bold text-lg">
            Your Wishlist is empty. Please add some products.
          </p>
        </div>
      )}
    </div>
  );
}

export default Wishlistitems;
