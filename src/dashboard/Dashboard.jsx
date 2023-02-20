import {useEffect,useState} from 'react';
import PieChart from './PieChart';
import logo from "../assets/book2.png";
import UserService from "../services/UserService";
import OrderService from "../services/OrderService";
import BookService from '../services/BookService';
 
 
const Dashboard = () => {
   
 
   const[users,setUsers] = useState(0);
   const[ordersCount,setOrdersCount] = useState(0);
   const[bookCount,setBooksCount] = useState(0);
   const[orderDetails,setOrderDetails] = useState([[]]);
   const[total,setTotal] = useState(0);
 
   const fetchUsersData = () =>{
    UserService.userGetAll().then(response => {
        console.log(response.data.data);
        setUsers(response.data.data)
    });
   }

   const fetchOrderData =()=>{
    OrderService.getOrderNumber().then(response => {
        console.log(response.data.data);
        setOrdersCount(response.data.data)
    });
}

    const fetchBooksData =()=>{
        BookService.getBooksCount().then(response => {
            console.log(response.data.data);
            setBooksCount(response.data.data)
        });
   }

   const fetchTotalOrderData =()=>{
    OrderService.getOrderDetails().then(response => {
        console.log(response.data.data +"  oRDER");
        setOrderDetails(response.data.data)
    });
    var totalOrderPrice=0;
    
    {orderDetails.map((detail) => (
        console.log(bookCount),
        totalOrderPrice=totalOrderPrice + detail.totalPrice
        ));   
    }
    console.log("Welcome======"+totalOrderPrice)
    setTotal(totalOrderPrice);
    
   }

   
 
 useEffect(() => {
    fetchUsersData();
    fetchOrderData();
    fetchTotalOrderData();
    fetchBooksData();
},([]));
    
 
    return (
        <div class="col main pt-5 mt-3">
            <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            {/* <li class="breadcrumb-item"><a href="#">Dashboard</a></li> */}
            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block" style={{fontWeight:"bold"}}>Book Store Data</p>
 
        {/* <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div> */}
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-4">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Users</h6>
                        <h1 class="display-4">{users}</h1>                       
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-4">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Order Successful</h6>
                        <h1 class="display-4">{ordersCount}</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-4">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                            <img src={logo} alt="Book Logo" style={{height:"70px", width:"100px"}}></img>
                        </div>
                        <h6 class="text-uppercase">Books Available</h6>
                        <h1 class="display-4">{bookCount}</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-4">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                           <img src='data:image/jpeg;base64,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' 
                             alt='Revenue Logo' style={{height:"80px", width:"120px"}}/>
                        </div>
                        <h6 class="text-uppercase">Total Revenue</h6>
                        <h1 class="display-4">${total}</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>

        <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-12">
            <h5 class="mt-3 mb-3 text-secondary">
            Recent Order Successfull Details
            </h5>
            <div class="table-responsive">
            <table class="table table-striped">
            <thead class="thead-light">
                <tr>
                                <th>ID Number</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Record Date</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                                <td>001</td>
                                <td>Yogesh Dhangar</td>
                                <td>yogesh@gmail.com</td>
                                <td>Pune</td>
                                <td>11/02/2022</td>
                                <td></td>
            </tr>
            <tr>
                                <td>002</td>
                                <td>Yogesh Dhangar</td>
                                <td>yogesh@gmail.com</td>
                                <td>Pune</td>
                                <td>01/02/2022</td>
                                <td></td>
            </tr><tr>
                                <td>003</td>
                                <td>Shadab Hussain</td>
                                <td>shadab@gmail.com</td>
                                <td>Pune</td>
                                <td>30/01/2022</td>
                                <td></td>
            </tr><tr>
                                <td>004</td>
                                <td>Nitish Priyadarshi</td>
                                <td>nitish@gmail.com</td>
                                <td>Bihar</td>
                                <td>21/01/2022</td>
                                <td></td>
            </tr><tr>
                                <td>005</td>
                                <td>Shadab Hussain</td>
                                <td>shadab@gmail.com</td>
                                <td>Pune</td>
                                <td>12/01/2022</td>
                                <td></td>
            </tr><tr>
                                <td>006</td>
                                <td>Shweta Birajdar</td>
                                <td>shweta@gmail.com</td>
                                <td>Pune</td>
                                <td>11/01/2022</td>
                                <td></td>
            </tr>
            </tbody>
            </table>

            </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                 <div className="mb-5" style={{height:"300px",width:"400px"}}><PieChart/></div>
                 </div>
        </div>
        <a id="more"></a>
        <hr/>
        <h2 class="sub-header mt-5">Book Store App Related Other Information</h2>
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>It's really good news that the new Bootstrap 4 now has support for CSS 3 flexbox.</p>
                            <footer>Makes flexible layouts <cite title="Source Title">Faster</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-danger text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>The Bootstrap 3.x element that was called "Panel" before, is now called a "Card".</p>
                            <footer>All of this makes more <cite title="Source Title">Sense</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-warning text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>There are also some interesting new text classes for uppercase and capitalize.</p>
                            <footer>These handy utilities make it <cite title="Source Title">Easy</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-info text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>If you want to use cool icons in Bootstrap 4, you'll have to find your own such as Font Awesome or Ionicons.</p>
                            <footer>The Glyphicons are not <cite title="Source Title">Included</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>

        <a id="flexbox"></a>
        <hr/>
        {/* <h2 class="mt-5">Masonry-style grid columns</h2>
        <h6>with Bootstrap 4 flexbox</h6>
 
        <div class="card-columns mb-3">
            <div class="card">
                <img class="card-img-top img-fluid" src="//placehold.it/600x200/444/fff?text=..." alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">New XL Grid Tier</h4>
                    <p class="card-text">With screens getting smaller, Bootstrap 4 introduces a new grid breakpoint with the col-xl-* classes. This extra tier extends the media query range all the way down to 576 px. Eventhough the new XL tier would make one think it’s been added to support extra large screens, it’s actually the opposite.</p>
                </div>
            </div>
            <div class="card card-body">
                <blockquote class="card-blockquote">
                    <p>Bootstrap 4 will be lighter and easier to customize.</p>
                    <footer>
                        <small class="text-muted">
                          Someone famous like <cite title="Source Title">Mark Otto</cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div class="card">
                <img class="card-img-top img-fluid" src="//placehold.it/600x200/bbb/fff?text=..." alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card card-body card-inverse card-primary text-center">
                <blockquote class="card-blockquote">
                    <p>Create masonry or Pinterest-style card layouts in Bootstrap 4.</p>
                    <footer>
                        <small>
                          Someone famous in <cite title="Source Title">Bootstrap</cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div class="card card-body text-center">
                <h4 class="card-title">Clever heading</h4>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
            </div>
            <div class="card">
                <img class="card-img img-fluid" src="//placehold.it/600x200/777/fff?text=..." alt="Card image"/>
            </div>
            <div class="card card-body text-right">
                <blockquote class="card-blockquote">
                    <p>There are also some interesting new text classes to uppercase or capitalize.</p>
                    <footer>
                        <small class="text-muted">
                          Someone famous in <cite title="Source Title">Bootstrap</cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div class="card card-body">
                <h4 class="card-title">Responsive</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <div class="card">
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li class="text-capitalize"><code class="text-lowercase">text-capitalize</code> Capitalize each word</li>
                        <li class="text-uppercase"><code class="text-lowercase">text-uppercase</code> Uppercase text</li>
                        <li class="text-success"><code>text-success</code> Contextual colors for text</li>
                        <li><code>text-muted</code> <span class="text-muted">Lighten with muted</span></li>
                        <li><code>text-info</code> <span class="text-muted">Info text color</span></li>
                        <li><code>text-danger</code> <span class="text-muted">Danger text color</span></li>
                        <li><code>text-warning</code> <span class="text-muted">Warning text color</span></li>
                        <li><code>text-primary</code> <span class="text-primary">Primary text color</span></li>
                    </ul>
                </div>
            </div>
            <div class="card card-body">
                <h4 class="card-title">Heading</h4>
                <p class="card-text">So now that you've seen some of what Bootstrap 4 has to offer, are you going to give it a try?</p>
                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
            </div>
        </div>
      
 
        <a id="layouts"></a>
        <hr/>
        <h2 class="sub-header mt-5">Interesting layouts and elements</h2>
        <div class="row mb-3">
            <div class="col-lg-6">
 
                <div class="card mb-3">
                    <div class="card-header">
                        Bye .well, .panel &amp; .thumbnail
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Replaced with .card</h4>
                        <p class="card-text">All of these Bootstrap 3.x components have been dropped entirely for the new card component.</p>
                        <button type="button" class="btn btn-secondary btn-lg">Large</button>
                    </div>
                </div>
 
            </div>
            <div class="col-lg-6">
               
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home1" role="tab" data-toggle="tab">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#profile1" role="tab" data-toggle="tab">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#messages1" role="tab" data-toggle="tab">Messages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#settings1" role="tab" data-toggle="tab">Settings</a>
                    </li>
                </ul>
 
             
                <div class="tab-content">
                    <br/>
                    <div role="tabpanel" class="tab-pane active" id="home1">
                        <h4>Home</h4>
                        <p>
                            1. These Bootstrap 4 Tabs work basically the same as the Bootstrap 3.x tabs.
                            <br/>
                            <br/>
                            <button class="btn btn-primary-outline btn-lg">Wow</button>
                        </p>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile1">
                        <h4>Pro</h4>
                        <p>
                            2. Tabs are helpful to hide or collapse some addtional content.
                        </p>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="messages1">
                        <h4>Messages</h4>
                        <p>
                            3. You can really put whatever you want into the tab pane.
                        </p>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="settings1">
                        <h4>Settings</h4>
                        <p>
                            4. Some of the Bootstrap 3.x components like well and panel have been dropped for the new card component.
                        </p>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-lg-6">
                <div class="card card-default card-body">
                    <ul id="tabsJustified" class="nav nav-tabs nav-justified">
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#tab1" data-toggle="tab">List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="" data-target="#tab2" data-toggle="tab">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#tab3" data-toggle="tab">More</a>
                        </li>
                    </ul>
                  
                    <br/>
                    <div id="tabsJustifiedContent" class="tab-content">
                        <div class="tab-pane" id="tab1">
                            <div class="list-group">
                                <a href="" class="list-group-item"><span class="float-right label label-success">51</span> Home Link</a>
                                <a href="" class="list-group-item"><span class="float-right label label-success">8</span> Link 2</a>
                                <a href="" class="list-group-item"><span class="float-right label label-success">23</span> Link 3</a>
                                <a href="" class="list-group-item text-muted">Link n..</a>
                            </div>
                        </div>
                        <div class="tab-pane active" id="tab2">
                            <div class="row">
                                <div class="col-sm-7">
                                    <h4>Profile Section</h4>
                                    <p>Imagine creating this simple user profile inside a tab card.</p>
                                </div>
                                <div class="col-sm-5"><img src="//placehold.it/170" class="float-right img-responsive img-rounded"/></div>
                            </div>
                            <hr/>
                            <a href="javascript:;" class="btn btn-info btn-block">Read More Profiles</a>
                            <div class="spacer5"></div>
                        </div>
                        <div class="tab-pane" id="tab3">
                            <div class="list-group">
                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">44</span> <code>.panel</code> is now <code>.card</code></a>
                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">8</span> <code>.nav-justified</code> is deprecated</a>
                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">23</span> <code>.badge</code> is now <code>.label-pill</code></a>
                                <a href="" class="list-group-item text-muted">Message n..</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
 
            <div class="col-lg-6">
                <div id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne"  data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Accordion example
                    </div>
                    <div id="collapseOne" class="card-block collapse in" role="tabpanel" aria-labelledby="headingOne">
                         <p>This is a Bootstrap 4 accordion that uses the <code>.card</code> classes instead of <code>.panel</code>. The single-open section aspect is not working because the parent option (dependent on .panel) has not yet been finalized in BS 4 alpha. </p>
                    </div>
                    <div class="card-header" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Mobile-first
                    </div>
                    <div id="collapseTwo" class="card-block collapse" role="tabpanel" aria-labelledby="headingTwo">
                         <p>Just like it's predecesor, Bootstrap 4 is mobile-first so that you start by designing for smaller devices such as smartphones and tablets, then proceed to laptop and desktop layouts.</p>
                    </div>
                    <div class="card-header" role="tab" id="headingThree"  data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Built for CSS3
                    </div>
                    <div id="collapseThree" class="card-block collapse" role="tabpanel" aria-labelledby="headingThree">
                         <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles.</p>
                    </div>
                  </div>
                </div>
                <p class="mt-4">
                    <a href="/go/KrUO8QpyXP/bootstrao-4-dashboard" target="_ext">Get this Bootstrap 4 admin dashboard at Codeply</a>
                </p>
            </div> 
        </div> */}





        

        
        
 
    </div>
    )
}
 
export default Dashboard

