import React from "react";

const ToggleButton = ({ name, isEnabled, onToggle }) => {
  return (
    <div className="field box">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name={name}
          checked={isEnabled}
          onChange={() => onToggle(name)}
        />
        <label>{name}</label>
      </div>
    </div>
  );
};

export default ToggleButton;
