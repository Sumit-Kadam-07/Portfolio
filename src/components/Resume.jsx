const Resume = () => {
  // Sample experience data
  const experiences = [
    {
      title: "INTERNSHIP ON AI  ",
      company: "MAKERS LAB-TECH MAHINDRA",
      duration: " March 25- July 2025",
      responsibilities: [
        "Worked on AI-focused project assignments and proof-of-concepts under the guidance of industry mentors",
        "Completed self-upskilling in machine learning concepts and tools as per project requirements. ",
        "Participated in team meetings, contributing to planning and discussions around AI solution development.",
        "Gained hands-on exposure by shadowing real-world AI projects and understanding enterprise workflows.",
      ],
    },

    {
      title: "INTERNSHIP ON AI ",
      company: "AICTE",
      duration: " Nov 24- Dec 2024",
      responsibilities: [
        "Designed and implemented a machine learning model for image classification using Convolutional Neural Networks (CNNs).",
        "Conducted data preprocessing to ensure optimal model performance and accuracy. ",
        "Trained and optimized the model using advanced optimization techniques. ",
      ],
    },
    {
      title: "FULL STACK WEB DEVELOPMENT INTERNSHIP",
      company: "CODTECH IT SOLUTIONS PVT.LTD",
      duration: "Jan 25- Feb 2025",
      responsibilities: [
        "Proficient in designing and developing responsive full-stack web applications using HTML, CSS, JavaScript, and frameworks like React for front-end and Node.js with Express for back-end.",
        "Experienced in creating and integrating RESTful APIs and managing databases with MongoDB and MySQL for efficient data handling",
        "Skilled in optimizing web applications for performance, scalability, and cross-browser compatibility, with deployment expertise on platforms like AWS and Heroku.",
      ],
    },
    // {
    //   title: "Intern",
    //   company: "Innovate Labs",
    //   duration: "Jan 2020 - May 2020",
    //   responsibilities: [
    //     "Learned and applied best practices in software development.",
    //     "Contributed to the development of a machine learning model.",
    //     "Participated in code reviews and team meetings.",
    //   ],
    // },
  ];

  return (
    <section id="resume" className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
      {/* <div className="text-center mb-12">
        <a
          href="Sumit Kadam's Resume.pdf"
          download="Sumit Kadam's Resume.pdf"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200"
        >
          Download Resume
        </a>
      </div> */}
      <div className="text-center mb-12 flex justify-center gap-6 flex-wrap">
  <a
    href="Sumit Kadam's Resume.pdf"
    download="Sumit Kadam's Resume.pdf"
    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200"
  >
    Download Resume
  </a>
  <a
    href="Sumit Kadam's Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-200"
  >
    View Resume
  </a>
</div>


      {/* Experience Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Experience</h3>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">
                {experience.title} - {experience.company}
              </h4>
              <p className="text-gray-600 mb-4">{experience.duration}</p>
              <ul className="list-disc list-inside space-y-2">
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i} className="text-gray-700">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;