
function ProductCard({img,price, addtocart }) {
    return (

      <section className="cards">

        <div className="productCard">
         
         <div className="product-img">
           <img src={img} alt="fvf" />
         </div>
         <div className="details">
           <button onClick={addtocart} > Add to cart </button>
           <span> {price}</span>
         </div>

       </div>

      </section>
      
    )
}



export default ProductCard;