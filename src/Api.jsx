import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";
function ApiFetch() {
    const [data, setData] = useState([])
useEffect(() => {
    fetch('https://fakestoreapi.com/products', {mode: "cors"})
.then(response=> response.json())
.then(result=> setData(result));


           
      }, []);

      return (
        <div>{
            data && data.map(product =>  <ProductCard img={product.image}/>
            )
            }</div>
      )
}

      
  export default ApiFetch;