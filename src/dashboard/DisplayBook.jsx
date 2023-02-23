import "../components/home/Home.css";
import React, { useEffect , useState} from 'react';
import BookService from '../services/BookService';
import { Link,useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Menu } from '@mui/material';
import { Stack } from '@mui/system';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import "./AddBook.css";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import AddBookService from "../services/BookService";


const DisplayBook = () => {

    const [books, setBooks] = useState([]);
    const [open, setOpen] = React.useState(false);
    const navigate=useNavigate();

    const fetchBooksData = () => {
        if(localStorage.getItem("adminUserID")!=null){
        BookService.getAllBooks().then(response => {
            console.log(response.data.data);
            setBooks(response.data.data)
        });
    }
    }

    useEffect(() => {
        fetchBooksData();
       
    },([]));

    const handleClose = () => {
        setOpen(false);
      };
      const handleClickOpen = () => {
        setOpen(true);
      };


      const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

  
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    let [bookDetails, setBookDetails] = useState({
        bookName: "",
        authorName: "",
        bookDescription: "",
        price: "",
        quantity: "",
        bookImg:"",
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBookDetails({ ...bookDetails,
            [name]: value,
         
        });
        console.log(bookDetails);
    };
    

    const addBook = (event) => {
        event.preventDefault();
        let bookData = {
            bookName: bookDetails.bookName,
            authorName: bookDetails.authorName,
            bookDescription: bookDetails.bookDescription,
            price: bookDetails.price,
            quantity: bookDetails.quantity,
            bookImg:bookDetails.bookImg,
            
        };
        if(localStorage.getItem("adminUserID")!=null){
        AddBookService.addBook(bookData).then((response) => {
            console.log("created" + response);
            alert("Book Added successfully...");
           handleClose();
        
        }).catch((response) => {
            alert(response.response.data.data);
        });
    }
    };



    return (
        <div class="col main pt-5 mt-3">
        <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="dashboard">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard/BookData</li>
        <div style={{marginLeft:"105ex"}}>
        <Button variant="outlined" onClick={handleClickOpen}>
        Add Book
      </Button >


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{textAlign:"center", backgroundColor:"yellowgreen"}}>Enter Book Details</DialogTitle>
        

        <form action="#" onSubmit={addBook} >
            <div>
        <DialogContent>
        <TextField style={{ margin: '3px' }}
        autoFocus
        margin="dense"
        id="name"
        label="Book Name"
        fullWidth
        variant="standard"
                        type="text"
                        name="bookName"
                        placeholder="Enter book name"
                        value={bookDetails.bookName}
                        onChange={handleInput}
                        required
                    />
       
    
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    fullWidth
                    variant="standard"
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        name="authorName"
                        placeholder="Enter Author Name"
                        value={bookDetails.authorName}
                        onChange={handleInput}
                        label="Author Name"
                        required
                    />
        

       
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        variant="standard"
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        name="bookDescription"
                        placeholder="Book Description"
                        value={bookDetails.bookDescription}
                        onChange={handleInput}
                        label="Book Description"
                        required
                    />
       

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        variant="standard"
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        name="price"
                        placeholder="Price"
                        label="Book Price"
                        required
                        value={bookDetails.price}
                        onChange={handleInput}
                    />
        

        
                    <TextField
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        name="quantity"
                        autoFocus
                    margin="dense"
                    id="name"
                    fullWidth
                    variant="standard"
                        placeholder="Quantity"
                        label="Quantity No's "
                        required
                        value={bookDetails.quantity}
                        onChange={handleInput}
                    />
        

       
                    <TextField
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        name="bookImg"
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        variant="standard"
                        placeholder="Book Image"
                        label="Book Image Link"
                        required
                        value={bookDetails.bookImg}
                        onChange={handleInput}
                    />
       
        {/* <div className="button">
            <Button variant='contained' size='medium' color='inherit' type="submit" className="button" id="button" style={{margin:"10px" , backgroundColor:"green"}} >Add Book </Button>
            <Button variant='contained' size='medium' color='inherit' onClick={handleClose} className="button" id="button" style={{ backgroundColor:"red"}} >Cancel </Button>

        </div> */}
        </DialogContent>
        <DialogActions>
          <Button variant='contained' style={{ backgroundColor:"green"}} type="submit">Add+</Button>
          <Button variant='contained' style={{ backgroundColor:"red"}} onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </div>
        </form>  
          

        
      </Dialog>


        </div>
    </ol>
    
    </nav>

    
    <p class="lead d-none d-sm-block" style={{fontWeight:"bold"}}>Book Collection Data</p>

    <Typography gutterBottom variant="h5">
        BOOKS[{books.length}]
    </Typography>

    <div class="row mb-3">

        <Grid container spacing={2} margin="20px">
            {books.map(book => (
                <Grid item xs={6} sm={4} md={4}>
                    <Card sx={{ maxWidth: 300, boxShadow: ' 2px 3px grey', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px', paddingTop: '0px', marginBottom: '40px' }}>
                        <CardActionArea>
                            <CardMedia
                                style={{ objectFit: 'fill' }} //objectFit: 'contain'
                                component="img"
                                height="300"
                                image={book.bookImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" >
                                    {book.bookName}
                                </Typography>
                                <Typography variant="body1" display="block" gutterBottom>
                                    by {book.authorName}
                                </Typography>
                                <Typography gutterBottom variant="body2" >
                                    Rs. {book.price}
                                </Typography>
                                <Typography gutterBottom variant="body4" >
                                   Available Quantity. {book.quantity}
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            ))}



        </Grid>
    
    </div>
        
    </div>
)
}
export default DisplayBook;

