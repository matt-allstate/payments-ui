import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import NotAuthorized from "./NotAuthorized";

const ProtectedRoute = (props) => {

    //props = element, roles =["USER", "MANAGER"]

    const currentUser = useContext(UserContext);
    let result = props.element;
    if (currentUser.user.role === "") {
        result = <Navigate to={`/login?target=${props.path}`} />
    }
    else if (!props.roles.includes(currentUser.user.role) ) {
        result = <NotAuthorized />
    }

    return result;


}

export default ProtectedRoute;