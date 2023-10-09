import { Link } from "react-router-dom";


function Navbar({cart}) {
    return (


        <div className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><a href="#">About</a></li>

             
                <li><Link to="/cart"> 
                <img src="./src/assets/icons8-cart-90.png" alt="cart icon" />
                 <span> {cart} </span> 
         </Link></li>
            </ul>
            <h1 className="logo">HoopShop</h1>
        </div>
    </div>
    )
}



export default Navbar;