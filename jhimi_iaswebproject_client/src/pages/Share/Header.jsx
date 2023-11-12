import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Remove both admin-login and user-login from localStorage
    localStorage.removeItem('admin-login');
    localStorage.removeItem('user-login');

    // Add any additional logout logic if needed

    // Redirect to the home page or login page after logout
    navigate('/login');
  };

  return (
    <nav
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      className=" rounded-xl md:rounded-full w-11/12 md:w-10/12 mx-auto my-3 px-5 py-2 "
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-black text-xl font-bold">
              Truly IAS
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "LinkTiems rounded-full" : ""
              }
            >
              <p className="font-semibold py-1 px-4">Home</p>
            </NavLink>
            <NavLink
              to="/allqsn"
              className={({ isActive }) =>
                isActive ? "LinkTiems rounded-full" : ""
              }
            >
              <p className="font-semibold py-1 px-4">All Questions</p>
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "LinkTiems rounded-full" : ""
              }
            >
              <p className="font-semibold py-1 px-4">Dashboard</p>
            </NavLink>
            <button onClick={handleLogout}>
              <p className="font-semibold py-1 px-4">LogOut</p>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-black focus:outline-none"
              onClick={toggleNavbar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="#" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link to="#" className="text-white hover:text-gray-300">
                About
              </Link>
              <Link to="#" className="text-white hover:text-gray-300">
                Services
              </Link>
              <Link to="#" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
