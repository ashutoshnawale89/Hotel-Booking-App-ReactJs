import React from 'react'
import { useState , useEffect} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import "./AdminLogin.css"
import AdminLoginService from "../services/AdminLoginService";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

 const AdminLogin = (props) =>{

    const navigate = useNavigate();
    
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const fetchData=()=>{
        if(localStorage.getItem("adminUserID")!=null){
            toast.success("Admin User Logined Already.....!!!" , {
                position:"top-center"
            });
            navigate("/dashboard");
            

        }
    }

    useEffect(() => {
        fetchData();
       
    },([]));

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserDetails({ ...userDetails, [name]: value });
        console.log(userDetails);
    };

    const login = (event) => {
        event.preventDefault();
        let loginData = {
            email: userDetails.email,
            password: userDetails.password,
        };

        AdminLoginService.userLogin(loginData).then((response) => {
            
            console.log("Login" + response.data.data)

            toast.success("User Logined Successfully.....!!!" , {
                position:"top-center"
            });
            navigate("/dashboard");
            
                
            let adminPassword = response.data.data.password;
            localStorage.setItem("adminPassword", adminPassword)

            let userId = response.data.data.adminid;
            localStorage.setItem("adminUserID", userId)

            console.log(localStorage);
            
        }).catch((response) => {
            alert(response.response.data.data);
        });

    };


    return (
        <div>

            <div className="form-content-login">

                <form className="form-login" action="#" onSubmit={login}>

                    <div className="form-head-content">
                        <div className="form-head-login">Book Store Admin Login</div>
                    </div>

                    <div className="row-content-login">
                        <TextField
                            className="input-login"
                            id="outlined-helperText"
                            type="text"
                            name="email"
                            label="Email"
                            placeholder="Email"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <div className="row-content-login">

                        <FormControl sx={{ width: '24ch' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-password"
                                name="password"
                                placeholder='Enter password'
                                type={values.showPassword ? 'text' : 'password'}
                                value={userDetails.password}
                                onChange={handleInput}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            required
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                className="password-login"
                            />
                        </FormControl>

                    </div>

                    <div className="links">
                    </div>

                    <div className='button-login'>
                        <Button variant="contained" size="medium" color="inherit" className='button-login' type="login"> Login</Button>
                    </div>

                  

                    
                </form>

            </div>
            <ToastContainer/>
        </div>
    )
}
export default AdminLogin;