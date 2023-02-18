import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
 
function AppDashboard(){
 
        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
             </div>
            </div>  
            {/* <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                  <Dashboard/>
                  </div>
            </div> */}
        </div>  
        );
    }
  
export default AppDashboard;