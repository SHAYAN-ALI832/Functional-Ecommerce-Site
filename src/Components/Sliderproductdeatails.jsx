import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Handlecartsitems } from '../State-Global/Slices/cartslice';

function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productid } = useParams();
  const [showWarning, setShowWarning] = useState(false);

  const categories = useSelector((state) => state. Sliderproduct.categories);
  const allProducts = Object.values(categories).flatMap((cat) => cat.products);
  const product = allProducts.find((p) => p.id === parseInt(productid));

  const handleAddToCart = (product) => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(Handlecartsitems(product));
      console.log('Product added to cart:', product);
    } else {
      setShowWarning(true);
    }
  };

  if (!product)
    return <p className="p-6 text-red-500 text-center">Product not found. this is exact page</p>;

  return (
    <div className="min-h-screen px-6 py-10 max-w-6xl mx-auto">
      {/* Grid: Image + Info */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-2xl text-red-600 font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 text-sm">{product.description}</p>

          {/* Extra Details */}
          <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-500 mt-4">
            <p>Product ID: {product.id}</p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Add to Cart
          </button>

          {/* Warning Message if Not Logged In */}
          {showWarning && (
            <div className="mt-4 p-4 border border-red-500 text-red-600 rounded-md bg-red-50">
              You are not registered as a user. Please{' '}
              <Link to="/signup" className="text-blue-600 underline font-medium">
                Sign Up
              </Link>{' '}
              to continue.
            </div>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-12">
        <button
          onClick={() => {
            navigate(-1);
            setTimeout(() => window.scrollTo(0, 0), 50);
          }}
          className="px-5 py-2 bg-black hover:bg-gray-900 text-sm text-white rounded transition"
        >
          ← Back to Products
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
