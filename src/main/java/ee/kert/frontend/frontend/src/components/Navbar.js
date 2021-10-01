
import { Router } from 'react-router';
import './Navbar.css'
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <div className="Navbar">
            <Link to="/">
                <img className="logo" src="rakendus.png" alt=""/>
            </Link>
            <Link to="cart">
                <img className="cart" src="cart.svg" alt=""/>
            </Link>
        </div>
    );
    
}

export default Navbar;