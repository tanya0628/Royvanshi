import { useState } from "react";
import "./Hero.css";

import growth from "../assets/growth.jpg";
import tax from "../assets/tax.jpg";
import registration from "../assets/registration.jpg";
import compliance from "../assets/compliance.jpg";
import consulting from "../assets/consulting.jpg";
import podcast from "../assets/podcast.jpg";

const data = [
  {
    title: "Tax Filing and Compliance",
    icon: tax,
    content:
      "Accurate tax filing services for individuals and businesses while ensuring complete legal compliance."
  },
  {
    title: "Business Registration and Entity Formation",
    icon: registration,
    content:
      "Company registration, LLP, GST, MSME, Startup India and all statutory registrations."
  },
  {
    title: "Ongoing Compliance Services",
    icon: compliance,
    content:
      "Annual filing, ROC compliance, GST return filing and bookkeeping."
  },
  {
    title: "Consulting for Business Growth",
    icon: consulting,
    content:
      "Professional advisory services to help businesses grow efficiently."
  }
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section className="experience">

      <div className="video-side">

        <video controls>
          <source src={podcast} type="video/mp4" />
        </video>

      </div>

      <div className="content-side">

        <h1>
          We Have More Than <span>20 Years</span> Of Practical Experience In
          Taxation & Registration Services
        </h1>

        <p>
          With over 20 years of practical experience in taxation and
          registration services, our firm has become a trusted name in helping
          individuals, businesses, and organizations navigate complex tax
          compliance and legal registration processes.
        </p>

        <div className="bottom">

          <div className="accordion">

            {data.map((item, index) => (
              <div key={index} className="item">

                <button
                  className="accordion-btn"
                  onClick={() =>
                    setActive(active === index ? -1 : index)
                  }
                >
                  <div className="left">

                    <img src={item.icon} alt="" />

                    <span>{item.title}</span>

                  </div>

                  <span>{active === index ? "-" : "+"}</span>

                </button>

                {active === index && (
                  <div className="content">
                    {item.content}
                  </div>
                )}
              </div>
            ))}

          </div>

          <div className="image">

            <img src={growth} alt="" />

          </div>

        </div>

      </div>

    </section>
  );
}