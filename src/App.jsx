import { Routes, Route } from "react-router-dom";
import Header from "./assets/components/layout/Header";
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/products-page" element={<ProductsPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </>
  );
}
