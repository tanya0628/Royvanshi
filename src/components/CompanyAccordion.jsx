import React, { useState } from "react";
import "../pages/CompanyServices.css";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const services = [
  {
    title: "Private Limited Company",
    content:
      "Private Limited Company Registration with complete MCA documentation, DSC, DIN, PAN, TAN and incorporation support.",
  },
  {
    title: "Public Limited Company",
    content:
      "Registration and compliance services for Public Limited Companies with expert legal guidance.",
  },
  {
    title: "LLP Incorporation",
    content:
      "Limited Liability Partnership registration including LLP Agreement, PAN, TAN and ROC filing.",
  },
  {
    title: "ROC Annual Compliances",
    content:
      "Annual ROC filing, board resolutions, financial statement filing and statutory compliances.",
  },
  {
    title: "DIN Related Filings",
    content:
      "DIN allotment, KYC filing, modifications and related MCA services.",
  },
  {
    title: "Digital Signature",
    content:
      "Class-3 Digital Signature Certificate (DSC) registration and renewal services.",
  },
  {
    title: "Company ITR Filing",
    content:
      "Corporate Income Tax Return filing with expert tax planning and compliance.",
  },
  {
    title: "Statutory Register",
    content:
      "Preparation and maintenance of statutory registers as per Companies Act.",
  },
  {
    title: "Minutes Book",
    content:
      "Preparation and maintenance of Board Meeting and AGM Minutes Books.",
  },
  {
    title: "Accounting And Bookkeeping",
    content:
      "Professional bookkeeping, accounting, GST accounting and financial reporting.",
  },
  {
    title: "Tax Compliances Management",
    content:
      "Complete tax compliance management including GST, TDS, Income Tax and ROC.",
  },
];

function CompanyAccordion() {
  const [active, setActive] = useState(null);

  const toggleAccordion = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <div className="accordion">

      {services.map((item, index) => (

        <div className="accordion-item" key={index}>

          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >

            <span>
              {active === index ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </span>

            <h3>{item.title}</h3>

          </div>

          {active === index && (
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          )}

        </div>

      ))}

    </div>
  );
}

export default CompanyAccordion;