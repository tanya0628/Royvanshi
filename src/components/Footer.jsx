import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}

        <div className="footer-box">

          <h2>BusinessPro</h2>

          <p>
            BusinessPro is a professional financial and business consulting
            company helping startups and enterprises grow with innovative,
            reliable, and customized solutions.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@businesspro.com</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>
              221 Business Street,
              <br />
              New Delhi, India
            </span>
          </div>

        </div>

      </div>

      {/* Social Icons */}

      <div className="footer-social">

        <a href="#"><FaFacebookF /></a>

        <a href="#"><FaTwitter /></a>

        <a href="#"><FaInstagram /></a>

        <a href="#"><FaLinkedinIn /></a>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        © 2026 BusinessPro. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;