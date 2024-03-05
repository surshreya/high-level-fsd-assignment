import React from "react";
import UserInfoPage from "./pages/UserInfoPage";
import Accordion from "./components/Accordion";
import UserPermissionPage from "./pages/UserPermissionPage";
import UserRolePage from "./pages/UserRolePage";

const User = () => {
  const items = [
    {
      id: 1,
      title: "User Info",
      content: <UserInfoPage />,
    },
    {
      id: 2,
      title: "User Permissions",
      content: <UserPermissionPage />,
    },
    {
      id: 3,
      title: "User Role",
      content: <UserRolePage />,
    },
  ];

  return (
    <div className="ui container">
      <Accordion items={items} />
    </div>
  );
};

export default User;
