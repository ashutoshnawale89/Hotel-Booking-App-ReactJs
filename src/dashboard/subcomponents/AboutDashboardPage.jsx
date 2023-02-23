import React from 'react';
import AboutPage from '../About';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
 
function AboutDashboardPage(){
 
        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <AboutPage/>
                
             </div>
            </div>  
        </div>  
        );
   }
  
export default AboutDashboardPage;