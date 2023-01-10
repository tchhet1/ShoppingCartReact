import { FaShoppingBag } from 'react-icons/fa';
import './navbar.css';



function Navbar(props) {
    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    Shopping Cart React
                </div>

                <div className="shopping-cart" >
                    <button>
                        <FaShoppingBag/>
                    </button>
                    { (props.totalQty > 0) && 
                        <div className='shopping-cart-qty'>                       
                            { props.totalQty }
                        </div>
                    }
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;