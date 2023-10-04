import Navbar from "./Navbar";

import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";



function Shop() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8', {mode: "cors"})
    .then(response=> response.json())
    .then(result=> setData(result));

}, []);



   const addTocart = (item)  => {

   

    const cartCopy = [...cart, {item}];
    setCart(cartCopy);
  };

    
 



   useEffect(() => {
    console.log(cart); // Access the updated value here
  }, [cart]); 



 


  /* const dataItems = data.map((item) => {

    
    <div className="card-item" key={item.id}>
         
    <div className="item-img">
      <img src={item.image} alt="fvf" />
    </div>
    <div className="details">
      <button onClick={addTocart(item)}> Add to cart </button>
      <span> {item.price}</span>
    </div>
    </div>
   } ) */

    return (
        <div>
            <div>
            <Navbar/>  
            </div>

            
            <div>{
            data && data.map(item =>  <ProductCard img={item.image} key={item.id} price={item.price} addTocart={() => addTocart({item}) }/>
            )
            }
            </div>
          
        </div>

    )
}



export default Shop;