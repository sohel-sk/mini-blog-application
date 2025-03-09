import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./pages/NotFound";


function App() {
  
  return (
    <Router>
      <div className="App mx-[5%] lg:mx-[10%]" >
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreatePost />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>

          <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
