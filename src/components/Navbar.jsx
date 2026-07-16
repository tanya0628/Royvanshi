import "./Hero.css";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h2>Royvanshi Pvt. Ltd.</h2>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/about">About Us</a>
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span>
            Services <FaChevronDown />
          </span>

          <ul className={dropdown ? "dropdown-menu show" : "dropdown-menu"}>
            <li>
              <a href="/">Income Tax</a>
            </li>

            <li>
              <a href="/">GST Registration</a>
            </li>

            <li>
              <a href="/">Accounting Services</a>
            </li>

            <li>
              <a href="/">Company Registration</a>
            </li>

            <li>
              <a href="/">Trademark Registration</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/team">Our Team</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;