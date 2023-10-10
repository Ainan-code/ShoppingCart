import Navbar from "./Navbar";

import { useState, useEffect } from "react";




function Shop() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8', {mode: "cors"})
    .then(response=> response.json())
    .then(result=> setData(result));

  

}, []);


useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);


  function addTocart (item)   {

  setCart([...cart, item])
  };

    
 



 


 



    return (
        <div>
            <div>
            <Navbar cart={cart.length} />  
            </div>

           
            
            <section className="cards">{
            data && data.map(item =>   
           

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
            </section>
          
        </div>

    )
}



export default Shop;