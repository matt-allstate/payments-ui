import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { login } from "../data/DataFunctions";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [params, setParams] = useSearchParams();
    const target = params.get("target");

    const currentUser = useContext(UserContext);
    
    const navigate = useNavigate();

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        //simualte a rest call to do the login
        login(username, password).then (
            result => {
                console.log(result)
                currentUser.setUser({name : result.data.username, role : result.data.role, password: password});
                target != null ? navigate("/" + target) : navigate("/");
            }
        )
        .catch( error => console.log("login didn't work"));
    }

    return (<form onSubmit={submitForm} >
        <label htmlFor="name">username</label>
        <input id="name" type="text" value={username} onChange={updateUsername} />
        <label htmlFor="password">password</label>
        <input id="password" type="password" value={password} onChange={updatePassword} />
        <button type="submit">Login</button>
    </form>)


}

export default Login;