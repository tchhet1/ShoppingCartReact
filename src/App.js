import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import CartItems from './components/add-to-cart';
import { useState } from 'react';



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

  return (

    <div className="App">

      <Navbar 
        totalQty = { totalQty }
      />
      <div className='cart-container'>
        {
          

          cartItems.map(item => {

            return (

              <CartItems 
                name = { item.name }
                price = {item.price}
                setTotalQty = { setTotalQty }
              />
              
            )

            
          })
        }
      </div>
      
    </div>
  );


}

export default App;
