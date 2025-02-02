import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./logo.png";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo">
            <img
              className="logo-img"
              src={logo} // Replace with your logo URL
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#home" className="menu-item">Home</a>
            <a href="#about" className="menu-item"  >About Us</a>
            <a href="#services" className="menu-item">Services</a>
          </div>
            <a href="#contact" className="Contact-item">Contact Me</a>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-menu-item">Home</a>
          <a href="#about" className="mobile-menu-item">About Us</a>
          <a href="#services" className="mobile-menu-item">Services</a>
          <a href="#contact" className="mobile-menu-item">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
