import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import CartItems from './components/add-to-cart';
import { useState } from 'react';
import ShoppingCart from './components/shoppingcart';



function App() {

  const cartItems = [
    {
        "id": 1,
        "name": "Malibu Shirt",
        "price": "40.00"

    },

    {
        "id": 2,
        "name": "Laguna High rise Jeans",
        "price": "40.00"

    },

    {
        "id": 3,
        "name": "Wide Leg Pants",
        "price": "40.00"

    },

    {
        "id": 4,
        "name": "Sequin party Dress",
        "price": "40.00"

    }
];

let [totalQty, setTotalQty] = useState(0);

const [shoppingCartItems, setShoppingCartItems] = useState([]);

const [showCart, setShowCart] = useState(true);



  return (

    <div className="App">
       
  
      <Navbar 
        totalQty = { totalQty }
        showCart = { showCart }
        setShowCart = { setShowCart }
      />

    {
      !showCart && <div className='mycart'>
      {
        shoppingCartItems.map(cartitem => {
          return (
            <ShoppingCart 
              name = {cartitem.itemName}
              quantity = {cartitem.itemQuantity}
              price = {cartitem.itemPrice}

            />
          )
          
        })
        
        }
      </div>
    }
       
      

      <div className='cart-container'>
        {
          

          cartItems.map(item => {

            return (

              <CartItems
                key = { item.id}
                name = { item.name }
                price = {item.price}
                setTotalQty = {setTotalQty}
                shoppingCartItems = { shoppingCartItems }
                setShoppingCartItems = { setShoppingCartItems }
                
              />
              
            )

            
          })
        }
      </div>
      
    </div>
  );


}

export default App;
