import { createSlice } from '@reduxjs/toolkit';
import airpurifier from './../../assets/Sliderimgs/airpurifir.jpg'
import camp from './../../assets/Sliderimgs/camp.jpg'
import cough_syrup from './../../assets/Sliderimgs/cough syrup.jpg'
import hatw from './../../assets/Sliderimgs/hatw.jpg'
import jacket from './../../assets/Sliderimgs/jacket.jpg'
import manshirt from './../../assets/Sliderimgs/menshirt.jpg'
import pain_reliever from './../../assets/Sliderimgs/painrelixer.jpg'
import racket from './../../assets/Sliderimgs/racket.jpg'
import w_shirt from './../../assets/Sliderimgs/shirtswomen.jpg'
import snadlas from './../../assets/Sliderimgs/snadla.jpg'
import teamaker from './../../assets/Sliderimgs/teamaker.jpg'
import trouser from './../../assets/Sliderimgs/trouser.jpg'
import vacuum from './../../assets/Sliderimgs/vacuum.jpg'
import vitamin from './../../assets/Sliderimgs/vitamin.jpg'
import w_shoes from './../../assets/Sliderimgs/w-shoes.jpg'
import w_summershirt from './../../assets/Sliderimgs/w-sumershirt.jpg'



import action_cam from './../../assets/action-cam.jpg'
import camera_lens from './../../assets/camera-lens.jpg'

import earbuds from './../../assets/earbuds.jpg'
import face_wash from './../../assets/face wash.jpg'
import G_chair from './../../assets/G-chair.jpg'
import g_headset from './../../assets/g-headsets.jpg'
import g_keyboard from './../../assets/g-keyboard.jpg'
import g_monitor from './../../assets/g-monitor.jpg'
import i13 from './../../assets/i phone13.jpg'
import office_dsktp from './../../assets/office-desktop.jpg'

import phonecase from './../../assets/phonecase.jpg'
import pixel from './../../assets/pixel-6.jpg'
import portable_charger from './../../assets/portable charger.jpg'

import watch1 from './../../assets/watch1.jpg'
import watch2 from './../../assets/watch2.jpg'
import watch3 from './../../assets/watch3.jpg'
import watch4 from './../../assets/watch4.jpg'
import webcam from './../../assets/webcam.jpg'


const initialState = {
  user: { name: null },
  categories: {
    womenFashion:{
      name:"Women Fashion",
      products:[
        {id: 1, title: "Summer Dress", image: w_shirt, price: 49.99, Discount: 20, description: "Lightweight and stylish for summer" },
        {id: 2, title: "Hat", image: hatw, price: 29.99, Discount: 15, description: "Comfortable and versatile for everyday wear" },
        {id: 3, title: "Shoes", image: w_shoes, price: 39.99, Discount: 10, description: "Elegant and professional for office wear" },
        {id: 5, title: "Summer Sandals", image: snadlas, price: 59.99, Discount: 15, description: "Comfortable and stylish for summer outings" },
      ]
    },
    Mensfashion:{
      name:"Men's Fashion",
      products:[
        {id:6, title: "Casual Shirt", image: manshirt, price: 39.99, Discount: 20, description: "Comfortable and stylish for everyday wear" },
        {id:7, title: "Formal Trousers", image: trouser, price: 49.99, Discount: 15, description: "Elegant and professional for office wear" },
        {id:8, title: "Leather Jacket", image: jacket, price: 129.99, Discount: 25, description: "Stylish and durable for colder weather" },
        {id:9, title: "Running Shoes", image: w_shoes, price: 89.99, Discount: 20, description: "Comfortable and supportive for running" },
      ]
    },
    Electronics:{
      name: "Electronics",
      products: [
        { id: 10, title: "Smartphone", image: i13, price: 699.99, Discount: 15, description: "Latest model with advanced features" },
        { id: 11, title: "Laptop", image: office_dsktp, price: 999.99, Discount: 20, description: "Powerful performance for work and play" },
        { id: 12, title: "Tablet", image: pixel, price: 499.99, Discount: 10, description: "Portable and versatile for entertainment" },
      ],
    },
    HomeandLifestyle: {
      name: "Home & Lifestyle",
      products: [
        { id: 13, title: "Coffee Maker", image: teamaker, price: 79.99, Discount: 15, description: "Brew your favorite coffee at home" },
        { id: 14, title: "Vacuum Cleaner", image:vacuum, price: 199.99, Discount: 20, description: "Keep your home clean effortlessly" },
        { id: 15, title: "Air Purifier", image: airpurifier, price: 149.99, Discount: 10, description: "Breathe cleaner air in your home" },
      ],
    },
    Medicine: {
      name: "Medicine",
      products: [
        { id: 16, title: "Pain Reliever", image: pain_reliever, price: 9.99, Discount: 5, description: "Relieves headaches and minor pains" },
        { id: 17, title: "Cough Syrup", image: cough_syrup, price: 12.99, Discount: 10, description: "Soothes coughs and throat irritation" },
        { id: 18, title: "Vitamins", image: vitamin, price: 19.99, Discount: 15, description: "Supports overall health and wellness" },
       
      ],
    },
    SportsandOutdoor: {
      name: "Sports & Outdoor",
      products: [
        { id: 20, title: "Yoga Mat", image: G_chair, price: 29.99, Discount: 10, description: "Comfortable and non-slip for yoga practice" },
        { id: 21, title: "Camping Tent", image: g_headset, price: 199.99, Discount: 20, description: "Spacious and durable for outdoor adventures" },
        { id: 22, title: "Bicycle", image: g_keyboard, price: 499.99, Discount: 15, description: "High-quality bike for commuting and exercise" },
        { id: 23, title: "Tennis Racket", image: g_monitor, price: 89.99, Discount: 25, description: "Lightweight and durable for tennis enthusiasts" },
      ],
    },
    BabyandToys: {
      name: "Baby's & Toys",
      products: [
        { id: 24, title: "Baby Stroller", image: watch1, price: 199.99, Discount: 15, description: "Comfortable and safe for your baby" },
        { id: 25, title: "Building Blocks", image: watch2, price: 29.99, Discount: 10, description: "Fun and educational for toddlers" },
        { id: 26, title: "Stuffed Animal", image: watch3, price: 19.99, Discount: 5, description: "Soft and cuddly for children" },
        { id: 27, title: "Puzzle Game", image: watch4, price: 24.99, Discount: 20, description: "Challenging and entertaining for kids" },
      ],
    },
    GroceriesandPets: {
      name: "Groceries & Pets",
      products: [
        { id: 28, title: "Dog Food", image: webcam, price: 39.99, Discount: 10, description: "High-quality nutrition for your dog" },
        { id: 29, title: "Cat Litter", image: watch1, price: 19.99, Discount: 5, description: "Odor control and easy cleanup" },
        { id: 30, title: "Pet Toys", image: watch2, price: 14.99, Discount: 15, description: "Fun and engaging for your pets" },
        { id: 31, title: "Organic Vegetables", image: watch3, price: 9.99, Discount: 20, description: "Fresh and healthy produce" },
        { id: 32, title: "Grocery Essentials", image: watch4, price: 49.99, Discount: 25, description: "Everyday items for your kitchen" },
      ],
    },
    Healthandbeauty:{
      name:"Health & Beauty",
      products:[
        { id: 33, title: "Face Cream", image: face_wash, price: 24.99, Discount: 13, description: "Hydrating & anti-aging" },
        { id: 34, title: "Hair Shampoo", image: earbuds, price: 14.99, Discount: 10, description: "Gentle and nourishing for all hair types" },
        { id: 35, title: "Makeup Kit", image: portable_charger, price: 49.99, Discount: 15, description: "Complete set for a flawless look" },
        { id: 36, title: "Sunscreen Lotion", image: phonecase, price: 19.99, Discount: 20, description: "Protects your skin from harmful UV rays" },
        { id: 37, title: "Perfume", image: G_chair, price: 59.99, Discount: 25, description: "Long-lasting fragrance for everyday wear" },
        { id: 38, title: "Nail Polish", image: g_headset, price: 9.99, Discount: 30, description: "Variety of colors for stylish nails" },
      ]
    }
  },
};

const HomeSlice = createSlice({
  name: 'Home',
  initialState,
});

export const { login, logout } = HomeSlice.actions;
export default HomeSlice.reducer;
