import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";
function ApiFetch() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8', {mode: "cors"})
.then(response=> response.json())
.then(result=> setData(result));


           
      }, []);

      return (
        <div>{
            data && data.map(product =>  <ProductCard img={product.image} key={product.id} price={product.price}/>
            )
            }</div>
      )
}

      
  export default ApiFetch;