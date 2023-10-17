import { useContext } from "react";
import { PopupContext } from "../context/PopupProvider";


function usePopup() {
    return useContext(PopupContext);
}

export default usePopup;