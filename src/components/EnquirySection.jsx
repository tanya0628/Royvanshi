import "./Hero.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function EnquirySection() {
  return (
    <section className="enquiry-section">

      <div className="enquiry-left">

        <span className="enquiry-tag">
          Let's Build Something Great Together
        </span>

        <h2>
          Start Your Digital Journey with
          <span> Royvanshi Pvt. Ltd.</span>
        </h2>

        <p>
          Whether you're launching a startup, expanding your business,
          or looking for innovative IT solutions, our experienced team is
          here to help. We provide end-to-end services including website
          development, software solutions, mobile apps, branding, and
          digital marketing.
        </p>

        <div className="contact-box">

          <div className="contact-item">
            <FaPhoneAlt />
            <div>
              <h4>Call Us</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>info@royvanshi.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Office</h4>
              <p>Greater Noida, Uttar Pradesh</p>
            </div>
          </div>

        </div>

      </div>

      <div className="enquiry-right">

        <form>

          <h3>Request Free Consultation</h3>

          <input
            type="text"
            placeholder="Your Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <select>
            <option>Select Service</option>
            <option>Website Development</option>
            <option>Software Development</option>
            <option>Mobile App Development</option>
            <option>Digital Marketing</option>
            <option>Graphic Designing</option>
            <option>Cloud Solutions</option>
          </select>

          <textarea
            rows="5"
            placeholder="Tell us about your project..."
          ></textarea>

          <button type="submit">
            Submit Enquiry
            <FaArrowRight />
          </button>

        </form>

      </div>

    </section>
  );
}