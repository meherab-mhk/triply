import { NavLink } from "react-router-dom";

const Nav = () => {
  const menu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "btn mx-2 bg-green-400 hover:bg-green-400"
            : "btn mx-2 bg-green-200 hover:bg-green-400"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-tourist-spots"
        className={({ isActive }) =>
          isActive
            ? "btn mx-2 bg-green-400 hover:bg-green-400"
            : "btn mx-2 bg-green-200 hover:bg-green-400"
        }
      >
        All Spots
      </NavLink>
      <NavLink
        to="/add-tourist-spot"
        className={({ isActive }) =>
          isActive
            ? "btn mx-2 bg-green-400 hover:bg-green-400"
            : "btn mx-2 bg-green-200 hover:bg-green-400"
        }
      >
        Add Spot
      </NavLink>
      <NavLink
        to="/my-list"
        className={({ isActive }) =>
          isActive
            ? "btn mx-2 bg-green-400 hover:bg-green-400"
            : "btn mx-2 bg-green-200 hover:bg-green-400"
        }
      >
        My List
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? "btn mx-2 bg-green-400 hover:bg-green-400"
            : "btn mx-2 bg-green-200 hover:bg-green-400"
        }
      >
        Register
      </NavLink>
      <NavLink
        to="login"
        className={({ isActive }) =>
          isActive
            ? "btn mx-2 bg-green-400 hover:bg-green-400"
            : "btn mx-2 bg-green-200 hover:bg-green-400"
        }
      >
        Login
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex lg:flex-col">
          <div className="flex justify-center items-center">
            <img className="w-20" src="/t.png" alt="" />
            <a className="text-5xl font-black ">Triply</a>
          </div>
          <div className="my-4">{menu}</div>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default Nav;
