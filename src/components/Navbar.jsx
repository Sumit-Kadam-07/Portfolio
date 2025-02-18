import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Track previous scroll position
  const [visible, setVisible] = useState(true); // Control navbar visibility

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine scroll direction
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        // Scrolling down and past 100px: hide navbar
        setVisible(false);
      } else {
        // Scrolling up: show navbar
        setVisible(true);
      }

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-transparent`} // Navbar is always transparent
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">SUMIT KADAM</h1>
        <ul className="flex space-x-6">
          {["About", "Projects", "Skills", "Resume", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;