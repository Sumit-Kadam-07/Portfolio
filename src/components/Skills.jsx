import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiPycharm,
  //SiVisualstudiocode, // Corrected import
  SiIntellijidea,
  SiGithub,
  SiDjango,
  SiNextdotjs,
  SiCplusplus,
} from "react-icons/si";

const Skills = () => {
  // Categorized skills with icons
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython className="w-6 h-6" /> },
        { name: "SQL", icon: <SiMysql className="w-6 h-6" /> },
        { name: "Java", icon: <FaJava className="w-6 h-6" /> },
        { name: "HTML", icon: <FaHtml5 className="w-6 h-6" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-6 h-6" /> },
        { name: "C++ (Proficient)", icon: <SiCplusplus className="w-6 h-6" /> },
      ],
      color: "bg-blue-100", // Custom color for this category
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React.js", icon: <FaReact className="w-6 h-6" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" /> },
        { name: "Django", icon: <SiDjango className="w-6 h-6" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
      ],
      color: "bg-green-100", // Custom color for this category
    },
    {
      title: "Tools",
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-6 h-6" /> },
        { name: "SQLite", icon: <SiSqlite className="w-6 h-6" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
        { name: "Postman", icon: <SiPostman className="w-6 h-6" /> },
        { name: "Figma", icon: <SiFigma className="w-6 h-6" /> },
      ],
      color: "bg-yellow-100", // Custom color for this category
    },
    {
      title: "Platforms",
      skills: [
        { name: "PyCharm", icon: <SiPycharm className="w-6 h-6" /> },
        { name: "Visual Studio Code", icon: null }, // Corrected icon
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="w-6 h-6" /> },
        { name: "GitHub", icon: <SiGithub className="w-6 h-6" /> },
      ],
      color: "bg-purple-100", // Custom color for this category
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Rapport Building", icon: null },
        { name: "Time Management", icon: null },
        { name: "Excellent Communication", icon: null },
        { name: "Problem Solving", icon: null },
      ],
      color: "bg-pink-100", // Custom color for this category
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${category.color} p-6 rounded-lg shadow-lg`}
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-md text-sm"
                  >
                    {skill.icon && <span>{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;