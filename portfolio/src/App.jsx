import React from "react";
import "./index.css"; // ✅ important: includes Tailwind directives
import { motion } from "framer-motion";

function App() {
  const skills = [
    "C++", "C", "Python", "HTML", "CSS", "JavaScript", "React.js",
    "GitHub", "VS Code", "C++ STL", "Problem Solving" 
  ];

  const projects = [
    {
      title: "SMARTCANTEEN",
      description: "Canteen management system with online menu display, order placement, and tracking.",
      technologies: "React.js, Bootstrap, Node.js, MongoDB/Firebase"
    },
    {
      title: "ONLINE QUIZ APPLICATION",
      description: "Web-based quiz system with question management, score tracking, and result display.",
      technologies: "React.js, Bootstrap, Node.js, MongoDB"
    }
  ];

  const platforms = [
    { name: "GitHub", link: "https://github.com/AditiVpatil" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/aditi-patil293849332/" },
    { name: "LeetCode", link: "https://leetcode.com/u/AditiVpatil" },
    { name: "CodeChef", link: "https://www.codechef.com/users/aditipatil1234" },
    { name: "AtCoder", link: "https://atcoder.jp/users/Aditi_Patil" }
  ];

  const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-gray-900 text-gray-200 min-h-screen relative">

      {/* Floating Navigation */}
      <nav className="fixed top-1/2 -translate-y-1/2 right-4 bg-gray-800 rounded-lg shadow-lg p-4 z-50 flex flex-col space-y-4">
        {["about", "skills", "projects", "cp", "resume", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            className="text-green-400 hover:text-green-300 transition font-semibold"
          >
            {section.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Header */}
      <header className="bg-gray-800 py-8 shadow-md sticky top-0 z-40">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold font-bold text-'#9d4edd hover:text-blue-400 transition cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Aditi Patil
          </motion.h1>
          <motion.p className="text-xl mt-2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Empowering communities through technology
          </motion.p>
        </div>
      </header>

      {/* About */}
      <motion.section id="about" className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.img 
          src="/profile.jpg"  // ✅ reference from public folder
          alt="Aditi Patil" 
          className="w-48 h-48 rounded-full mx-auto md:mx-0 border-4 border-green-400 shadow-lg"
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
        <div className="md:ml-10 mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4 text-green-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Motivated second-year BTech student at KIT College of Engineering, Kolhapur. 
            Strong foundation in problem-solving and competitive programming. 
            Passionate about using technology for social good and building impactful projects.
          </p>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section id="skills" className="bg-gray-800 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center text-green-400">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} className="bg-gray-700 hover:bg-green-600 transition rounded-lg p-5 text-center shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" className="container mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center text-green-400">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500 transition cursor-pointer"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-green-300">{project.title}</h3>
              <p className="mb-2 text-gray-300">{project.description}</p>
              <p className="text-gray-400 font-semibold">Technologies: {project.technologies}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Competitive Programming */}
      <motion.section id="cp" className="bg-gray-800 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center text-green-400">Competitive Programming</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <motion.a 
                key={index} 
                href={platform.link} 
                target="_blank" 
                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-green-600 transition text-center text-xl font-semibold cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {platform.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Resume */}
      <motion.section 
        id="resume" 
        className="container mx-auto px-4 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 text-green-400">Resume</h2>
        <motion.a 
          href="/AditiPatil_Resume.pdf"  // ✅ reference from public folder
          download 
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-500 transition text-lg"
          whileHover={{ scale: 1.05 }}
        >
          Download Resume
        </motion.a>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" className="bg-gray-800 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-green-400">Contact</h2>
          <p>Email: <a href="mailto:patiladiti2206@gmail.com" className="text-green-300 hover:underline">patiladiti2206@gmail.com</a></p>
          <p>Phone: <a href="tel:7666409734" className="text-green-300 hover:underline">7666409734</a></p>
          <p>Location: Pune, Maharashtra</p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <p>&copy; 2025 Aditi Patil. All Rights Reserved.</p>
        <p>
          <a href="https://jamunafoundation.org/" target="_blank" className="text-green-400 hover:underline">
            Jamuna Foundation
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
