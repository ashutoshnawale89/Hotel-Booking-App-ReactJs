import React, { Component } from 'react';
import './Header.css'
import { Link } from '@mui/material';
class Header extends Component {
    render() {
        return (
            <div>
                
                <header  className="header-content header">
                    
                    <div className="logo-content">
                       <Link href='/home'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0F4CTmKHHrICJtBRwrD3adK70_1Dq4JGDzQ&usqp=CAU" alt="" width="60px"/></Link>
                        <div>
                            <span className="address-text">HOTEL</span><br />
                            <span className="address-book">STAY STORE</span>
                        </div>
                    </div>
                </header>
               
            </div>
        );
    }
}

export default Header;
