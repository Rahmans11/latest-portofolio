import { useState } from "react";
import aquasproduct from "./../assets/aquas-product.jpeg";
import tickitzlandingpage from "./../assets/tiktitz-landing-page.png";
import solidcoffeelandingpage from "./../assets/landing_page.png";

const dummyImages = [
  solidcoffeelandingpage,
  "https://png.pngtree.com/png-clipart/20190924/original/pngtree-simple-cartoon-flat-social-media-illustration-png-image_4830079.jpg",
  tickitzlandingpage,
  "https://www.freevector.com/uploads/vector/preview/27691/Rent-Car.jpg",
  "https://raw.githubusercontent.com/OrcaTeamSCAAI/SC-Final-Project-Orca/refs/heads/main/Pict%20dataset%201.png",
  aquasproduct,
];

export default function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Solid Coffee Shop",
      description: `At Koda, I worked on a group project at the end of my bootcamp. My team and I designed an 
        online coffee shop application. This application can handle online coffee orders, and users 
        can find the products they want based on type and price. I played a role in the frontend 
        team.`,
      image: dummyImages[0],
      techStack: [
        "React",
        "Tailwind CSS",
        "Redux",
        "React Router",
        "Recharts",
        "SCRUM",
      ],
      link: "https://github.com/Rahmans11/solid-coffee-fe/tree/admin-dashboard",
      category: "Frontend",
    },
    {
      title: "Simple Media Social",
      description: `At Koda, I worked on a project with a very tight deadline: creating an API service that 
        could handle a simple social media application. Not only did I have to design the API, 
        I also had to think about the design system. This project was intended as an assessment 
        for a phase exam, so the deadline was very short.`,
      image: dummyImages[1],
      techStack: [
        "Golang",
        "Gin",
        "Postgresql",
        "ERD Design",
        "Design System",
        "JWT",
        "CORS Middleware",
      ],
      link: "https://github.com/Rahmans11/BE-Social-Media",
      category: "Backend",
    },
    {
      title: "Tickitz - movie booking online web",
      description: `At Koda, I created an individual project where I designed a web application that functions 
        to handle online cinema ticket booking. In addition to making bookings, users can also find 
        the films they want based on genre or title.`,
      image: dummyImages[2],
      techStack: [
        "React JS",
        "Tailwind CSS",
        "React Router",
        "Redux",
        "Gin",
        "Postgresql",
        "ERD Design",
        "JWT",
        "CORS Middleware",
        "Docker",
        "Docker Compose",
      ],
      link: "https://github.com/Rahmans11/koda-b5-ticketing",
      category: "Fullstack",
    },
    {
      title: "Sistem Manajemen Rental Mobil",
      description: `Before joining the bootcamp at Koda, I participated in a group project where 
      my team and I developed a system based on the concept of a backend API that could manage 
      the car rental business process.`,
      image: dummyImages[3],
      techStack: [
        "Java",
        "Spring Boot",
        "MySQL",
        "JWT",
        "Java Security",
        "Java Unit Testing",
      ],
      link: "https://github.com/Rahmans11/sistem-manajemen-rental-mobil/tree/master",
      category: "Backend",
    },
    {
      title:
        "Binary Classification of Artificially Preserved Fruits vs Naturally Fresh Fruits",
      description: `During my studies, I participated in an independent study in the field of AI. There, 
        my team and I worked on a project that aimed to develop an artificial intelligence (AI) 
        model capable of performing binary classification tasks using a CNN architecture to 
        distinguish between naturally fresh apples and apples that looked fresh but contained 
        excessive preservatives.`,
      image: dummyImages[4],
      techStack: [
        "Artificial Intelligence",
        "Phyton",
        "Computer Vision",
        "Training Binary Classification AI model",
        "Labeling AI data sets",
      ],
      link: "https://github.com/OrcaTeamSCAAI/SC-Final-Project-Orca",
      category: "Study Independent - final project",
    },
    {
      title: "AQUAS",
      description: `Automated Quick Utility for Aiming Sprinklers (AQUAS) is not a web development project. 
        It is my final project for my bachelor's degree, in which my team and I designed a 
        water sprinkler system equipped with a camera and an Artificial Intelligence (AI) model, 
        specifically in Computer Vision, so that it can spray water precisely at the point of fire. 
        In this team, I was responsible for determining which AI model could be used in this product 
        and then deploying that AI model into the product.`,
      image: dummyImages[5],
      techStack: [
        "Artificial Intelligence",
        "Phyton",
        "Computer Vision",
        "AI integration",
        "Raspberry Pi",
      ],
      link: "https://drive.google.com/drive/folders/1JaAG7qotA5pqv7YDXWNVMWJF26HVFEPX",
      category: "College - final project",
    },
  ];

  return (
    <section
      id="projects-tag"
      className="scroll-smooth relative w-full bg-linear-to-b from-gray-50 to-white text-gray-900 px-7 md:px-10 py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-lime-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
            My Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              HERE'S A GLIMPSE OF
            </span>
            <br />
            <span className="bg-linear-to-r from-lime-600 to-purple-600 bg-clip-text text-transparent">
              SOME EXCITING PROJECTS
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            So far, I have worked on various projects, ranging from individual
            to group projects, from frontend and backend projects to other types
            of projects.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-lime-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                {/* Image with overlay */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-60"}`}
                ></div>

                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-purple-400 backdrop-blur-sm text-sm font-semibold rounded-full border border-purple-400">
                  {project.category}
                </span>

                {/* View Project button (appears on hover) */}
                <div
                  className={`absolute bottom-4 right-4 transition-all duration-500 transform ${hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-lime-400 to-lime-500 text-black font-semibold rounded-full hover:from-lime-300 hover:to-lime-400 transition-all duration-300 shadow-lg hover:shadow-lime-400/30"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-lime-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 5).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm border border-gray-200/50 hover:bg-lime-50 hover:border-lime-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                {/* View Project Link (bottom) */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lime-600 font-semibold hover:text-lime-700 transition-colors group/link"
                >
                  View Project
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-lime-400/10 to-purple-400/10 rounded-bl-3xl transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
              ></div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        {/* <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
}
