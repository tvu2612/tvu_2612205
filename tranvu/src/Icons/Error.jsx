import { IconContext } from "react-icons";
import {FaExclamationTriangle} from "react-icons/fa"
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function ErrorIcon(){
    return(
        <IconContext.Provider value={{color:"forestgreen",size:"17rem"}}>
            <FaExclamationTriangle/>
        </IconContext.Provider>
    );
}