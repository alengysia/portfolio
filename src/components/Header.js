import { Link } from 'react-router-dom';




function Header(props) {
    return (
      <nav className="nav">
        <h1 class="nav-h1">Welcome to my portfolio</h1>
        <Link to="/">
          <div class="home-nav">Home</div>
        </Link>
      </nav>
    );
  }
  
  export default Header;