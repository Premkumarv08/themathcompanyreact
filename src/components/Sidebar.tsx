import React from "react";
import "./Sidebar.css";

type Props = {
  isOpen: boolean;
};
const Sidebar: React.FC<Props> = ({ isOpen }) => {
  return (
    <div className={isOpen ? "sidebar-container" : "display-none"}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Settings</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};
export default Sidebar;