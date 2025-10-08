import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const navItems = [
    { to: "/app", label: "Home" },
    { to: "/app/about", label: "About" },
    { to: "/app/feedback", label: "Feedback" },
    { to: "/app/portal", label: "Portal" },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-sky-600 to-purple-600 text-white shadow-lg relative">
      <nav className="flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <div className="logo cursor-pointer">
          <img
            className="h-16 rounded-xl"
            src="https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg"
            alt="logo"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/app"}
              className={({ isActive }) =>
                `relative group font-semibold transition-all ${
                  isActive ? "text-yellow-300" : "text-white hover:text-yellow-200"
                }`
              }
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] w-0 group-hover:w-full h-[2px] bg-yellow-200 transition-all"></span>
            </NavLink>
          ))}

          {/* Account Icon */}
          <div className="relative">
            <i
              className="fa-solid fa-circle-user text-4xl cursor-pointer hover:text-yellow-200 transition-colors"
              onClick={() => setShowAccount(!showAccount)}
            ></i>
            {showAccount && (
              <div className="absolute right-0 mt-2 w-36 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white transition-all"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <div
          className="md:hidden text-3xl cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-600 via-sky-600 to-purple-600 text-white transform transition-transform duration-500 ease-in-out z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-6">
          <img
            className="h-14 rounded-lg"
            src="https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg"
            alt="logo"
          />
        </div>

        <div className="flex flex-col items-center mt-10 gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/app"}
              className={({ isActive }) =>
                `w-3/4 text-center py-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-yellow-300 text-indigo-900 font-semibold"
                    : "hover:bg-yellow-200 hover:text-indigo-900"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Account Icon */}
          <div className="relative mt-4">
            <i
              className="fa-solid fa-circle-user text-3xl cursor-pointer hover:text-yellow-200 transition-colors"
              onClick={() => setShowAccount(!showAccount)}
            ></i>
            {showAccount && (
              <div className="absolute left-0 mt-2 w-36 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white transition-all"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};