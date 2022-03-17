import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Skills from './pages/Skills';
import Testimonials from './pages/Testimonials';
import './App.css';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="blogs" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
