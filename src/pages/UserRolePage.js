import React from "react";
import { useSelector } from "react-redux";

const UserRolePage = () => {
  const userRole = useSelector((state) => state.user.userRole);
  const disabledClass = userRole.status ? "disabled" : "";
  return (
    <div className="ui container box">
      <div className="field">
        <label className="header">User Type</label>
        <p className="ui content">{userRole.type}</p>
      </div>
      <div className="field">
        <p className="header">User Role</p>
        <p className="ui content">{userRole.role}</p>
      </div>
      <div className={`field ${disabledClass}`}>
        <p className="header">Add Sub-Account</p>
        <div className="ui content">
          <div className="ui selection dropdown">
            <input type="hidden" name="action" />
            <i className="dropdown icon"></i>
            <div className="default text">Select Account</div>
            <div className="menu">
              <div className="item" data-value="1">
                1
              </div>
              <div className="item" data-value="0">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRolePage;
