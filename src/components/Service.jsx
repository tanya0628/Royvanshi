import "./Hero.css";
import {
  FaBuilding,
  FaHandsHelping,
  FaFileInvoiceDollar,
  FaReceipt,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "For Companies",
    icon: <FaBuilding />,
    items: [
      "Private Limited Company",
      "Public Limited Company",
      "LLP Incorporation",
      "ROC Annual Compliances",
      "DIN Related Filings",
      "Digital Signature (DSC)",
      "Company ITR Filing",
      "Statutory Register",
      "Minutes Book",
      "Accounting & Bookkeeping",
      "Tax Compliances Management",
      "Financial Reporting & Analysis",
    ],
  },

  {
    title: "For NGO's",
    icon: <FaHandsHelping />,
    items: [
      "Society / Trust / Section-8 Company",
      "80G / 12A Registration",
      "CSR & Funding",
      "NITI AAYOG / Darpan ID",
      "E-ANUDAN",
      "Annual Filing",
      "FCRA Registration",
      "Accounting & ITR",
      "NGO Website",
      "Social Media Posting / Promotion",
      "NGO Profile / Annual Report",
    ],
  },

  {
    title: "For ITR (Income Tax Return)",
    icon: <FaFileInvoiceDollar />,
    items: [
      "ITR Filing for Individuals",
      "Business ITR Filing",
      "Salaried Professionals",
      "Freelancers ITR",
      "Belated & Updated ITR",
      "Tax Computation",
      "Capital Gains & Investments",
      "Revised Return & Rectification",
      "Late Fee Penalty Resolution",
      "Rental Income Compliance",
      "AIS / TIS Support",
      "Aadhaar-PAN Linking",
    ],
  },

  {
    title: "For GST (Goods & Service Tax)",
    icon: <FaReceipt />,
    items: [
      "GST Registration",
      "GST Amendments",
      "GST Return Filing (GSTR-1, 3B, 9)",
      "GST Rates & Classification",
      "GST Compliance",
      "GST Audit",
      "GST Accounting",
      "Input Tax Credit (ITC)",
      "GST Notices Support",
      "GST Refund",
      "E-Way Bill Assistance",
    ],
  },

  {
    title: "Other Registration & Consultancy",
    icon: <FaBriefcase />,
    items: [
      "Proprietorship Registration",
      "Partnership Firm Registration",
      "Trademark Registration",
      "ISO Certification",
      "MSME Registration",
      "FSSAI Food License",
      "Import Export Code (IEC)",
      "Startup India Registration",
      "Insurance Consultancy",
      "Loan Documentation",
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section">

      <div className="services-heading">

        <h2>Services We Provide</h2>

        <p>
          Royvanshi Pvt. Ltd. offers innovative digital solutions that help
          startups, businesses and enterprises accelerate their digital
          transformation.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-header">
              <span>{service.icon}</span>
              <h3>{service.title}</h3>
            </div>

            <ul>

              {service.items.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" />
                  {item}
                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

    </section>
  );
}