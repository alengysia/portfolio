
import { Route, Routes } from 'react-router-dom'
import About from "../pages/About"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"



function Main(props) {

    
    return (
        <main>
          <Routes>
             <Route exact path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/projects" element={<Projects />} />
             <Route path ="/contact" element={<Contact />} />  
          </Routes>
        </main>
    );
}
  export default Main;