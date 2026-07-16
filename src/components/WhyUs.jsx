import "./AboutSection.css";
import {
  FaFileInvoiceDollar,
  FaUsers,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";

function WhyUs() {
  return (
    <section className="why-us">

      {/* ================= Banner ================= */}

      <div className="quote-banner">

        <div className="quote-overlay">

          <div className="quote-content">

            <h2>
              There is only one boss. The customer. And he can fire everybody
              in the company from the chairman down, simply by spending his
              money somewhere else.
            </h2>

            <h4>(FOUNDER)</h4>

            <button>Get In Touch</button>

          </div>

        </div>

      </div>

      {/* ================= Content ================= */}

      <div className="why-container">

        {/* Left Image */}

        <div className="why-image">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Office"
          />

        </div>

        {/* Right Content */}

        <div className="why-content">

          <span>Why Us ?</span>

          <p>
            Whether you are an individual, small business, or large enterprise,
            we are pleased to walk with you in the journey to financial success.
            Let's walk with you to navigate the hurdles and achieve everything
            you want to.
          </p>

          {/* Feature */}

          <div className="why-item">

            <div className="why-icon">
              <FaFileInvoiceDollar />
            </div>

            <div>
              <h3>Expertise</h3>
              <p>
                A team of experienced professionals with deep industry
                knowledge.
              </p>
            </div>

          </div>

          {/* Feature */}

          <div className="why-item">

            <div className="why-icon">
              <FaUsers />
            </div>

            <div>
              <h3>Customer-Centric Approach</h3>
              <p>
                We are focused on your goals and design solutions to meet them.
              </p>
            </div>

          </div>

          {/* Feature */}

          <div className="why-item">

            <div className="why-icon">
              <FaProjectDiagram />
            </div>

            <div>
              <h3>Integrity And Transparency</h3>
              <p>
                Building trust through honest and ethical business practices.
              </p>
            </div>

          </div>

          {/* Feature */}

          <div className="why-item">

            <div className="why-icon">
              <FaChartLine />
            </div>

            <div>
              <h3>Innovative Solutions</h3>
              <p>
                Keeping ahead with modern tools and business strategies.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyUs;