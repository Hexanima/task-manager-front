import { createContext } from "react";

const PopupContext = createContext({});

const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PopupContext.Provider value={{}}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupProvider };
