import { FaShoppingBag } from 'react-icons/fa';
import './navbar.css';



function Navbar({showCart, setShowCart, totalQty}) {

const cartItemHandler = () => {
    setShowCart(!showCart);
}

    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    Shopping Cart React
                </div>

                <div className="shopping-cart-button" >
                    <button onClick = { cartItemHandler}>
                        <FaShoppingBag/>
                    </button>
                    { (totalQty > 0) && 
                        <div className='shopping-cart-qty'>                       
                            { totalQty }
                        </div>
                    }
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;