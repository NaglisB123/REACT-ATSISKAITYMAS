import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./assets/components/layout/Header";
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'




export default function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="home-page" element={<HomePage/>}/>
        <Route path="register-page" element={<RegisterPage/>}/>
        <Route path="login-page" element={<LoginPage/>}/>
      </Routes>
   </div>
  );
}
