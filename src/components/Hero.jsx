import "./Hero.css";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
 
      <div className="overlay">

        <div className="hero-left">
          <h1>Royvanshi Private Limited</h1>

          <p>
            Welcome to Royvanshi Pvt. Ltd., your trusted partner in
            financial and business consultancy services. With years of
            expertise and a commitment to excellence, we specialize in
            delivering comprehensive solutions for businesses and individuals
            alike.
          </p>

          <div className="testimonial-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />

            <div className="testimonial-content">
              <h3>Avi Singhvi</h3>

              <p>
                Royvanshi Private Limited has been a great support in
                helping us set up our Public Limited Company. Their
                professionalism and expertise made the entire process smooth
                and hassle-free.
              </p>

              <span>client</span>

              <div className="dots">
                <span className="active"></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="form-box">
            <h2>
              Free Consultation By
              <br />
              Expert
            </h2>

            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Mobile*" />
            <input type="email" placeholder="Email*" />

            <button className="submit-btn">
              Submit
            </button>

            <p className="or">Or</p>

            <button className="whatsapp-btn">
              <FaWhatsapp />
              Consult Now
            </button>

            <p className="bottom-text">
              I agree to receive the brochure on
              <br />
              Need to speak to an expert?
            </p>

            <a href="/">Get Free Consultation</a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;