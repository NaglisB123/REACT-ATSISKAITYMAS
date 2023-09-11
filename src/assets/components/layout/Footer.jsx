import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-rose-700 text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <Link
              to="/about"
              className="text-white hover:text-gray-400 block mb-2"
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className="text-white hover:text-gray-400 block mb-2"
            >
              Careers
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-gray-400 block mb-2"
            >
              Blog
            </Link>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <Link
              to="/products"
              className="text-white hover:text-gray-400 block mb-2"
            >
              All Products
            </Link>
            <Link
              to="/featured"
              className="text-white hover:text-gray-400 block mb-2"
            >
              Featured Products
            </Link>
            <Link
              to="/new-arrivals"
              className="text-white hover:text-gray-400 block mb-2"
            >
              New Arrivals
            </Link>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-300 mb-2">1234 Elm Street</p>
            <p className="text-gray-300 mb-2">City, State 12345</p>
            <p className="text-gray-300 mb-2">Email: info@example.com</p>
            <p className="text-gray-300 mb-2">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
