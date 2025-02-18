import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; // Your profile photo
import aboutBg from "../assets/about-bg.jpg"; // Your background image
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Icons

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-8"
      style={{
        backgroundImage: `url(${aboutBg})`, // Set background image
        backgroundSize: "cover", // Cover the entire section
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent repeating
      }}
    >
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center relative z-10">
        <motion.img
          src={profile}
          alt="Profile"
          className="w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"
          whileHover={{ scale: 1.1 }}
        />
        <div className="text-white"> {/* Ensure text is visible on the background */}
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            I'm Sumit Kadam, a Software Engineer passionate about Web Development, AI, and Data Science. I specialize in building scalable applications, optimizing algorithms, and deploying ML models. Skilled in Python, Java, React.js, and databases, I focus on creating efficient and user-friendly solutions. Let's build something great! 🚀
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="mailto:pratikkadam453@gmail.com" // Replace with your email
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-200"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Sumit-Kadam-07" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-all duration-200"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumitkadam07/" // Replace with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-all duration-200"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/+919511859430" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition-all duration-200"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;