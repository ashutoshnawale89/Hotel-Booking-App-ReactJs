import React from 'react';
import { Route, Routes} from "react-router-dom"
import Header from './components/Header';
import Home from './components/home/Home';
import OrderSuccess from './components/order/OrderSuccess';
import MyOrders from './components/order/MyOrders';
import AddCart from './components/cart/AddCart';
import LoginForm from './components/user/LoginForm';
import RegisterForm from './components/user/RegistrationForm';
import ForgetPassword from "./components/user/ForgotPassword";
import ResetPassword from './components/user/ResetPassword';
import DashboardPage from "./dashboard/subcomponents/DashboardPage";
import AddBookPage from "./dashboard/subcomponents/BookDashboardPage";
import UserDashboard from './dashboard/subcomponents/UserDashboard';
import About from './dashboard/About';

class App extends React.Component {
  
  render(){
    return (
      <div>
        
        <Routes>
        
            <Route path='/' element={<Home/>}/>
            <Route path='/ordersuccess' element={<OrderSuccess/>}/>
          <Route path='/myorders' element={<MyOrders/>} />
          <Route exact path='/mycart' element={<AddCart/>}></Route>
          <Route path='/login' element={<LoginForm/>} ></Route>
          <Route path='/home' element={<Home/>}/> 
          <Route path='registration' element={<RegisterForm/>}></Route>
          <Route path='forgotpass*' element={<ForgetPassword/>}></Route> 
          <Route path='/resetpass' element={<ResetPassword/>}></Route>
          <Route path='/dashboard' element={<DashboardPage/>}></Route>
          <Route path='/addbook' element={<AddBookPage/>}/>
          <Route path='/user' element={<UserDashboard/>}/>
          <Route path='/about' element={<About/>}/>
        
        </Routes>
       
      </div>);
}
}

export default App;