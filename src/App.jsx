import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./assets/components/layout/Header";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Shop from "./assets/components/Shop";
import { useAuth } from "./store/AuthProvider";

export default function App() {
  const ctx = useAuth();

  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="home-page" element={<HomePage />} />
        <Route path="register-page" element={<RegisterPage />} />
        <Route path="login-page" element={<LoginPage />} />
        <Route
          path="shop-page"
          element={ctx.isLoggedIn ? <Shop /> : <Navigate to={"/login-page"} />}
        />
      </Routes>
    </div>
  );
}
