import Timer from './Timer1';
import Musicbanner from '../assets/musicbanner.jpg';

function MusicBanner() {
  return (
    <div className="w-[95%] max-w-7xl mx-auto mb-6 bg-black text-white rounded-sm overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-8">
      
      {/* Left Side */}
      <div className="flex-1 text-center md:text-left space-y-5">
        <p className="text-teal-400 font-semibold text-lg">Categories</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Enhance Your <br className="hidden sm:block" />
          Music Experience
        </h2>

        {/* Timer */}
        <div className="flex items-center justify-center md:justify-start ml-8">
          <Timer />
        </div>

        {/* Button */}
        <button className="bg-teal-500 hover:bg-green-600 text-black font-semibold px-6 py-3 mt-4 rounded transition">
          Buy Now!
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={Musicbanner}
          alt="JBL Speaker"
          className=" sm:w-72 md:w-[30rem] rounded-md object-contain"
        />
      </div>
    </div>
  );
}

export default MusicBanner;
