import React, { useState } from "react";
import ProfileImage from "../components/ProfileImage";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../userSlice";

const UserInfoPage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = (formData) => {
    dispatch(updateUserInfo(formData));
    setSuccessMessage("User information updated successfully!");
  };

  return (
    <div className="ui container">
      <div className="box">
        <ProfileImage
          image={userInfo.profileImage}
          altText={userInfo.firstName}
        />
      </div>
      <div className="box">
        {successMessage && (
          <div className="ui positive message">
            <i className="close icon" onClick={() => setSuccessMessage("")}></i>
            <div className="header">{successMessage}</div>
          </div>
        )}
        <Form userInfo={userInfo} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default UserInfoPage;
