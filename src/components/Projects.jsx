import { motion } from "framer-motion";

const projects = [
  { id: 1, name: "Elective Allotment System", description: "The Elective Allotment System aims to provide a transparent, efficient, and automated solution for elective course selection in educational institutions. It minimizes manual intervention, ensures fair distribution of courses based on student preferences and institutional policies, and enhances the overall academic experience. By integrating a systematic allotment process, the system reduces administrative workload, prevents conflicts, and ensures optimal utilization of available course seats.", link: "https://github.com/Sumit-Kadam-07/Elective_Allotment_Sys" },
  { id: 2, name: "Data extraction from certificates", description: "Data extraction from certificates involves capturing key details like names, dates, and credentials. It can be done manually or using automated tools like OCR and NLP. The process converts unstructured certificate data into a structured digital format. Extracted data is stored, analyzed, or integrated into databases. This helps in verification, record-keeping, and process automation. It ensures accuracy and efficiency in handling certificate-related information.", link: "https://github.com/Sumit-Kadam-07/Data_Extraction" },
  { id: 3, name: "Implementation-of-ML-model-for-image-classification", description: "Implementing an ML model for image classification involves training it to categorize images. The process includes data collection, preprocessing, and selecting a model like CNNs. The model learns from labeled datasets and is optimized using techniques like transfer learning. Performance is evaluated using accuracy, precision, and F1-score. Once trained, it can be deployed for tasks like object detection and medical diagnosis. This enhances automation and decision-making in various fields.", link: "https://github.com/Sumit-Kadam-07/IMG-CLASS" },
  { id: 4, name: "Timetable Scheduling Automatiion", description: "Timetable scheduling automation uses software to generate optimized schedules efficiently. It assigns classes, resources, and time slots based on predefined constraints. AI or rule-based algorithms help prevent conflicts and balance workloads. The system adapts to changes dynamically, reducing manual effort and errors. It is widely used in schools, universities, and businesses for effective planning. This improves productivity and ensures fair, optimized scheduling.", link: "https://github.com/ShubhamKharade28/timetable-scheduling-automatiion" },

];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;