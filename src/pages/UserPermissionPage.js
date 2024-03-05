import React from "react";
import ToggleButton from "../components/ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPermission } from "../userSlice";

const UserPermissionPage = () => {
  const dispatch = useDispatch();
  const userPermissions = useSelector((state) => state.user.userPermissions);

  const handleToggle = (moduleName) => {
    dispatch(
      updateUserPermission({
        ...userPermissions,
        [moduleName]: !userPermissions[moduleName],
      })
    );
  };

  const renderedButtons = Object.entries(userPermissions).map(
    ([moduleName, isEnabled]) => (
      <ToggleButton
        key={moduleName}
        name={moduleName}
        isEnabled={isEnabled}
        onToggle={handleToggle}
      />
    )
  );
  return <div>{renderedButtons}</div>;
};

export default UserPermissionPage;
