import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };
  return (
    <div>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-black p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold">
              Hank's <span className="text-red-600">Garage</span>
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
            <Link to="/home" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            {user?.uid && (
              <Link to="/orders" className="mr-5 hover:text-gray-900">
                Order
              </Link>
            )}
            {user?.uid ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-black rounded text-base mt-4 md:mt-0"
              >
                Logout
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center bg-red-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mt-4 md:mt-0"
              >
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
