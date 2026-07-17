import "./Hero.css";
import consultant from "../assets/consultant.jpg";
import growth from "../assets/growth-card.jpg";

import {
  FaCheckCircle,
  FaGoogle,
} from "react-icons/fa";

const serviceFeatures = [
  {
    title: "Modern Technology Solutions",
    desc: "We develop modern websites, custom software, mobile applications, and business automation solutions using the latest technologies.",
  },
  {
    title: "Customized for Your Business",
    desc: "Every business is unique. We create tailored digital solutions that perfectly align with your goals and help you stand out from competitors.",
  },
  {
    title: "Reliable Support & Maintenance",
    desc: "Our team provides continuous technical support, security updates, and maintenance to keep your business running smoothly.",
  },
  {
    title: "Growth-Driven Digital Strategy",
    desc: "From SEO and digital marketing to cloud solutions and automation, we help businesses increase visibility, improve efficiency, and achieve long-term growth.",
  },
];

export default function ServicesSection() {
  return (
    <section className="tax-services-section">

      <div className="tax-services-left">

        <h1 className="tax-services-heading">
          Why Choose Royvanshi Pvt. Ltd.?
        </h1>

        <p className="tax-services-description">
          Royvanshi Pvt. Ltd. is a trusted technology partner committed to
          transforming businesses through innovation and digital excellence.
          We specialize in website development, custom software, mobile
          applications, UI/UX design, cloud solutions, digital marketing, and
          business automation. Our expert team combines creativity with
          technology to deliver scalable, secure, and result-driven solutions
          that empower businesses to grow faster in today's competitive digital
          world.
        </p>

        <div className="tax-services-list">
          {serviceFeatures.map((item, index) => (
            <div className="tax-service-item" key={index}>
              <FaCheckCircle className="tax-service-icon" />

              <p className="tax-service-text">
                <strong>{item.title}</strong> — {item.desc}
              </p>
            </div>
          ))}
        </div>

        <button className="tax-services-btn">
          Get Free Consultation
        </button>

      </div>

      <div className="tax-services-right">

        <div className="tax-services-image-box">

          <img
            src={consultant}
            alt="Royvanshi IT Expert"
            className="tax-services-main-image"
          />

          {/* Top Card */}

          <div className="tax-card tax-card-top">
            <h2>250+</h2>
            <p>Projects Successfully Delivered</p>
          </div>

          {/* Middle Card */}

          <div className="tax-card tax-card-middle">

            <img
              src={growth}
              alt="Business Growth"
              className="tax-growth-image"
            />

            <h3>150+</h3>

            <span>Happy Clients Across Multiple Industries</span>

          </div>

          {/* Bottom Card */}

          <div className="tax-card tax-card-bottom">

            <FaGoogle className="tax-google-icon" />

            <div>
              <h4>4.9 / 5</h4>
              <span>Customer Satisfaction Rating</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}