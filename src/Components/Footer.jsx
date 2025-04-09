import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <hr className="mb-10 border-gray-700" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Personal Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-pink-400">Aisha Mohamud</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Web Developer & Software Engineer — passionate about crafting beautiful and functional digital experiences. Let's build something amazing together.
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Connect with Me</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="mailto:shamowaisha6@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Aisha-mohamoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/Aisha-mohamud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Aisha Mohamud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
