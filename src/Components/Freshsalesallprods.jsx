
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Timer from './Timer';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Handlecartsitems } from '../State-Global/Slices/cartslice';


function Freshsales() {
  const navigate = useNavigate();
  



  const freshSales = useSelector(
    (state) => state.Products.categories.freshsales.products,
    
  );



  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-4 ml-6 mt-7">
        <div className="w-6 h-10 rounded-sm bg-red-600"></div>
        <h1 className="text-3xl font-semibold">Today’s</h1>
      </div>

      {/* Title + Timer + Buttons */}
      <div className="flex items-center gap-4 ml-6  pr-10">
        <h1 className="text-4xl font-semibold">Fresh Sales</h1>
        <Timer />
       
      </div>

      {/* Scrollable Product Cards */}
      <div className="relative px-6 mb-5">
        <div
         
          className="flex flex-wrap gap-5 py-2"
        >
          {freshSales.map((product) => (
            <div
              key={product.id}
              className="min-w-[310px] max-w-[250px] flex-shrink-0 border rounded-sm shadow-md overflow-hidden"
            >
              {/* Image + Hover Group */}
              <div className="relative h-52 group overflow-hidden">
                <img
                loading='lazy'
                  src={product.image}
                  alt={product.title}
                  className="w-full p-1 h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Discount Tag */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -30%
                </div>

                {/* Heart & Eye Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <AiOutlineHeart
                    size={30}
                    className="text-white bg-black/40 p-1 rounded-full cursor-pointer hover:bg-black/70"
                  />
                 
                </div>

                {/* Slide-up Add to Cart Bar */}
                <div className="absolute  hidden bottom-[-40px] left-0 right-0 bg-black text-white text-center py-1 transition-all duration-300 group-hover:block group-hover:bottom-0">
                  <button
                    onClick={()=>navigate(`/product/${product.id}`)}
                    className="px-4 py-1 text-sm font-medium"
                  >
                    View Product
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{product.title}</h2>
                <p className="text-sm text-gray-600 mb-1">${product.price.toFixed(2)}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </>
  );
}

export default Freshsales;
