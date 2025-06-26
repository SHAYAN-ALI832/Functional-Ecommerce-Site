import { createSlice } from '@reduxjs/toolkit';
import oneplus from './../../assets/1+9.jpg'
import dslr from './../../assets/dslr.jpg'
import action_cam from './../../assets/action-cam.jpg'
import bluetoothmouse from './../../assets/blutooth mouse.jpg'
import camera_lens from './../../assets/camera-lens.jpg'
import camera_stand from './../../assets/camera-stand.jpg'
import earbuds from './../../assets/earbuds.jpg'
import face_wash from './../../assets/face wash.jpg'
import G_chair from './../../assets/G-chair.jpg'
import g_headset from './../../assets/g-headsets.jpg'
import g_keyboard from './../../assets/G-keyboard.jpg'
import g_monitor from './../../assets/g-monitor.jpg'
import g_console from './../../assets/gamingconsole.jpg'
import headset from './../../assets/headset.jpg'
import huaweiwatch from './../../assets/huaweiwatch.jpg'
import i13 from './../../assets/i phone13.jpg'
import in_ear from './../../assets/in-ear.jpg'
import keyboard from './../../assets/keyboard.jpg'
import mi_11 from './../../assets/mi-11.jpg'
import monitor_buds from './../../assets/monitor-buds.jpg'
import noise_buds from './../../assets/noise-earbuds.jpg'
import office_dsktp from './../../assets/office-desktop.jpg'
import overheads from './../../assets/over-head.jpg'
import phonecase from './../../assets/phonecase.jpg'
import pixel from './../../assets/pixel-6.jpg'
import portable_charger from './../../assets/portable charger.jpg'
import s_21 from './../../assets/s-21.jpg'
import smartwatch from './../../assets/smartwach.jpg'
import vivo from './../../assets/vivio.jpg'
import sneakers from './../../assets/sneakers.jpg'
import tshirts from './../../assets/tshits.jpg'
import watch1 from './../../assets/watch1.jpg'
import watch2 from './../../assets/watch2.jpg'
import watch3 from './../../assets/watch3.jpg'
import watch4 from './../../assets/watch4.jpg'
import webcam from './../../assets/webcam.jpg'

const initialState = {
  user: { name: null },
  categories: {
    freshsales: {
      name: "Fresh Sales",
      products: [
        { id: 1, image: tshirts, Discount: 27, title: "Summer T-Shirt", price: 29.99, description: "Lightweight and breathable" },
        { id: 2, image: sneakers, Discount: 15, title: "Sneakers", price: 89.99, description: "Comfortable for everyday wear" },
        { id: 3, image: phonecase, Discount: 10, title: "Smartphone Case", price: 15.99, description: "Protective and stylish case" },
        { id: 4, image: earbuds, Discount: 20, title: "Wireless Earbuds", price: 49.99, description: "High-quality sound with noise cancellation" },
        { id: 5, image: portable_charger, Discount: 25, title: "Portable Charger", price: 29.99, description: "Fast charging for your devices" },
      ],
    },
    Phones: {
      name: "Phones",
      products: [
        { id: 6, title: "iPhone 13", image: i13, price: 799.99, Discount: 10, description: "Latest model with 5G support" },
        { id: 7, title: "Samsung Galaxy S21", image: s_21, price: 699.99, Discount: 15, description: "High-quality camera and performance" },
        { id: 8, title: "Google Pixel 6", image: pixel, price: 599.99, Discount: 20, description: "Stock Android experience" },
        { id: 9, title: "OnePlus 9", image: oneplus, price: 729.99, Discount: 25, description: "Fast charging and smooth performance" },
        { id: 10, title: "Xiaomi Mi 11", image: mi_11, price: 749.99, Discount: 30, description: "Great value for money" },
        { id: 11, title: "Sony Xperia 5 II", image: vivo, price: 899.99, Discount: 35, description: "Compact flagship with great camera" },
      ],
    },
    Computers: {
      name: "Computers",
      products: [
        { id: 12, title: "Office Desktop", image: office_dsktp, price: 799.99, Discount: 15, description: "Reliable performance for work" },
        { id: 13, title: "Mechanical Keyboard", image: keyboard, price: 99.99, Discount: 30, description: "Tactile feedback for gaming" },
        { id: 14, title: "Wireless Mouse", image: bluetoothmouse, price: 49.99, Discount: 35, description: "Ergonomic design for comfort" },
      ],
    },
    Smartwatches: {
      name: "Smartwatches",
      products: [
        { id: 15, title: "Smartwatch Series 6", image: smartwatch, price: 399.99, Discount: 10, description: "Latest model with health tracking" },
        { id: 16, title: "Huawei Watch GT 2", image: huaweiwatch, price: 179.99, Discount: 35, description: "Long battery life and fitness tracking" },
      ],
    },
    Cameras: {
      name: "Cameras",
      products: [
        { id: 17, title: "DSLR Camera", image: dslr, price: 499.99, Discount: 25, description: "High-quality camera for photography" },
        { id: 18, title: "Action Camera", image: action_cam, price: 299.99, Discount: 20, description: "Compact and waterproof for adventures" },
        { id: 19, title: "Webcam", image: webcam, price: 89.99, Discount: 10, description: "1080p HD video quality" },
        { id: 20, title: "Camera Tripod", image: camera_stand, price: 39.99, Discount: 5, description: "Sturdy tripod for stable shots" },
        { id: 21, title: "Camera Lens", image: camera_lens, price: 199.99, Discount: 15, description: "Wide-angle lens for DSLR cameras" },
      ],
    },
    Headphones: {
      name: "Headphones",
      products: [
        { id: 22, title: "Over-Ear Headphones", image: overheads, Discount: 23, price: 199.99, description: "Noise-cancelling and comfortable" },
        { id: 23, title: "In-Ear Headphones", image: in_ear, Discount: 10, price: 49.99, description: "Compact and portable" },
        { id: 24, title: "Bluetooth Headphones", image: headset, Discount: 15, price: 89.99, description: "Wireless convenience" },
        { id: 25, title: "Gaming Headset", image: g_headset, Discount: 20, price: 129.99, description: "Surround sound for immersive gaming" },
        { id: 26, title: "Studio Monitor Headphones", image: monitor_buds, Discount: 30, price: 249.99, description: "High fidelity for music production" },
        { id: 27, title: "Noise-Cancelling Earbuds", image: noise_buds, Discount: 12, price: 79.99, description: "Block out distractions" },
      ],
    },
    Gaming: {
      name: "Gaming",
      products: [
        { id: 28, title: "Gaming Chair", image: G_chair, Discount: 15, price: 199.99, description: "Ergonomic design for long hours" },
        { id: 29, title: "Gaming Mouse", image: bluetoothmouse, Discount: 10, price: 49.99, description: "High precision and customizable" },
        { id: 30, title: "Gaming Keyboard", image: g_keyboard, Discount: 20, price: 89.99, description: "Mechanical keys for fast response" },
        { id: 31, title: "Gaming Headset", image: g_headset, Discount: 25, price: 129.99, description: "Surround sound for immersive gaming" },
        { id: 32, title: "Gaming Monitor", image: g_monitor, Discount: 30, price: 299.99, description: "High refresh rate for smooth gameplay" },
        { id: 33, title: "Gaming Console", image: g_console, Discount: 40, price: 499.99, description: "Latest generation console with exclusive games" },
      ],
    },
    Thismonthsales: {
      name: "This Month's Sales",
      products: [
        { id: 34, title: "Face Cream", image: face_wash, Discount: 13, price: 24.99, description: "Hydrating & anti-aging" },
        { id: 35, title: "Wireless Earbuds", image: earbuds, Discount: 10, price: 49.99, description: "High-quality sound with noise cancellation" },
        { id: 36, title: "Portable Charger", image: portable_charger, Discount: 15, price: 29.99, description: "Fast charging for your devices" },
        { id: 37, title: "Smartphone Case", image: phonecase, Discount: 20, price: 15.99, description: "Protective and stylish case" },
        { id: 38, title: "Gaming Mouse", image: bluetoothmouse, Discount: 25, price: 59.99, description: "High precision for gamers" },
        { id: 39, title: "Mechanical Keyboard", image: keyboard, Discount: 30, price: 89.99, description: "Tactile feedback for gaming" },
        { id: 340, title: "Smartwatch", image: smartwatch, Discount: 35, price: 199.99, description: "Track your fitness and notifications" },
      ],
    },
  },
};

const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user.name = action.payload.name;
    },
    logout: (state) => {
      state.user.name = null;
    },
  },
});

export const { login, logout } = HomeSlice.actions;
export default HomeSlice.reducer;
