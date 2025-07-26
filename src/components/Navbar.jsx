import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-[100%] m-auto mt-2">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-green-600">
         ShopMart
        </NavLink>

        
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

       
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
        </ul>
      </div>

     
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white">
          <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink></li>
          <li><NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink></li>
          <li><NavLink to="/signup" onClick={() => setOpen(false)}>Signup</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
