import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-500 py-4">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">My Blog Site</div>
          <ul className="flex space-x-4">
            <li><NavLink to='/home-page' className="text-white hover:text-gray-200">Home Page</NavLink></li>
            <li><NavLink to='/add-blog' className="text-white hover:text-gray-200">Add Blog</NavLink></li>
            <li><NavLink to='/blogs-page' className="text-white hover:text-gray-200">Blogs Page</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
