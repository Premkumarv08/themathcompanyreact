import React from "react";
import Sidebar from "./Sidebar";
import Pages from "./Pages";
import "./Layout.css";
import { useSharedState } from "../context/provider";

const Layout = () => {
  const { isOpen } = useSharedState();
  return (
    <div className="layout-container">
      <Sidebar isOpen={isOpen} />
      <Pages />
    </div>
  );
};
export default Layout;