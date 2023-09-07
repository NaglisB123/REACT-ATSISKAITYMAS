import { Routes, Route } from "react-router-dom";
import Header from "./assets/components/layout/Header";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Routes>
    </>
  );
}
