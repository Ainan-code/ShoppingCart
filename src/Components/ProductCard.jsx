function ProductCard({img,price, }) {
    return (

      <section className="cards">

        <div className="productCard">
         
         <div className="product-img">
           <img src={img} alt="fvf" />
         </div>
         <div className="details">
           <button> Add to cart </button>
           <span> {price}</span>
         </div>

       </div>

      </section>
      
    )
}



export default ProductCard;