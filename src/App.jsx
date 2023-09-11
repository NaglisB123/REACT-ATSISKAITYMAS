import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./assets/components/layout/Header";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./store/AuthProvider";
import Footer from "./assets/components/layout/Footer";
import CreateAdd from "./pages/CreateAdd";
import Shops from "./pages/Products";

export default function App() {
  const ctx = useAuth();

  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="home-page" element={<HomePage />} />
        <Route path="register-page" element={<RegisterPage />} />
        <Route path="login-page" element={<LoginPage />} />
        <Route path="shop-page" element={<Shops />} />
        <Route path="addpage" element={<CreateAdd />} />
      </Routes>
      <Footer />
    </div>
  );
}
