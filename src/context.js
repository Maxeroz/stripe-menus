import { useState, useContext, createContext } from "react";
import sublinks from "./data";

const AppContext = createContext();

const AppProvider = function ({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = () => {
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
