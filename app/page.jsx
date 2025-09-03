// <--- must be first line
"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function SinglePagePortfolio() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#232336] via-[#18181B] to-[#2D2A4A]">
      {/* ================= HEADER SECTION ================= */}
      {/* ================= HEADER SECTION ================= */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-[#2A283D]/10 backdrop-blur-xl rounded-full shadow-lg z-50">
        <nav className="flex items-center justify-between px-6 py-3">
          {/* === LOGO SECTION === */}
          <div className="flex items-center gap-2">
            <Image
              src="/profile/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="text-lg font-bold text-white">Mohitt.</span>
          </div>

          {/* === NAVIGATION LINKS === */}
          <div className="flex gap-10">
            <a
              href="#about"
              className="text-[#B6B6D6] font-medium hover:text-[#A7B8FF] transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-[#B6B6D6] font-medium hover:text-[#A7B8FF] transition"
            >
              Projects
            </a>
            <a
              href="#blog"
              className="text-[#B6B6D6] font-medium hover:text-[#A7B8FF] transition"
            >
              Blog
            </a>
          </div>

          {/* === RIGHT SIDE (OPTIONAL SOCIAL ICONS) === */}
          <div className="flex items-center gap-4">
            {/* Example icons */}
            {/* <a href="https://github.com" target="_blank">
              <svg className="w-5 h-5 text-[#B6B6D6] hover:text-[#A7B8FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="..."/>
              </svg>
            </a> */}
          </div>
        </nav>
      </header>

      {/* ================= ANIMATED BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E2E] via-[#232336] to-[#2D2A4A] animate-backgroundGradient"></div>
        {/* Floating Glowing Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="  absolute w-72 h-72 rounded-full bg-[#A7B8FF]/40 blur-3xl animate-floatGlow top-16 left-10"></div>
          <div className="absolute w-96 h-96 rounded-full bg-[#F3F4F6]/20 blur-3xl animate-floatGlow bottom-16 right-20"></div>
          <div className="absolute w-64 h-64 rounded-full bg-[#9B77FF]/30 blur-3xl animate-floatGlow top-1/3 right-1/4"></div>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className=" pt-37 h-screen relative z-10 flex flex-col md:flex-row items-start justify-center gap-12 px-8 w-full max-w-6xl mx-auto py-16"
      >
        {/* Left: Hero Text */}
        <div className="flex-1 pt-8">
          <span className="inline-block bg-[#2D2A4A] text-[#A7B8FF] px-4 py-1 rounded-full text-xs font-semibold mb-6">
            AVAILABLE FOR WORK
          </span>
          <h1 className="text-6xl font-extrabold mb-4 leading-tight text-[#F3F4F6]">
            Hi, I’m Mohit Bhargava
            <br />
            <span className="text-3xl font-bold text-[#A7B8FF]">
              Full-Stack Developer & Gen AI Explorer
            </span>
          </h1>
          <p className="text-[#B6B6D6] mb-8 max-w-md text-lg">
            I’m passionate about creating modern web apps and exploring
            AI-powered solutions.
          </p>
          <Link
            href="#contact"
            scroll={true}
            className="inline-block bg-[#A7B8FF] text-[#232336] px-8 py-3 rounded-full font-bold shadow hover:bg-[#B6A7FF] transition text-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Right: Hero Image / Cards */}
        <div className=" flex flex-col gap-6 items-center pt-9">
          <div className="flex gap-6 w-full">
            <div className="bg-[#232336] rounded-2xl shadow-lg p-6 flex-1 flex items-center justify-center min-w-[220px]">
              <Image
                src="/profile/profilephoto.jpg"
                alt="Profile"
                width={360}
                height={360}
                className="rounded-2xl object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-500      "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="    relative z-10 flex flex-col md:flex-row w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl bg-[#2A283D]/90 backdrop-blur-lg mx-auto my-20"
      >
        {/* Left: Profile Headshot */}
        <div className="   w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#A7B8FF]/30 to-[#F3F4F6]/20 shadow-2xl flex items-center justify-center animate-float hover:scale-105 transition-transform duration-500">
            <img
              src="/profile/head.jpg.jpg"
              alt="Profile Headshot"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#3B3A5A] shadow-lg"
            />
          </div>
        </div>

        {/* Right: About Content */}
        <div className="  pt- 32 w-full md:w-1/2 px-8 md:px-12 py-10 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold text-[#F3F4F6] mb-2 tracking-tight fade-in-section">
            About Me
          </h2>
          <p className="text-[#B6B6D6] text-base md:text-lg leading-relaxed fade-in-section">
            <span className="font-bold text-[#A7B8FF]">Mohit Bhargava</span> —
            Full-Stack Developer & Gen AI Explorer based in Gwalior, Madhya
            Pradesh, India.
          </p>
          <p className="text-[#B6B6D6] text-base md:text-lg leading-relaxed fade-in-section">
            I create modern, scalable web applications and AI-powered solutions
            for startups and brands. My focus is on building products that are
            innovative, intuitive, and impactful.
          </p>

          {/* Skills & Experience */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="fade-in-section flex-1 bg-[#232336]/90 backdrop-blur-lg p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#A7B8FF] mb-3">Skills</h3>
              <ul className="list-disc pl-5 text-[#B6B6D6] space-y-1 text-sm md:text-base">
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>Tailwind CSS</li>
                <li>Generative AI</li>
              </ul>
            </div>

            <div className="fade-in-section flex-1 bg-[#232336]/90 backdrop-blur-lg p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#A7B8FF] mb-3">
                Experience
              </h3>
              <ul className="list-disc pl-5 text-[#B6B6D6] space-y-1 text-sm md:text-base">
                <li>5+ years freelance developer</li>
                <li>AI solution architect</li>
                <li>Open-source contributor</li>
              </ul>
            </div>
          </div>

          <div className="fade-in-section bg-[#232336]/90 backdrop-blur-lg p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-bold text-[#A7B8FF] mb-3">
              What Drives Me
            </h3>
            <ul className="list-disc pl-5 text-[#B6B6D6] space-y-1 text-sm md:text-base">
              <li>Solving real-world problems</li>
              <li>Designing seamless user experiences</li>
              <li>Learning & sharing new tech</li>
              <li>Collaborating with creative teams</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section
        id="projects"
        className="relative z-10 min-h-screen py-20 px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#F3F4F6] mb-3">
            My Projects
          </h2>
          <p className="text-[#B6B6D6] mb-12">Some of my distinguished works</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {[
              {
                title: "Library Management System",
                category: "Web App Development",
                description:
                  "A system to manage books, users, and transactions with secure authentication and role-based access.",
                technologies: ["React", "Node.js", "Express", "MongoDB"],
              },
              {
                title: "Weather Forecasting App",
                category: "Web App Development",
                description:
                  "Provides real-time and forecast weather updates using API integration and responsive UI.",
                technologies: ["React", "OpenWeather API", "Tailwind CSS"],
              },
              {
                title: "AI Content Generator",
                category: "Generative AI",
                description:
                  "A web app that generates blogs, product descriptions, and social media posts using LLMs with fine-tuned prompts.",
                technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
              },
              {
                title: "Image-to-Art Generator",
                category: "Generative AI",
                description:
                  "Transforms uploaded photos into artistic styles (cartoon, oil painting, sketch) using diffusion models.",
                technologies: [
                  "Python",
                  "Hugging Face Diffusers",
                  "Flask",
                  "React",
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="relative bg-[#2A283D]/90 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 p-6 flex flex-col"
              >
                {/* Accent top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A7B8FF] to-[#6C63FF] rounded-t-2xl"></div>

                {/* Project Category */}
                <p className="text-xs font-medium text-[#A7B8FF] uppercase tracking-wide mb-2 mt-2">
                  {project.category}
                </p>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-[#F3F4F6] mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#B6B6D6] text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-[#F3F4F6] bg-[#1F1D2E] rounded-full border border-[#3E3C52] hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
      {/* ================= BLOG SECTION ================= */}
      <section id="blog" className="relative z-10 py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#F3F4F6] mb-3">Blog</h2>
          <p className="text-[#B6B6D6] mb-12 max-w-2xl mx-auto">
            I love sharing my learnings and experiences about Web Development,
            AI, DSA, and DevOps. Here are some of my recent writings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "How I Built My Portfolio with Next.js",
                description:
                  "A step-by-step guide to creating a modern portfolio using Next.js, Tailwind CSS, and Framer Motion.",
                link: "#",
              },
              {
                id: 2,
                title: "Why DSA is Important for Developers",
                description:
                  "Sharing my journey of solving 200+ DSA problems and how it shaped my problem-solving skills.",
                link: "#",
              },
              {
                id: 3,
                title: "Generative AI: The Future of Tech",
                description:
                  "Explaining foundation models, diffusion, and how GenAI is changing industries.",
                link: "#",
              },
              {
                id: 4,
                title: "Beginner’s Roadmap to DevOps",
                description:
                  "Step-by-step guide for students who want to become DevOps Engineers.",
                link: "#",
              },
              {
                id: 5,
                title: "My First Hackathon Experience",
                description:
                  "How I built an NFT Fan Badge Generator dApp in a hackathon and what I learned.",
                link: "#",
              },
            ].map((blog) => (
              <div
                key={blog.id}
                className="bg-[#2A283D]/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-500 text-left"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#F3F4F6]">
                  {blog.title}
                </h3>
                <p className="text-[#B6B6D6] mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-[#A7B8FF] font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer
        id="contact"
        className="w-full bg-[#2A283D] py-8 mt-20 border-t border-gray-700 relative z-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
          <p className="text-gray-300 text-lg font-medium">Connect with me</p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/mohit1705-bhargava"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-blue-600 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://instagram.com/mohitbhargava1705"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-pink-600 transition"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="mailto:mohitbhargava1705@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-green-600 transition"
            >
              <FaEnvelope size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/mohit-bhargava-b6b6a52a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-blue-500 transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </footer>

      {/* ================= ANIMATION STYLES ================= */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes backgroundGradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 250%;
          }
        }
        @keyframes glowFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.1;
            background-color: rgba(167, 184, 255, 0.3);
          }
          25% {
            transform: translateY(-10px) scale(1.05);
            opacity: 0.5;
            background-color: rgba(183, 182, 246, 0.35);
          }
          50% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
            background-color: rgba(167, 184, 255, 0.3);
          }
          75% {
            transform: translateY(10px) scale(1.05);
            opacity: 0.4;
            background-color: rgba(183, 182, 246, 0.3);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-backgroundGradient {
          background-size: 600% 200%;
          animation: backgroundGradient 28s ease infinite;
        }
        .animate-floatGlow {
          animation: glowFloat 14s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
