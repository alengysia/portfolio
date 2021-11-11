
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import About from "../pages/About"
import Home from "../pages/Home"
import Projects from "../pages/Projects"



function Main(props) {

    
    return (
        <main>
          <Routes>
             <Route exact path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/projects" element={<Projects />} />
                    
          </Routes>
        </main>
    );
}
  export default Main;