import './shoppingcart.css';


function ShoppingCart({name, quantity, price}) {
    
    return (
        <div className='cart-content'>
            
           


            <div className='product-title'>
                { name }
            </div>
            <div className='product-detail'>
                Quantity: {quantity} <br />
                Price: {price}

            </div>
            

        </div>
    )
}

export default ShoppingCart;