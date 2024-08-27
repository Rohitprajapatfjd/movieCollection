import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const searchValue =  location?.search.slice(3).split("%20").join(" ")
  const [srValue, setSrvalue] = useState(searchValue);
  const navigate = useNavigate();
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (srValue.trim()) {
        navigate(`/search?q=${encodeURIComponent(srValue)}`);
        setSrvalue("");
    }
};
  return (
    <header>
      <nav className="bg-black bg-opacity-70 backdrop-blur-2xl fixed w-full h-14 z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="w-36" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
          <div className="flex md:order-2">
            <Link
              to="/search"
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-slate-200  focus:outline-none  rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </Link>
            <div className="relative hidden md:block">
              <Link
                to={"/search"}
                className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  className="w-4 h-4 text-slate-300 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </Link>
              <form onSubmit={handleSearchSubmit}>
                <input
                  value={srValue}
                  onChange={(e) => setSrvalue(e.target.value)}
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-white outline-none rounded-lg focus:bg-neutral-500 bg-transparent "
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="/movie"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-slate-50" : "text-slate-300"
                    } block py-2 px-3  font-bold hover:text-slate-50  bg-blue-700 rounded md:bg-transparent  md:p-0 `
                  }
                  aria-current="page"
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tv"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-slate-50" : "text-slate-300"
                    } block py-2 px-3  font-bold hover:text-slate-50 bg-blue-700 rounded md:bg-transparent  md:p-0 `
                  }
                >
                  Tv Shows
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-slate-50" : "text-slate-300"
                    } block py-2 px-3 font-bold hover:text-slate-50 bg-blue-700 rounded md:bg-transparent  md:p-0 `
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
