import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from 'react-icons/fa';

const AddressAndPayment = () => {
  const [address, setAddress] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phone: '',
    email: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('visa');

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Address Book</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={address.firstName}
          onChange={handleChange}
          className="p-3 border rounded-sm"
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={address.companyName}
          onChange={handleChange}
          className="p-3 border rounded-sm"
        />
        <input
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          value={address.streetAddress}
          onChange={handleChange}
          className="p-3 border rounded-sm col-span-2"
        />
        <input
          type="text"
          name="apartment"
          placeholder="Apartment, Floor, etc."
          value={address.apartment}
          onChange={handleChange}
          className="p-3 border rounded-sm"
        />
        <input
          type="text"
          name="city"
          placeholder="Town / City"
          value={address.city}
          onChange={handleChange}
          className="p-3 border rounded-sm"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={address.phone}
          onChange={handleChange}
          className="p-3 border rounded-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={address.email}
          onChange={handleChange}
          className="p-3 border rounded-sm"
        />
      </form>

      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Payment Methods</h2>
      <div className="flex flex-wrap gap-6">
        <div
          onClick={() => setPaymentMethod('visa')}
          className={`cursor-pointer p-4 border rounded ${paymentMethod === 'visa' ? 'border-blue-500' : 'border-gray-300'}`}
        >
          <FaCcVisa size={32} className="text-blue-600" />
        </div>
        <div
          onClick={() => setPaymentMethod('mastercard')}
          className={`cursor-pointer p-4 border rounded ${paymentMethod === 'mastercard' ? 'border-blue-500' : 'border-gray-300'}`}
        >
          <FaCcMastercard size={32} className="text-red-600" />
        </div>
        <div
          onClick={() => setPaymentMethod('paypal')}
          className={`cursor-pointer p-4 border rounded ${paymentMethod === 'paypal' ? 'border-blue-500' : 'border-gray-300'}`}
        >
          <FaCcPaypal size={32} className="text-blue-700" />
        </div>
        <div
          onClick={() => setPaymentMethod('amex')}
          className={`cursor-pointer p-4 border rounded ${paymentMethod === 'amex' ? 'border-blue-500' : 'border-gray-300'}`}
        >
          <FaCcAmex size={32} className="text-indigo-600" />
        </div>
      </div>
    </div>
  );
};

export default AddressAndPayment;
