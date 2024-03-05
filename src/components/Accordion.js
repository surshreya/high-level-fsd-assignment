import "../assets/styles/App.css";
import React, { useState, useRef, useEffect } from "react";

const Accordion = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(null);
  const accordionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        setActiveIdx(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onTitleClick = (idx) => {
    if (activeIdx === idx) {
      setActiveIdx(null);
    } else {
      setActiveIdx(idx);
    }
  };

  const renderedItems = items.map((item, idx) => {
    const active = idx === activeIdx ? "active" : "";
    return (
      <React.Fragment key={item.id}>
        <div className={`title ${active}`} onClick={() => onTitleClick(idx)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion" style={{ width: "100%" }}>
      {renderedItems}
    </div>
  );
};

export default Accordion;
