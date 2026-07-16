import { useEffect, useState } from "react";
import "./Testimonials.css";

import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

import client1 from "../assets/face1.jpg";
import client2 from "../assets/face2.jpg";
import client3 from "../assets/face3.jpg";
import client4 from "../assets/face1.jpg";
import client5 from "../assets/face2.jpg";

const testimonials = [
  {
    image: client1,
    name: "Rahul Sharma",
    company: "RK Industries",
    review:
      "Royvanshi Pvt. Ltd. designed and developed our corporate website beyond our expectations. Their team was professional, creative, and delivered the project before the deadline.",
  },
  {
    image: client2,
    name: "Priya Verma",
    company: "AV Solutions",
    review:
      "Working with Royvanshi was an amazing experience. They built our custom software exactly as we needed and provided excellent post-launch support.",
  },
  {
    image: client3,
    name: "Amit Gupta",
    company: "NextGen Technologies",
    review:
      "From UI/UX to deployment, everything was handled professionally. Their expertise helped us improve our digital presence and customer engagement.",
  },
  {
    image: client4,
    name: "Sneha Kapoor",
    company: "Bright Future Pvt. Ltd.",
    review:
      "The digital marketing strategies implemented by Royvanshi significantly increased our online visibility and generated quality leads for our business.",
  },
  {
    image: client5,
    name: "Vikas Singh",
    company: "Green Build",
    review:
      "Highly recommended! Excellent communication, timely delivery, and outstanding technical expertise. We look forward to working together again.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(slider);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonial-section">

      <div className="testimonial-heading">

        <span>CLIENT TESTIMONIALS</span>

        <h2>
          What Our Clients Say
        </h2>

        <p>
          Trusted by startups, enterprises, and businesses across India for
          delivering innovative digital solutions.
        </p>

      </div>

      <div className="testimonial-slider">

        <button
          className="testimonial-arrow left-arrow"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        <div className="testimonial-card">

          <FaQuoteLeft className="quote-icon" />

          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="client-image"
          />

          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="testimonial-review">
            {testimonials[current].review}
          </p>

          <h3>
            {testimonials[current].name}
          </h3>

          <span className="company">
            {testimonials[current].company}
          </span>

        </div>

        <button
          className="testimonial-arrow right-arrow"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>

      </div>

      <div className="testimonial-dots">

        {testimonials.map((_, index) => (
          <span
            key={index}
            className={
              current === index
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          ></span>
        ))}

      </div>

    </section>
  );
}