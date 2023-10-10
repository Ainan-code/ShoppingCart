import { useState, useEffect } from "react";


export default function Cart () {
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
        setCart(cart);
        }
      }, []);
    return(
        <div>
         {
            cart && cart.map(item =>   
           

            <div className="productCard" key={item.id}>
             
             <div className="product-img">
               <img src={item.image} alt="fvf" />
             </div>
             <div className="details">
               <button onClick= {()  => addTocart(item)}> Add to cart </button>
               <span> {item.price}</span>
             </div>
    
           </div>
    
         
            )
            }
        </div>  )
}