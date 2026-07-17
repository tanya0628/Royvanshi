import "./Hero.css";
import benefitsImg from "../assets/benfits.jpg";

import {
  FaLaptopCode,
  FaUsers,
  FaHeadset,
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

const leftBenefits = [
  {
    icon: <FaLaptopCode />,
    title: "Innovative Technology",
    description:
      "We build modern websites, mobile applications, and custom software using the latest technologies to help businesses stay ahead of the competition.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centric Approach",
    description:
      "Every project is tailored according to your business goals, ensuring scalable, reliable, and user-friendly digital solutions.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Technical Support",
    description:
      "Our dedicated support team is always available to assist with maintenance, updates, security, and technical guidance.",
  },
];

const rightBenefits = [
  {
    icon: <FaRocket />,
    title: "Business Growth",
    description:
      "Our digital strategies, automation, and marketing solutions help businesses increase productivity and maximize growth.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    description:
      "We prioritize data security, performance, and reliability by following modern development standards and best practices.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Solutions",
    description:
      "From UI/UX design to enterprise software, we deliver innovative ideas that transform your vision into reality.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits-wrapper">

      <div className="benefits-container">

        <div className="benefits-header">

          <span className="benefits-subtitle">
            WHY CHOOSE US
          </span>

          <h2 className="benefits-title">
            Why Businesses Trust
            <span> Royvanshi Pvt. Ltd.</span>
          </h2>

          <p className="benefits-description">
            We combine innovation, technology, and creativity to deliver
            high-quality digital solutions that help businesses grow,
            improve efficiency, and achieve long-term success.
          </p>

        </div>

        <div className="benefits-content">

          {/* LEFT */}

          <div className="benefits-left-column">

            {leftBenefits.map((item, index) => (

              <div className="benefit-card left" key={index}>

                <div className="benefit-icon">
                  {item.icon}
                </div>

                <div className="benefit-content">

                  <h3 className="benefit-heading">
                    {item.title}
                  </h3>

                  <p className="benefit-text">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* CENTER IMAGE */}

          <div className="benefits-center-column">

            <img
              src={benefitsImg}
              alt="Royvanshi Benefits"
              className="benefits-center-image"
            />

          </div>

          {/* RIGHT */}

          <div className="benefits-right-column">

            {rightBenefits.map((item, index) => (

              <div className="benefit-card right" key={index}>

                <div className="benefit-icon">
                  {item.icon}
                </div>

                <div className="benefit-content">

                  <h3 className="benefit-heading">
                    {item.title}
                  </h3>

                  <p className="benefit-text">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="benefits-btn-wrapper">

          <button className="benefits-btn">
            Get Free Consultation
          </button>

        </div>

      </div>

    </section>
  );
}