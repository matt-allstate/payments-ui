import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
        
        currentUser.setUser({name : username, role : "admin"});

        navigate("/");
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