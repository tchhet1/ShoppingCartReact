import { useEffect, useState } from 'react';
import './add-to-cart.css';

let total = 0

function CartItems( { name, price, setTotalQty, shoppingCartItems, setShoppingCartItems } ) {

    const [qtyData, setQtyData] = useState(1);
    
    const [cartData, setCartData] = useState({
        
        itemName: '',
        itemPrice: '',
        itemQuantity: ''
    });

    const addToCart =  function(){
    
       total = total + parseInt(qtyData);
       setTotalQty(total);
       

         setCartData(() => ({

            itemName: name,
            itemPrice: price,
            itemQuantity: qtyData 
        })
        )

       
        setShoppingCartItems([...shoppingCartItems, cartData]);

        console.log(shoppingCartItems);

        
        console.log(cartData);

    }    

    return (
        <div className="cart">
            <div className='product-image'>

            </div>
            <div className='product-title'>
                { name }
            </div>
            <div className='product-price'>
                { price }
            </div>

            <div className='cart-button'>
                <select id="quantity" name="quantity" onChange={ (e) =>  setQtyData(e.target.value) }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className='add-to-cart' onClick = { () => addToCart(name, price) }>Add To Cart</button>
            </div>
        </div>
    )
    
}

export default CartItems;