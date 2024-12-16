import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Utility function to apply active class
  const isActive = (path) =>
    location.pathname === path ? "text-[#4ECB38]" : "";

  // Determine the navbar background style based on route and scroll
  const getBackgroundStyle = () => {
    if (location.pathname === "/") {
      return isSticky
        ? "bg-black bg-opacity-80 shadow-lg text-white"
        : "bg-transparent text-white";
    } else {
      return isSticky
        ? "bg-black bg-opacity-80 shadow-lg text-white"
        : "bg-white text-black";
    }
  };

  return (
    <header
      className={`  fixed top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 transition-all duration-300 ${getBackgroundStyle()}`}
    >
      <div className="flex justify-between items-center h-24 px-4 py-4 lg:px-10 lg:py-4 border-b-2 border-white">
        <a href="/">
          <div className="flex items-center">
            <img
              src="/springer-logo.png"
              alt="Springer Logo"
              className="h-8 sm:h-10 mr-4"
            />
          </div>
        </a>
        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          <a
            href="/"
            className={`font-body hover:text-[#4ECB38] ${isActive("/")}`}
          >
            Home
          </a>
          <a
            href="/organization"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/organization"
            )}`}
          >
            Organization
          </a>
          <a
            href="/program"
            className={`font-body hover:text-[#4ECB38] ${isActive("/program")}`}
          >
            Program
          </a>
          <a
            href="/calls"
            className={`font-body hover:text-[#4ECB38] ${isActive("/calls")}`}
          >
            Calls
          </a>
          <a
            href="/venue"
            className={`font-body hover:text-[#4ECB38] ${isActive("/venue")}`}
          >
            Venue
          </a>
          <a
            href="/sponsorship"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/sponsorship"
            )}`}
          >
            Sponsorship
          </a>
          <a
            href="/registeration"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/registeration"
            )}`}
          >
            Registeration
          </a>
        </nav>
        {/* Hamburger Icon */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-black bg-opacity-90 absolute w-full top-24 left-0 z-30">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white">
            <li>
              <a
                href="/"
                className={`font-body hover:underline ${isActive("/")}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/organization"
                className={`font-body hover:underline ${isActive(
                  "/organization"
                )}`}
              >
                Organization
              </a>
            </li>
            <li>
              <a
                href="/program"
                className={`font-body hover:underline ${isActive("/program")}`}
              >
                Program
              </a>
            </li>
            <li>
              <a
                href="/calls"
                className={`font-body hover:underline ${isActive("/calls")}`}
              >
                Calls
              </a>
            </li>
            <li>
              <a
                href="/venue"
                className={`font-body hover:underline ${isActive("/venue")}`}
              >
                Venue
              </a>
            </li>
            <li>
              <a
                href="/sponsorship"
                className={`font-body hover:underline ${isActive(
                  "/sponsorship"
                )}`}
              >
                Sponsorship
              </a>
            </li>
            <li>
              <a
                href="/registeration"
                className={`font-body hover:text-[#4ECB38] ${isActive(
                  "/registeration"
                )}`}
              >
                Registeration
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
