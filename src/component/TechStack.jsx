import { useState } from "react";

const dummyIcons = {
  frontend: "https://static.thenounproject.com/png/487779-200.png",
  backend: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMH4NvknbYPeHQ_Tb9okEkxArY6h4UGdgm8Ts7mgZrA&s",
  database: "https://cdn-icons-png.freepik.com/512/9422/9422957.png",
  devops: "https://www.cloudplusinfotech.com/assets/img/devops1.png",
  testing: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyMNJnPhnCQ9ttUt3S02tw1y_0yPDo7jnx3gFrKwQuA&s",
  api: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBvmE-rWBGdPvAC4RJ31OCoqUFUsr9ILVVA&s",
  git: "https://cdn-icons-png.freepik.com/512/5433/5433840.png",
  project: "https://cdn-icons-png.freepik.com/256/12148/12148631.png?semt=ais_white_label",
  cloud: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lNv3JalFVSzZk-hpckYeh47X7kvVyPDoLy5D8vCQgg&s",
  security: "https://cdn-icons-png.flaticon.com/512/2654/2654157.png"
};

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    {
      category: "Frontend Development",
      icon: dummyIcons.frontend,
      items: ["JavaScript", "HTML5", "CSS", "Responsive Design", "React.js", "Vite", "React Router", "Redux", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      icon: dummyIcons.backend,
      items: ["Golang", "Gin", "REST API", "Clean Architecture", "Middleware", "JWT Auth", "Database Integration"]
    },
    {
      category: "Database",
      icon: dummyIcons.database,
      items: ["PostgreSQL", "MySQL", "Redis", "SQL"]
    },
    {
      category: "DevOps & Deployment",
      icon: dummyIcons.devops,
      items: ["Docker", "Docker Compose", "Linux CLI"]
    },
    {
      category: "Testing",
      icon: dummyIcons.testing,
      items: ["Backend API Testing (Postman)"]
    },
    {
      category: "API Design",
      icon: dummyIcons.api,
      items: ["RESTful API", "OpenAPI/Swagger Documentation"]
    },
    {
      category: "Version Control",
      icon: dummyIcons.git,
      items: ["Git", "GitHub", "GitLab", "Git Flow"]
    },
    {
      category: "Project Management",
      icon: dummyIcons.project,
      items: ["Scrum"]
    },
    {
      category: "Cloud & Hosting",
      icon: dummyIcons.cloud,
      items: ["Vercel"]
    },
    {
      category: "Security & Best Practices",
      icon: dummyIcons.security,
      items: ["Input Validation", "JWT", "CORS"]
    }
  ];

  return (
    <section id="tech-stack-tag" className="scroll-smooth relative w-full bg-linear-to-b from-gray-200 to-white text-gray-900 px-7 md:px-10 py-24 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-lime-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
            What I Bring to the Table
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              I SPECIALIZE IN A
            </span>
            <br />
            <span className="bg-linear-to-r from-lime-600 to-purple-600 bg-clip-text text-transparent">
              RANGE OF SKILLS
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-lime-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover effect gradient */}
              <div className={`absolute inset-0 bg-linear-to-r bg-lime-400 rounded-2xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-r bg-gray-100 p-2 flex items-center justify-center transition-transform duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`}>
                    <img 
                      src={skill.icon} 
                      alt={skill.category}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/32/4ade80/ffffff?text=${skill.category.charAt(0)}`;
                      }}
                    />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl text-gray-800">
                    {skill.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className={`font-semibold px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-md border border-gray-200/50 transition-all duration-300 ${hoveredIndex === index ? 'bg-lime-50 border-lime-200' : ''}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-lime-400/20 to-purple-400/20 rounded-tr-2xl rounded-bl-2xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500">
            <span className="w-12 h-px bg-linear-to-r from-transparent via-lime-400 to-transparent"></span>
            <span className="text-sm">Always learning, always growing</span>
            <span className="w-12 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent"></span>
          </div>
        </div>
      </div>
    </section>
  );
}