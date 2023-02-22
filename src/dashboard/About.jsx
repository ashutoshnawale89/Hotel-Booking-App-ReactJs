import logo from "../assets/bookHome.png";

const About =()=>{
    return (
        <div>
            <img src={logo} alt="About Logo" style={{height:"40ex",width:"80ex", marginLeft:"60ex" , marginTop:"10ex" }}></img>
        
           <div style={{textAlign:"center", marginTop:"10px"}}><h2>Welcome To The About Page</h2></div>
        </div>
    )
}
export default About;