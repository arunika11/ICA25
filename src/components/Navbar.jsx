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
  const isActive = (path) =>
    "/ica25" + location.pathname === path ? "text-[#4ECB38]" : "";

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
        <a href="/ica25">
          <div className="flex items-center">
            <img
              src="logofinal.png"
              alt="Springer Logo"
              className="h-8 sm:h-16 mr-4"
            />
          </div>
        </a>
        <nav className="hidden lg:flex space-x-6">
          <a
            href="/ica25"
            className={`font-body hover:text-[#4ECB38] ${isActive("/ica25")}`}
          >
            Home
          </a>
          <a
            href="/ica25/organization"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/ica25/organization"
            )}`}
          >
            Organization
          </a>
          <a
            href="/ica25/program"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/ica25/program"
            )}`}
          >
            Program
          </a>
          <a
            href="/ica25/calls"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/ica25/calls"
            )}`}
          >
            Calls
          </a>
          <a
            href="/ica25/venue"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/ica25/venue"
            )}`}
          >
            Venue
          </a>
          <a
            href="/ica25/sponsorship"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/ica25/sponsorship"
            )}`}
          >
            Sponsorship
          </a>
          <a
            href="/ica25/registeration"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/ica25/registeration"
            )}`}
          >
            Registration
          </a>
          <a
            href="/ica25/gallery"
            className={`font-body hover:text-[#4ECB38] ${isActive(
              "/ica25/gallery"
            )}`}
          >
            Gallery
          </a>
        </nav>
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden bg-black bg-opacity-90 absolute w-full top-24 left-0 z-30">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white">
            <li>
              <a
                href="/ica25"
                className={`font-body hover:underline ${isActive("/ica25")}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/ica25/organization"
                className={`font-body hover:underline ${isActive(
                  "/ica25/organization"
                )}`}
              >
                Organization
              </a>
            </li>
            <li>
              <a
                href="/ica25/program"
                className={`font-body hover:underline ${isActive(
                  "/ica25/program"
                )}`}
              >
                Program
              </a>
            </li>
            <li>
              <a
                href="/ica25/calls"
                className={`font-body hover:underline ${isActive(
                  "/ica25/calls"
                )}`}
              >
                Calls
              </a>
            </li>
            <li>
              <a
                href="/ica25/venue"
                className={`font-body hover:underline ${isActive(
                  "/ica25/venue"
                )}`}
              >
                Venue
              </a>
            </li>
            <li>
              <a
                href="/ica25/sponsorship"
                className={`font-body hover:underline ${isActive(
                  "/ica25/sponsorship"
                )}`}
              >
                Sponsorship
              </a>
            </li>
            <li>
              <a
                href="/ica25/registeration"
                className={`font-body hover:text-[#4ECB38] ${isActive(
                  "/ica25/registeration"
                )}`}
              >
                Registration
              </a>
            </li>
            <li>
              <a
                href="/ica25/gallery"
                className={`font-body hover:text-[#4ECB38] ${isActive(
                  "/ica25/gallery"
                )}`}
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
