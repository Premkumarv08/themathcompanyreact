import React from "react";
import { useSharedDispatch } from "../context/provider";
import "./Pages.css";

const Pages = () => {
  const { handleToggle } = useSharedDispatch();
  return (
    <div className="close-icon">
      <button className="toggle-btn" onClick={handleToggle}>
        Toggle
      </button>
    </div>
  );
};

export default Pages;