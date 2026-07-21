import React from "react";
import "../pages/CompanyServices.css";
import { FaChevronRight, FaRegClock } from "react-icons/fa";

const services = [
  "For Companies Services",
  "For NGO Services",
  "For ITR (Income Tax Return)",
  "For GST (Goods & Service Tax)",
  "For Miscellaneous Registration",
];

const posts = [
  {
    image: "/hero-banner.jpg",
    title: "Simplify Tax Filing with Agarwal Taxcon Experts",
    date: "06-Feb-2025",
  },
  {
    image: "/main-content.jpg",
    title: "Maximize Your Business Growth with Expert Tax Solutions",
    date: "07-Feb-2025",
  },
  {
    image: "/benfits.jpg",
    title: "Navigate Taxation & Compliance with Confidence",
    date: "08-Feb-2025",
  },
];

function Sidebar() {
  return (
    <div className="sidebar">

      {/* Services */}

      <div className="sidebar-card">
        <h2>Our Services</h2>

        <div className="service-list">
          {services.map((service, index) => (
            <button
              key={index}
              className={index === 0 ? "service-btn active" : "service-btn"}
            >
              <FaChevronRight />
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Latest Posts */}

      <div className="sidebar-card latest-posts">

        <h2>Latest Post</h2>

        {posts.map((post, index) => (
          <div className="post-item" key={index}>

            <img src={post.image} alt={post.title} />

            <div>

              <h4>{post.title}</h4>

              <p>
                <FaRegClock />
                {post.date}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Sidebar;