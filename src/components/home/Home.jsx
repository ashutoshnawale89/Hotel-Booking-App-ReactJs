import "./Home.css";
import cartIcon from '../../assets/cart9.png';
import registerIcon from '../../assets/register3.png'
import React, { useEffect , useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Menu } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import HotelService from "../../services/HotelService";
import CartService from '../../services/CartService';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [hotels, setHotels] = useState([]);
    const [cntMap, setCntMap] = useState(new Map());
    const [cartcount, setCartcount] = useState([]);

   
     
    
    const logout = () => {
        
        console.log(localStorage);
        if (localStorage.length === 0) {
           navigate("/login");
        }
        else {
        localStorage.removeItem("firstName")
        localStorage.removeItem("userId")
        localStorage.removeItem("jwtToken");
        toast.success("User Logout Successfully.....!!!" , {
            position:"top-center"
        });
    }
}


    const fetchCartDetails = () => {
        CartService.getCartItemsByUserId().then((response) => {
            setCartcount(response.data.data)
        })
    }

    const fetchHotelsData = () => {
        HotelService.getAllHotels().then(response => {
            console.log(response.data.data);
            setHotels(response.data.data)
        });
    }


    useEffect(() => {
        setUserId(localStorage.getItem("userId"));
        fetchHotelsData();
         fetchCartDetails();
    
    },([]));


    
    const addToCart = (hotelId) => {
      
             
         setUserId(localStorage.getItem("userId"));
        let qnt = 1;
        let object = {
            "hotelId": hotelId,
            "roomQuantity": qnt,
        }
        console.log(object);
    
       { CartService.addToCart(userId, object).then((response) => {
        navigate("/mycart");
        }).catch(() => {
            toast.info("book already added in cart!", {
                position:"top-center"
            })
            
        });
    }
    } 
    
    const addToCartPrimium = (hotelId) => {
      
             
        setUserId(localStorage.getItem("userId"));
       let qnt = 1;
       let object = {
           "hotelId": hotelId,
           "roomQuantity": qnt,
       }
       console.log(object);
   
      { CartService.addToCartPrimium(userId, object).then((response) => {
       navigate("/mycart");
       }).catch(() => {
           toast.info("book already added in cart!", {
               position:"top-center"
           })
           
       });
   }
       //window.location.reload();
       

   }


    const handleSort = (event) => {
        if (event.target.value === 1) {
            HotelService.getAllHotelsSortedByPriceAsc().then((response) => {
                setHotels(response.data.data)
            })
        } else {
            HotelService.getAllHotelsSortedByPriceDesc().then((response) => {
                setHotels(response.data.data)
            })
        }
    }

    const handlerSearch = (event) => {
        event.preventDefault();
        let search = event.target.value;
        console.log(search);
        HotelService.searchByHotelName(search).then((response) => {
            setHotels(response.data.data)                  
            }) 
            .catch((response) => {
                toast.info("Hotel Does Not Exist in Cart" , {
                    position:"top-center"
                });
            });
    };

    const cartcheck = () => {
    var cartSizes = cartcount.length;
        console.log(cartSizes)
    if (localStorage.length !== 0){
        if (cartSizes === 0){
            toast.info("Cart is Empty" , {
                position:"top-center"
            });
        }
        else {
            navigate("/mycart")
        }
    }
    else {
      navigate("/login");
    }
    };


    
        return (

            <div>
                <Header/>
                <header className="header">
                    <span className="cartcount">
                        [{cartcount.length}]
                    </span>

                    <div className="button-home">
                    <Button onClick={cartcheck} className='buttoncart'>
                            <img src={cartIcon}
                             height={45}
                            width={50}
                            alt="cartIcon"
                            className="login-image-homepage" ></img>
                    </Button>


                        <div>
                            <PopupState variant='popover' popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <Box
                                            m={4}
                                            display='flex'
                                            justifyContent='flex-end'
                                        >
                                            <image variant="contained" style={{
                                                position: 'relative', bottom: 55, right: "-20%",
                                                transform: "translateX(20%)"
                                            }} {...bindTrigger(popupState)}>
                                                <img src={registerIcon}
                                                    height={40}
                                                    width={45}
                                                    alt="registerIcon"
                                                    className="reg-image-homepage" />
                                            </image>
                                        </Box>
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem style={{ color: 'black' }}>MY ACCOUNT({localStorage.getItem('firstName')})</MenuItem>
                                            <Link to='/myorders' style={{ textDecoration: 'none', color: 'darkgoldenrod' }}><MenuItem onClick={popupState.close}>My Orders</MenuItem></Link>
                                            <Link to='/registration' style={{ textDecoration: 'none', color: 'darkgoldenrod' }}><MenuItem onClick={popupState.close}>{localStorage.getItem("userId") === null ? 'Register' : 'Update User'}</MenuItem></Link>
                                            <div style={{ textDecoration: 'none', color: 'darkgoldenrod' }}><MenuItem onClick={logout}>{localStorage.getItem("userId") === null ? 'Sign In' : 'Sign Out'}</MenuItem></div>
                                        
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </div>

                    </div>
                </header>

                <Container >
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                        sx={{ marginTop: '10px' }}>
                        <Typography gutterBottom variant="h5">
                            HOTELS[{hotels.length}]
                        </Typography>

                        <Box>
                            <input style={{ padding: '10px 5px 5px 5px', textAlign: 'center',margin:"0px 10px 0px 700px " }} onChange={handlerSearch} placeholder="search"></input>
                           
                        </Box>

                        <FormControl size='small' sx={{ width: '100px' }}>
                            <InputLabel id="sort">Sort</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="sort"
                                label="Sort"
                                name="sortBy"
                                onChange={handleSort}
                            >
                                <MenuItem value={1} >
                                    <Typography variant="caption">Price: Low to High</Typography>
                                </MenuItem>
                                <MenuItem value={2}>
                                    <Typography variant="caption" >Price: High to Low</Typography>
                                </MenuItem>
                            </Select>
                        </FormControl>

                    </Box>


                    <Box sx={{ flexGrow: 1, marginTop: '15px', marginBottom: '20px', padding: '25px', background: '#EFF5F5', boxShadow: '1px 2px 3px 2px grey', borderRadius: '20px' }}>

                        <Grid container spacing={2}>
                            {hotels.map(hotel => (
                                <Grid item xs={6} sm={4} md={4}>
                                    <Card sx={{ maxWidth: 300, boxShadow: ' 2px 3px grey', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px', paddingTop: '0px', marginBottom: '40px' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                style={{ objectFit: 'fill' }} //objectFit: 'contain'
                                                component="img"
                                                height="300"
                                                image={hotel.hotelImg}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" >
                                                    {hotel.hotelName}
                                                </Typography>
                                                <Typography variant="body1" display="block" gutterBottom>
                                                    by {hotel.hotelName}
                                                </Typography>
                                                <Typography gutterBottom variant="body2" >
                                                       {hotel.hotelDescription}
                                                </Typography>
                                                <Typography gutterBottom variant="body6" >
                                                   Std Rate. {hotel.standardHotelPrice} /day
                                                </Typography>
                                                <br></br>
                                                <Typography gutterBottom variant="body6" >
                                                   Primium Rate. {hotel.primiumHotelPrice} /day
                                                </Typography>
                                        
                                                <Stack  marginLeft='1px' direction="row" spacing={2}>
                                                 { hotel.roomQuantity === 0 ? <Button variant="contained">Not Available</Button> :
                                                <Stack direction="row" spacing={2}>
                                                 <Button variant="contained" color="warning" startIcon={<AddShoppingCartIcon />} onClick={() => addToCartPrimium(hotel.hotelId)}>Primium</Button>
                                                 
                                                 <Button variant="contained" color="warning" startIcon={<AddShoppingCartIcon />} onClick={() => addToCart(hotel.hotelId)}>
                                                  Standard
                                                 </Button>
                                                 </Stack>
                                                 }   
                                                </Stack>
                                                
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>

                            ))}



                        </Grid>
                    </Box>


                </Container>
                <ToastContainer/>

            </div>
        );
    }


export default Home;

