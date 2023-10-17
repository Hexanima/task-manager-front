import { createContext, useState, useEffect, useRef } from "react";
import { PopupObject } from "../Globals";
import { AlertColor } from "@mui/material";

const PopupContext = createContext({} as PopupObject);

const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const timer = useRef(0);
  const [alert, setAlert] = useState({
    msg: "",
    show: false,
    type: "error",
  } as {
    msg: string;
    show: boolean;
    type: AlertColor;
  });

  useEffect(() => {
    if (alert.show) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setAlert({
          msg: "",
          show: false,
          type: "info",
        });
      }, 3000);
    }
  }, [alert]);

  function showAlert(msg: string, type: AlertColor) {
    setAlert({
      msg,
      show: true,
      type,
    });
  }

  const contextValues = { alert, showAlert };

  return (
    <PopupContext.Provider value={contextValues}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupProvider };
