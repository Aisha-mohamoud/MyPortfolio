import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Contact = () => {
  return (
    <section className="bg-[#0B1B34] text-white py-20 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-pink-500">Contact Me</h2>
        <p className="text-gray-300 mb-10">
          Have a project in mind? Let’s talk and build something amazing together.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-pink-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        {/* 👇 Back to Profile Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            ← Back to Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
