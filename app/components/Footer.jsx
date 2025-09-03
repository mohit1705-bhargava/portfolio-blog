"use client";

import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#232336] py-12 mt-20 border-t border-[#3E3C52] relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        <p className="text-[#B6B6D6] text-lg font-medium">Connect with me</p>

        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F1D2E] text-white hover:bg-[#A7B8FF] hover:text-[#232336] transition"
          >
            <FaGithub size={22} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F1D2E] text-white hover:bg-pink-500 transition"
          >
            <FaInstagram size={22} />
          </a>

          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F1D2E] text-white hover:bg-red-500 transition"
          >
            <FaEnvelope size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F1D2E] text-white hover:bg-blue-600 transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
