import { useState } from 'react';
import { JoblyApi } from '../api';



const EditProfileForm = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to update the user's profile data on the server
      const updatedUser = await JoblyApi.updateUserProfile(formData); // Use the updateUserProfile function
      // Update user context or state with the updated user data
      onUpdate(updatedUser);
      alert('Profile updated successfully!');

      // Log the response from the API request
      console.log(updatedUser);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Bio:
        <textarea name="bio" value={formData.bio} onChange={handleChange} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfileForm;
