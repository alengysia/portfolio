import { Link } from 'react-router-dom';



function Home(props) {

    
    return (
        <div>
            <div class="home">
            <h1 class="home-h1">Hi, I'm Ashley. I would like to code for you. </h1>
            <h2 class="home-h2">Thank you for visiting</h2>
            </div>
            <div class="links">
                <Link to="/about">
                    <div class="about">About</div>
                </Link>   
                <Link to="/projects">
                    <div class="projects">Projects</div>
                </Link> 
                <Link to="/contact">
                    <div class="contact">Contact me</div>
                </Link> 
            </div>
        </div>
    );
}
  export default Home;