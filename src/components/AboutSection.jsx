
import "./AboutSection.css";
import {
  FaPlay,
  FaProjectDiagram,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaFileInvoiceDollar,
  FaBriefcase,
  FaChartPie,
} from "react-icons/fa";

function AboutSection() {
  return (
    <section className="about-wrapper">

      {/*================ TOP VIDEO SECTION ================*/}

      <div className="video-area">

        <div className="video-content">

          <div className="video-left">
            <span>Exclusive Video Presentation</span>
            <h2>About</h2>
          </div>

          <div className="video-right">
            <a href="/" className="play-btn">
              <FaPlay />
            </a>
          </div>

        </div>
      </div>

      {/*================ COUNTER CARD ================*/}

      <div className="counter-card">

        <div className="counter-box">
          <FaProjectDiagram />
          <h3>628+</h3>
          <p>Successful Projects</p>
        </div>

        <div className="counter-box">
          <FaChartLine />
          <h3>1679+</h3>
          <p>Monthly Visitors</p>
        </div>

        <div className="counter-box">
          <FaUsers />
          <h3>1000+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="counter-box">
          <FaHandshake />
          <h3>528+</h3>
          <p>Number Of Clients</p>
        </div>

      </div>

      {/*================ BOTTOM CONTENT ================*/}

      <div className="about-bottom">

        {/* LEFT IMAGE */}

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt=""
          />

          <div className="experience-box">
            <h3>We Have More Than 20 Years Of Practical Experience</h3>
          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="about-text">

          <span>What We Offer</span>

          <h2>
            Professional Financial &
            <br />
            Business Consultancy
          </h2>

          <p>
            You can get in touch with us for any requirements regarding
            taxation, accounting, GST filing, business registration,
            financial advisory and much more.
          </p>

          {/* Service */}

          <div className="service-item">

            <div className="service-icon">
              <FaFileInvoiceDollar />
            </div>

            <div>
              <h4>Taxation Services</h4>

              <p>
                Comprehensive tax planning, filing and advisory
                services for individuals and businesses.
              </p>
            </div>

          </div>

          {/* Service */}

          <div className="service-item">

            <div className="service-icon">
              <FaBriefcase />
            </div>

            <div>
              <h4>Business Solutions</h4>

              <p>
                Expert guidance in company formation, strategy
                development and business growth.
              </p>
            </div>

          </div>

          {/* Service */}

          <div className="service-item">

            <div className="service-icon">
              <FaChartPie />
            </div>

            <div>
              <h4>Financial Advisory</h4>

              <p>
                Personalized investment and financial planning
                solutions for a secure future.
              </p>
            </div>

          </div>

          <button className="learn-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;