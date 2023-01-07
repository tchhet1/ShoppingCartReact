import { FaShoppingBag } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="logo">Shopping Cart React</div>
                <div className="shopping-cart">
                    <button>
                        <FaShoppingBag/>
                    </button>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;