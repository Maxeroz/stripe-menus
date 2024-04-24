import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const containerRef = useRef(null);

  useEffect(() => {
    const submenu = containerRef.current;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`submenu ${isSubmenuOpen ? "show" : ""}`}
      ref={containerRef}
    >
      submenu component
    </aside>
  );
};

export default Submenu;
