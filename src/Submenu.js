import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen } = useGlobalContext();

  return (
    <aside className={`submenu ${isSubmenuOpen ? "show" : ""}`}>
      submenu component
    </aside>
  );
};

export default Submenu;
