import { Link } from "react-router-dom";


function Navbar({cart}) {
    return (

 <header>
    <h1 className="logo" >Hoopshop</h1>
   <nav className="navbar">
    <ul className="list-items">
            <li className="item"><Link to="/">Home</Link></li>
            <li className="item"><Link to="/shop">Shop</Link></li>
            <li className="item"><a href="#">About</a></li>
            <li><Link to="/cart"> 
                <img src="./src/assets/icons8-cart-90.png" alt="cart icon" />
                 <span className="cart-number"> {cart} </span> 
         </Link></li>
        </ul>

        

   </nav>
   </header>
    )
}



export default Navbar;