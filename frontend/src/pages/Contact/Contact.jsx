import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Get in touch for feedback,
            suggestions or project collaboration.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section container">

        {/* Left */}
        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-card">
            <span>📍</span>
            <div>
              <h3>Address</h3>
              <p>India Temple Heritage Portal, India</p>
            </div>
          </div>

          <div className="info-card">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>saurav@templeheritage.in</p>
            </div>
          </div>

          <div className="info-card">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 8307106647</p>
            </div>
          </div>

          <div className="social-icons">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              🐙
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              💼
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              🐦
            </a>

            <a
              href="mailto:saurav@templeheritage.in"
            >
              ✉️
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="contact-form-box">

          <h2>Send Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Google Map */}

      <section className="map-section">

        <iframe
          title="India Map"
          src="https://www.google.com/maps?q=India&output=embed"
          loading="lazy"
        ></iframe>

      </section>

    </div>
  );
};

export default Contact;