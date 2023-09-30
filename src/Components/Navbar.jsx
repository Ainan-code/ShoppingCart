function Navbar() {
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
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
               
                <li><a href="#">Cart </a></li>
            </ul>
            <h1 className="logo">HoopShop</h1>
        </div>
    </div>
    )
}



export default Navbar;