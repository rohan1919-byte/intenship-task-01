import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    phoneNumber: '',
    image: '',
    gender: '',
    linkedIn: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProfile({ ...profile, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={profile.phoneNumber}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="image"
        onChange={handleImageChange}
      />
      <select
        name="gender"
        value={profile.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        name="linkedIn"
        placeholder="LinkedIn Link (Optional)"
        value={profile.linkedIn}
        onChange={handleChange}
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfilePage;
