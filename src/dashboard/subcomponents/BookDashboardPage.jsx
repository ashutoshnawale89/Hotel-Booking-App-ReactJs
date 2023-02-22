import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import DisplayBook from "../DisplayBook";
 
function BookDashboardPage(){
 
        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <DisplayBook/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default BookDashboardPage;