import { Link } from "react-router-dom";


function Homepage() {
    return (
        <div className="wrapper-homepg">
           <div className="blackbg">
           <h1 className="shop-name">Welcome to HoopSHop</h1>


           <Link to="/shop" className="shopnowBtn">Shop now</Link> 
           </div>
            
        </div>
    )
}



export default Homepage;