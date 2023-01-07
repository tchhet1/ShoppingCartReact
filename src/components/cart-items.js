import { useState } from 'react';
import './cart-items.css';


let totalQuantity = 0;

function CartItems(props) {

    const [qtyData, setQtyData] = useState(1);
    const [totalQty, setTotalQty] = useState();
    

    const handleQtySelection = (e) => {
        setQtyData(e.target.value);
    }


    const addToCart = () => {
        console.log(qtyData);
       // setTotalQty()
       totalQuantity = totalQuantity + parseInt(qtyData);
       console.log(totalQuantity);
    }

    

    return (
        <div className="cart">
            <div className='product-image'>

            </div>
            <div className='product-title'>
                { props.name }
            </div>
            <div className='product-price'>
                { props.price }
            </div>

            <div className='cart-button'>
                <select id="quantity" name="quantity" onChange={ handleQtySelection }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className='add-to-cart' onClick={ addToCart }>Add To Cart</button>
            </div>
        </div>
    )
    
}

export default CartItems;