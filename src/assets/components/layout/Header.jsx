import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-amber-950 py-11">
      <nav className="flex space-x-4 justify-center">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo on the left */}
            <Link
              to="/home-page"
              className="text-2xl text-white hover:text-gray-200 font-bold tracking-wide"
            >
              MY <span className="text-red-500">SHOP</span>
            </Link>

            {/* Register and Login links on the right */}
            <ul className="flex space-x-10">
              <li>
                <NavLink
                  to="/register-page"
                  className="text-2xl text-white hover:text-gray-200"
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login-page"
                  className="text-2xl text-white hover:text-gray-200"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
