import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isEmpty = (value) => value === '';

  return (
    <div className="main-container bg-white justify-content-start">
      <form className="w-1/2 p-3 mx-auto mt-5" noValidate>
        <label htmlFor="userName" className={`relative ${isEmpty(formData.userName) ? 'top-5' : 'top-0'}`}>
          userName :
        </label>
        <input
          id="userName"
          type="text"
          placeholder="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className="form-control border-bottom py-3 relative"
        />

        <label htmlFor="userAge" className={`relative mt-4 block ${isEmpty(formData.userAge) ? 'top-5' : 'top-0'}`}>
          userAge :
        </label>
        <input
          id="userAge"
          type="text"
          placeholder="userAge"
          name="userAge"
          value={formData.userAge}
          onChange={handleChange}
          className="form-control border-bottom py-3 relative"
        />

        <label htmlFor="userEmail" className={`relative mt-4 block ${isEmpty(formData.userEmail) ? 'top-5' : 'top-0'}`}>
          userEmail :
        </label>
        <input
          id="userEmail"
          type="text"
          placeholder="userEmail"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          className="form-control border-bottom py-3 relative"
        />

        <label htmlFor="userPassword" className={`relative mt-4 block ${isEmpty(formData.userPassword) ? 'top-5' : 'top-0'}`}>
          userPassword :
        </label>
        <input
          id="userPassword"
          type="text"
          placeholder="userPassword"
          name="userPassword"
          value={formData.userPassword}
          onChange={handleChange}
          className="form-control border-bottom py-3 relative"
        />

        <button className="btn mt-4 text-white" style={{ backgroundColor: '#1abc9c' }}>
          send Message
        </button>
      </form>
    </div>
  );
}