function ProductCard({img,price, }) {
    return (
        <div className="productCard">
         
          <div className="product-img">
            <img src={img} alt="fvf" />
          </div>
          <div className="details">
            <span>{price} </span>
            <span>Add to cart</span>
          </div>

        </div>
    )
}



export default ProductCard;