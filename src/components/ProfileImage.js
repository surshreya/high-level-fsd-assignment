import React from "react";

const ProfileImage = ({ image, altText }) => {
  return <img className="ui small circular image" src={image} alt={altText} />;
};

export default ProfileImage;
