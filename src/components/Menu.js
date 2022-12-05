import {Link, NavLink} from 'react-router-dom';

const Menu = () => {
    return (
    <div className="pageHeader" >
        <h1><Link to="/">Payments Application</Link></h1>
        <ul className="nav">
            <li><Link to="/find">Find a transaction</Link></li>
            <li><NavLink to="/add">New transaction</NavLink></li>
        </ul>
    </div>);
}

export default Menu;