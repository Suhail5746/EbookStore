import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // Make sure to create this CSS file with the provided styles

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          About <span className="text-pink-500"> Us</span>
        </h1>
        <p className="mt-12">
          We are a dedicated team committed to providing the best services and experiences for our customers. Our mission is to deliver high-quality products and exceptional customer service.
        </p>
      </div>
      <div className="about-container mt-12">
        <h2>Our Story</h2>
        <p>
          Our journey began in 2020 with a vision to revolutionize the industry. Since then, we have grown significantly, thanks to our loyal customers and passionate team. We strive to innovate and improve continuously to meet the evolving needs of our clients.
        </p>
        <h2>Our Values</h2>
        <p>
          We believe in integrity, transparency, and excellence. Our core values guide our actions and decisions, ensuring we maintain the highest standards in everything we do. We are committed to making a positive impact on our community and the environment.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
