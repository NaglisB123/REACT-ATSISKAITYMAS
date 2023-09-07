import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-500 py-11">
      <nav className="flex space-x-4 justify-center">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">

              <ul className="flex space-x-10">
                <li>
                  <NavLink to='/home-page' className="text-white hover:text-gray-200">Home Page</NavLink>
                </li>
                <li>
                  <NavLink to='/blog-page' className="text-white hover:text-gray-200">Add Blog</NavLink>
                </li>
                <li>
                  <NavLink to='/contact-page' className="text-white hover:text-gray-200">Contact Page</NavLink>
                </li>
                <li>
                  <NavLink to='/about-page' className="text-white hover:text-gray-200">About Page</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
