import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../store/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { Toaster } from "react-hot-toast";

export default function Header() {
  const ctx = useAuth();
  console.log("ctx ===", ctx);

  const isLoggedIn = ctx.isLoggedIn;

  function logout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }

  return (
    <header className="bg-rose-700 py-11">
      <nav className="flex space-x-4 justify-center">
        <Toaster />
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                className="h-16"
                src="./public/logo.jpg"
                alt="company logo"
              />
              <Link
                to="/home-page"
                className="text-4xl text-white hover:text-gray-200 font-bold tracking-wide pl-5"
              >
                MY <span className="italic text-yellow-500">SHOP</span>
              </Link>
            </div>
            <ul className="flex space-x-4">
              <li>
                {!ctx.isLoggedIn && (
                  <NavLink
                    to="/register-page"
                    className="text-3xl text-white hover:text-gray-200"
                  >
                    Register
                  </NavLink>
                )}
              </li>
              <li>
                {!ctx.isLoggedIn && (
                  <NavLink
                    to="/login-page"
                    className="text-3xl text-white hover:text-gray-200"
                  >
                    Login
                  </NavLink>
                )}
                {isLoggedIn && (
                  <NavLink
                    to="/shop-page"
                    className="text-3xl text-white hover:text-gray-200"
                  >
                    Shop Page
                  </NavLink>
                )}
              </li>
              <li>
                {ctx.isLoggedIn && (
                  <Link
                    className="text-3xl text-white hover:text-gray-200 cursor-pointer"
                    to="/addpage"
                  >
                    Ad page
                  </Link>
                )}
              </li>
              <li>
                {ctx.isLoggedIn && (
                  <Link
                    onClick={logout}
                    className="text-3xl text-white hover:text-gray-200 cursor-pointer"
                    to="/home-page"
                  >
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
