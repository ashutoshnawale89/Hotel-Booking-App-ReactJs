import React from 'react';
import {useEffect,useState} from 'react';
import UserService from "../services/UserService";

const UserData =()=> {

    const[users,setUsers] = useState([]);
 
   const fetchUsersData = () =>{
    UserService.userGetAllData().then(response => {
        console.log(response.data.data);
        setUsers(response.data.data)
    });
   }


 useEffect(() => {
    fetchUsersData();
},([]));

    return (
        
           
            
            <div class="col main pt-5 mt-3">
            <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            <li class="breadcrumb-item active" aria-current="page">User Data</li>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block" style={{fontWeight:"bold"}}>User Details</p>
        <p class="lead d-none d-sm-block" style={{textUnderlinePosition:"from-font"}}>Total User [{users.length}] </p>
 
        <div style={{textAlign:"center" , marginLeft:"10ex"}}>
        <div class="row mb-7">
            <div class="col-xl-20 col-sm-50 py-4">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                    <div class="table-responsive">
            <table class="table table-striped">
            <thead class="thead-light">
                <tr>
                                <th>ID Number</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                </tr>
            </thead>
            {users.map(user => (
           
            
            <tbody>
            <tr>
                                <td>{user.userId}</td>
                                <td>{user.firstName}{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                
            </tr>
           
            </tbody>
             ))}
            </table>
            </div>    
            </div>
              </div>       
        </div>

    </div>   
    </div>
              

    )
}
export default UserData;