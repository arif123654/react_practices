import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

// Types
interface FeatureProps {
  index: number;
}

interface TestimonialProps {
  index: number;
}

// Home Page Components
const HeroSection: React.FC = () => (
  <section className="bg-pink-50 py-12">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold text-pink-800 mb-4">Welcome to Our Website</h1>
      <p className="text-gray-700 mb-6">Create the Future of Learning Today!</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-pink-600 text-white px-6 py-2 rounded-full"
      >
        Get Started
      </motion.button>
    </div>
  </section>
);

const FeaturesSection: React.FC = () => (
  <section className="py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <Feature key={index} index={index} />
      ))}
    </div>
  </section>
);

const Feature: React.FC<FeatureProps> = ({ index }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg text-center"
    whileHover={{ y: -10 }}
  >
    <h3 className="text-xl font-bold mb-2">Feature {index + 1}</h3>
    <p className="text-gray-600">Description for feature {index + 1}</p>
  </motion.div>
);

const TestimonialsSection: React.FC = () => (
  <section className="bg-pink-100 py-12">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Testimonial key={index} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const Testimonial: React.FC<TestimonialProps> = ({ index }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
  >
    <p className="text-gray-700 mb-4">"Testimonial {index + 1}"</p>
    <p className="text-pink-800 font-bold">Person {index + 1}</p>
  </motion.div>
);

const Footer: React.FC = () => (
  <footer className="bg-blue-900 text-white py-6 w-full bottom-0">
    <div className="container mx-auto text-center">
      <p>&copy; 2025 Our Website. All rights reserved.</p>
    </div>
  </footer>
);

// Pages
const HomePage: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <div className="flex-grow">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  </div>
);

const ContactPage: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <div className="flex-grow">
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full mb-4 p-2 border rounded h-32"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-pink-600 text-white px-6 py-2 rounded-full w-full"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  </div>
);

const SingleComponent: React.FC = () => {
  return (
    <Router>
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-pink-800 text-2xl font-bold">Logo</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-700 hover:text-pink-800">Home</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-pink-800">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default SingleComponent;
