import { Link } from 'react-router-dom';




function Header(props) {
    return (
      <nav className="nav">
        <Link to="/">
        <h1 class="nav-h1">Welcome to my portfolio</h1>
        </Link>
      </nav>
    );
  }
  
  export default Header;