import React, { useState } from "react";

const Form = ({ userInfo, onSubmit }) => {
  const [formData, setFormData] = useState(userInfo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <div className="two fields">
          <div className="required field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="required field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="fields">
        <div className="required eight wide field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="two wide field">
          <label>Ext</label>
          <input
            type="text"
            name="phoneExt"
            placeholder="Ext."
            value={formData.phoneExt}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="six wide field">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="required field">
        <div className="ui message">
          <div className="header">Your password needs to</div>
          <ul className="list">
            <li>Include both upper and lower characters.</li>
            <li>Include atleast one special character and number.</li>
            <li>Must be 8 characters long.</li>
          </ul>
        </div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
