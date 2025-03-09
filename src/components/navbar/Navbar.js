import "../../assets/styles/Navbar.css";
import ExpandingSearchBar from "./ExpandingSearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar overflow-visible ">
          <h1 className="logo">SSArtcles</h1>
            
          <nav className="nav-links hov">
            <ExpandingSearchBar />
            <Link to="/">Home</Link>
            <Link to ="create">Create Post</Link>
          </nav>
          
      </nav>
    );
}
 
export default Navbar;