import { Link } from 'react-router-dom';



function Home(props) {

    
    return (
        <div>
            <h1>Hi, I'm Ashley. I would like to code for you. </h1>
            <div>
                <Link to="/about">
                    <div>About</div>
                </Link>   
                <Link to="/projects">
                    <div>Projects</div>
                </Link> 
            </div>
        </div>
    );
}
  export default Home;