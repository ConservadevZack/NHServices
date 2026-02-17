import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import NHServicesLogo from "../../images/logos/nhservices-logo.png";
import EquipmentDropdown from "./EquipmentDropdown";

const menuItems = ["About Us", "Services", "Testimonials", "Service Area"];

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navbarRef]);

  return (
    <Navbar ref={navbarRef} maxWidth="full">
      <NavbarContent>
        <NavbarBrand>
          <Link to="/" className="nav-link">
            <img
              src={NHServicesLogo}
              alt="NH Services"
              className="h-8 w-auto"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label="Toggle menu"
        className="sm:hidden"
        onClick={toggleMenu}
      />

      <NavbarMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        className="w-3/4 sm:w-auto"
      >
        <div className="flex flex-col items-start">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                to={`/#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="w-full text-lg nav-link"
                onClick={closeMenu}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
          <EquipmentDropdown />
          <Link
            to="/gallery"
            className="w-full text-lg nav-link"
            onClick={closeMenu}
          >
            Gallery
          </Link>
        </div>
      </NavbarMenu>

      <NavbarContent className="hidden sm:flex gap-4 justify-center items-center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              to={`/#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="nav-link"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
        <EquipmentDropdown />
        <Link to="/gallery" className="w-full text-md nav-link">
          Gallery
        </Link>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-md text-center">
              Call for a <span className="underline font-bold">FREE</span>{" "}
              estimate:
            </span>
            <a href="tel:13039051470" className="nav-link">
              <span className="text-lg font-bold text-gradient">
                (303) 905-1470
              </span>
            </a>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
