import React from "react";
import "./CompanyServices.css";
import Sidebar from "../components/Sidebar";
import CompanyAccordion from "../components/CompanyAccordion";


function CompaniesServices() {
  return (
    <div className="company-page">

      {/* Hero Section */}
      <section className="company-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Companies Services</h1>

            <div className="breadcrumb">
              <a href="/">Home</a>
              <span> &gt; </span>
              <span>Companies Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Section */}

      <section className="company-image-section">
        <div className="container">

          <div className="company-image">
            <img
              src="/main-content.jpg"
              alt="Company Services"
            />
          </div>

        </div>
      </section>

      {/* Content Section */}

      <div className="company-services">

      <div className="company-container">

        {/* Left Sidebar */}
        <div className="left-section">
          <Sidebar />
        </div>

        {/* Right Content */}
        <div className="right-section">

          <h1 className="page-title">
            For <span>Companies</span>
          </h1>

          <CompanyAccordion />

        </div>

      </div>

    </div>
    </div>
  );
}

export default CompaniesServices;