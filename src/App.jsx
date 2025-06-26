import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import ProductDetails from '../src/Components/Productdetail';
import Freshsalesallprod from './Components/Freshsalesallprods'
import Thismonthsalesallprdos from './Components/Thismonthallprods'
import Contact from './Pages/Contact';
import About from './Pages/About';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import Cartsitems from './Components/Cartsitems';
import ScrollToTop from './Components/Scrolltotop';
import MYaccountmanagment from './MyAccount/MYaccountmanagment';
import Wishlistitems from './Components/Wishlistitems';
import SliderProducts from './Components/Sliderproductdeatails'
import Footer from './Components/Footer';

// Dummy pages


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/product/:productId" element={<ProductDetails />} />
       <Route path="/fresh-sales" element={<Freshsalesallprod />} />
       <Route path="/Thismonthsales" element={<Thismonthsalesallprdos/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cartsitems' element={<Cartsitems />} />
        <Route path='/myaccountmanagment' element={<MYaccountmanagment />} />
        <Route path='/wishlistitems' element={<Wishlistitems />} />
        <Route path='/sliderproducts/:productid' element={<SliderProducts />} />
        {/* Dummy pages */}
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
