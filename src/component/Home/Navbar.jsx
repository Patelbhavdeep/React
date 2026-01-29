import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-24">
      <nav className="flex items-center fixed left-10 right-10 top-3 justify-between border-2 p-3 rounded-full">
        <div>
  <h1>Home</h1>
        </div>
        <div className="flex gap-5">
          <h1>About</h1>
          <Link to="/products">
            <h1>Product</h1>
          </Link>
          <h1>Cart</h1>
        </div>
        <div>
          <Link to="/login">
            <button className="px-4 py-1 border rounded-xl">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
