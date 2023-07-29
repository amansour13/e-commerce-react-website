import './Navbar.css';
import {NavLink} from 'react-router-dom';
function Navbar(){
    return (
        <div className="nav">
            <ul>
                <li><NavLink to='/'>Products</NavLink></li>
                <li><NavLink to='/Add-Product'>Add Product</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;