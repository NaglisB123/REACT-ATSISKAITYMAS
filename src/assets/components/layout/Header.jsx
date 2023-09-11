import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../store/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";


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
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link
              to="/home-page"
              className="text-2xl text-white hover:text-gray-200 font-bold tracking-wide"
            >
              MY <span className="text-amber-500">SHOP</span>
            </Link>

            <ul className="flex space-x-4">
              <li>
                {!ctx.isLoggedIn && (
                  <NavLink
                    to="/register-page"
                    className="text-xl text-white hover:text-gray-200"
                  >
                    Register
                  </NavLink>
                )}
              </li>
              <li>
                {!ctx.isLoggedIn && (
                  <NavLink
                    to="/login-page"
                    className="text-xl text-white hover:text-gray-200"
                  >
                    Login
                  </NavLink>
                )}
                {isLoggedIn && (
                  <NavLink
                    to="/shop-page"
                    className="text-xl text-white hover:text-gray-200"
                  >
                    Shop Page
                  </NavLink>
                )}
              </li>
              <li>
                {ctx.isLoggedIn && (
                  <button
                    onClick={logout}
                    className="text-xl text-white hover:text-gray-200 cursor-pointer"
                    title="Logout"
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
