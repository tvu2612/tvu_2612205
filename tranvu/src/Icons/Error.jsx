import { IconContext } from "react-icons";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function ErrorIcon(){
    return(
        <IconContext.Provider value={{color:"forestgreen",size:"17rem"}}>
            <FaExclamationTriangle/>ss
        </IconContext.Provider>
    );
}