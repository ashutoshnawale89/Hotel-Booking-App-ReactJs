import logo from "../assets/bookHome.png";

const About =()=>{
    return (
        <div>
            <img src={logo} alt="About Logo" style={{height:"70ex",width:"120ex", marginLeft:"20ex" , marginTop:"10ex"}}></img>
        
           <div style={{textAlign:"center", marginTop:"10px"}}><h2>Welcome To The About Page</h2></div>
        </div>
    )
}
export default About;