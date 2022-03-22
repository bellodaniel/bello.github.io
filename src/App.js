import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/blog/Blog";
import Post from "./components/blog/Post";
import Post1 from "./components/blog/Post1";
import Post2 from "./components/blog/Post2";
import Post3 from "./components/blog/Post3";
import Skills from "./components/Skills";


export default function App() {
  return (
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/magento-2-frontend-developer" element={<Post />} />
      <Route path="/what-is-a-front-end-developer" element={<Post1 />} />
      <Route path=":postSlug" element={<Post2 />} />
      <Route path=":postSlug" element={<Post3 />} />
    </Routes>
    <Footer />
  </Router>
  );
}
