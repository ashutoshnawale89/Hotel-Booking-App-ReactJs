import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/cart8.png";
import logo2 from "../assets/overview2.png";
import logo3 from "../assets/user6.png";
import logo4 from "../assets/login2.png";


const Sidebar = () => {
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><div class="nav-link text-secondary"><h5>DashBoard</h5></div></li>

                <h5><img src={logo2} alt="Cart Logo" style={{width:"40px",height:"40px", marginRight:"20px"}}></img><Link to="/dashboard" style={{color:"black"}}>Overview</Link></h5>
                <h5><img src={logo} alt="Cart Logo" style={{width:"40px",height:"40px", marginRight:"20px"}}></img><Link to="/addbook" style={{color:"black"}}>Products</Link></h5>
                <h5><img src={logo3} alt="Cart Logo" style={{width:"40px",height:"40px", marginRight:"20px"}}></img><Link to="/user" style={{color:"black"}}>User</Link></h5>
                <h5><img src={logo4} alt="Cart Logo" style={{width:"40px",height:"45px", marginRight:"20px"}}></img><Link to="/login" style={{color:"black"}}>Login</Link></h5>

            </ul>
       </div>
    )
}
 
export default Sidebar