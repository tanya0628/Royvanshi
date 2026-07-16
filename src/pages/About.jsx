import "./About.css";
import { FaCheckSquare } from "react-icons/fa";
import AboutSection from "../components/AboutSection";
import WhyUs from "../components/WhyUs";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";


function About() {
  return (
    <>
      {/* Banner Section */}
      <section className="about-banner">
        <div className="overlay1">
          <div className="banner-content">
            <h1>About Us</h1>
            <p>Home &gt; About Us</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
  <div className="about-container">

          {/* Left Image */}
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700"
              alt="Business Man"
            />
          </div>

          {/* Right Content */}
          <div className="about-content">
            <span className="section-tag">About Us</span>

            <p className="about-text">
              Welcome to Royvanshi Pvt. Ltd, your trusted partner in
              financial and business consultancy services. With years of
              expertise and a commitment to excellence, we specialize in
              delivering comprehensive solutions for businesses and individuals
              alike.
            </p>

            <div className="feature">
              <div className="icon-box">
                <FaCheckSquare />
                <span>01</span>
              </div>

              <div>
                <h3>Our Mission</h3>
                <p>
                  Simplifying financial complexity and helping clients achieve
                  sustainable growth and success.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="icon-box">
                <FaCheckSquare />
                <span>02</span>
              </div>

              <div>
                <h3>Our Vision</h3>
                <p>
                  To become a leading consultancy firm recognized for
                  excellence, integrity and client satisfaction.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="icon-box">
                <FaCheckSquare />
                <span>03</span>
              </div>

              <div>
                <h3>Our Goal</h3>
                <p>
                  Deliver innovative and practical business solutions that
                  create long-term value for our clients.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
         
      <AboutSection />
      <WhyUs />
      <TeamSection />
      <Footer />
    </>
  );
}



export default About;