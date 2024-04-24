import { useState, useContext, createContext } from "react";
import sublinks from "./data";

const AppContext = createContext();

const AppProvider = function ({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setisSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setisSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) throw new Error("Used outside AppContextProvider");
  return context;
};

export { AppProvider, useGlobalContext };
