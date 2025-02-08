import React, { useState } from 'react';
import './TourDataform.css'; // Import the CSS file for styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

function TourDataform() {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    yourName: '',
    placeName: '',
    stateName: '',
    districtName: ''
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send email using EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: 'service_ptvoqmb',
          template_id: 'template_ekvyqqf',
          user_id: '5dSUazXNGxF-jzJDE',
          template_params: {
            'yourName': formData.yourName,
            'placeName': formData.placeName,
            'stateName': formData.stateName,
            'districtName': formData.districtName
          }
        })
      });

      if (response.ok) {
        // Clear form data after successful submission
        setFormData({
          yourName: '',
          placeName: '',
          stateName: '',
          districtName: ''
        });

        // Show success toast message
        toast.success('Form submitted successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to submit form. Please try again later.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="tour-form-container">
      <h2>Enter Tour Information</h2>
      <form onSubmit={handleSubmit} className="tour-form">
        <div className="form-group">
          <input
            type="text"
            name="yourName"
            value={formData.yourName}
            onChange={handleInputChange}
            className="form-control"
            placeholder='Enter Your Name (optional)'
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="placeName"
            value={formData.placeName}
            onChange={handleInputChange}
            className="form-control"
            placeholder='Enter Place Name *'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="stateName"
            value={formData.stateName}
            onChange={handleInputChange}
            className="form-control"
            placeholder='Enter State Name *'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="districtName"
            value={formData.districtName}
            onChange={handleInputChange}
            className="form-control"
            placeholder='Enter District Name *'
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default TourDataform;
