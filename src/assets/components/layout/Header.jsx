import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-amber-950 py-11">
      <nav className="flex space-x-4 justify-center">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">

              <ul className="flex space-x-10">
                <li>
                  <NavLink to='/home-page' className="text-2xl text-white hover:text-gray-200">Home</NavLink>
                </li>
                <li>
                  <NavLink to='/products-page' className="text-2xl text-white hover:text-gray-200">Products</NavLink>
                </li>
                <li>
                  <NavLink to='/contact-page' className="text-2xl text-white hover:text-gray-200">Contact</NavLink>
                </li>
                <li>
                  <NavLink to='/about-page' className="text-2xl text-white hover:text-gray-200">About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
