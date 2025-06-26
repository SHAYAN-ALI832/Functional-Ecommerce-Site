import React, { useState } from 'react';

const Profile = () => {
  let stored = JSON.parse(localStorage.getItem("user")) || {};

  const [formData, setFormData] = useState({
    name: stored.name || "",
    email: stored.email || "",
    password: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    const updatedUser = {
      name: formData.name,
      email: formData.email,
      password: formData.newPassword || stored.password,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated!");
  };

  return (
    <div className="bg-white p-8 rounded-sm border-[1px] border-gray-100">
      <h2 className="text-xl font-semibold text-red-600 mb-6">Edit Your Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            
            placeholder="Name"
            onChange={handleChange}
            className="border p-3 rounded bg-gray-100 text-sm outline-none"
          />
          <input
            type="email"
            name="email"
           
            placeholder="Email"
            onChange={handleChange}
            className="border p-3 rounded bg-gray-100 text-sm outline-none"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-black mb-2">Password Changes</p>
          <div className="space-y-4">
            <input
              type="password"
              name="password"
              placeholder="Current Password"
              value={formData.password}
              onChange={handleChange}
              className="border p-3 rounded bg-gray-100 text-sm w-full outline-none"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              className="border p-3 rounded bg-gray-100 text-sm w-full outline-none"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border p-3 rounded bg-gray-100 text-sm w-full outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end items-center gap-4">
          <button type="button" className="text-sm text-gray-600 hover:underline">
            Cancel
          </button>
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm rounded">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
