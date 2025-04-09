import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter, FaTelegramPlane, FaStackOverflow } from "react-icons/fa";

import { motion } from "framer-motion";
import image from "../assets/profile.png"


const Hero = () => {
  return (
    <section className="bg-[#0B1B34] min-h-screen pt-20 md:pt-0 flex items-center justify-center text-white px-6 relative">
      {/* Side Social Icons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-5 text-xl text-gray-300">
        <a href="https://github.com/Aisha-mohamoud" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaGithub /></a>
        <a href="https://linkedin.com/in/aisha-mohamud" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaLinkedinIn /></a>
        {/* <a href="#" className="hover:text-pink-400 transition"><FaStackOverflow /></a>
        <a href="#" className="hover:text-pink-400 transition"><FaTwitter /></a>
        <a href="#" className="hover:text-pink-400 transition"><FaTelegramPlane /></a> */}
        <div className="w-0.5 h-20 bg-white mx-auto mt-4" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-10"
      >
        <div>
          <p className="text-gray-400 text-lg">Hi There</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            I'm{" "}
            <span className="text-pink-500 relative after:content-[''] after:absolute after:inset-0 after:blur-md after:bg-pink-500 after:opacity-30">
              Aisha Mohamud
            </span>
          </h1>
          <h2 className="text-2xl mt-2 font-light">I am a Web Developer</h2>

          <div className="flex gap-4 mt-6">
            <a
              href="/resume.pdf"
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Resume
            </a>
            <Link to="/contactMe" className="bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-200 transition">
  Contact me
</Link>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block">
          <img
            src={image}
            alt="Web Developer"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          
        </div>
      </motion.div>

      {/* Email */}
      <a
        href="mailto:shamowaisha6@gmail.com"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 rotate-90 text-sm text-gray-400 tracking-wider hover:text-pink-400 transition"
      >
        shamowaisha6@gmail.com
      </a>
    </section>
  );
};

export default Hero;
