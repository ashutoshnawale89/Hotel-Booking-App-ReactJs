import React from 'react';
import { Link } from 'react-router-dom';
import Home from "../components/home/Home";
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
export const Navbar = () => {
    const navigate=useNavigate();
    const logoutUser = () => {
        if (localStorage.getItem("adminUserID")== null) {
            navigate("/adminlogin");
         }
         else{
         localStorage.removeItem("adminPassword");
         localStorage.removeItem("adminUserID");
         toast.success("User Logout Successfully.....!!!" , {
             position:"top-center"
         });
        }
    
    }
    const about =()=>{
        navigate("/about");
    }
    return (
            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link class="navbar-brand" to="/dashboard#" title="Free Bootstrap 4 Admin Template">Dashboard</Link>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/home">Home</Link>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <div style={{color:"whitesmoke"}}><h6><MenuItem onClick={logoutUser}>{localStorage.getItem("adminUserID") === null ? 'Admin Sign In' : 'Admin Sign Out'}</MenuItem></h6></div>
                    </li>
                    <li class="nav-item">
                        <div style={{color:"whitesmoke"}}><h6><MenuItem onClick={about}>About</MenuItem></h6></div>
                    </li>

                    </ul>
                </div>
                <ToastContainer/>
       </nav>
    )
}
export default Navbar
