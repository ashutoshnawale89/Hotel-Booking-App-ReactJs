import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import UserData from '../UserData';



const UserDashBoard =()=> {

    
    return (
        <div>
            <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <UserData/>
                
             </div>
            </div>  
            


        </div>
    )
}
export default UserDashBoard;