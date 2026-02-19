import { useState } from "react";

const contactIcons = {
  email: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/gmail.svg",
  phone: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/whatsapp.svg",
  linkedin: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg",
  telegram: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/telegram.svg",
};

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState(null);

  const contacts = [
    {
      type: "Email",
      value: "fadhlulrahman687@gmail.com",
      icon: contactIcons.email,
      link: "mailto:fadhlulrahman687@gmail.com",
      color: "from-red-400 to-red-500",
    },
    {
      type: "Telegram",
      value: "@fDlRahman",
      icon: contactIcons.telegram,
      link: "https://telegram.me/fDlRahman",
      color: "from-blue-400 to-blue-500",
    },
    {
      type: "WhatsApp",
      value: "+62 813-8626-3605",
      icon: contactIcons.phone,
      link: "https://wa.me/6281386263605",
      color: "from-green-400 to-green-500",
    },
    {
      type: "LinkedIn",
      value: "www.linkedin.com/in/fadhlul-rahman/",
      icon: contactIcons.linkedin,
      link: "https://www.linkedin.com/in/fadhlul-rahman/",
      color: "from-blue-400 to-blue-500",
    },
  ];

  return (
    <section
      id="contacts-tag"
      className="scroll-smooth relative w-full bg-linear-to-b from-white to-gray-50 text-gray-900 px-7 md:px-10 py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-size-[32px_32px]"></div>

        {/* Animated particles */}
        <div className="absolute top-20 left-[20%] w-1 h-1 bg-lime-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-[80%] w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-[30%] w-1 h-1 bg-lime-400/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-60 right-[25%] w-2 h-2 bg-purple-400/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main content with split layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left side - LET'S WORK TOGETHER */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="relative">
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.9]">
                <span className="bg-linear-to-r from-lime-600 to-lime-400 bg-clip-text text-transparent block">
                  LET'S
                </span>
                <br />
                <span className="bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent block mt-2">
                  WORK
                </span>
                <br />
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold bg-linear-to-r from-lime-500 to-purple-500 bg-clip-text text-transparent">
                  TOGETHER
                </span>
              </h2>
              <div className="w-full h-1 bg-linear-to-r from-lime-400 via-purple-400 to-lime-400 rounded-full"></div>

              <div className="mt-12 lg:mt-16 space-y-4">
                <p className="text-xl md:text-2xl text-gray-700 font-light italic">
                  "Let's turn your ideas into reality.
                </p>
                <p className="text-xl md:text-2xl text-gray-700 font-light italic">
                  I'm just one message away."
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
                  <span className="w-12 h-px bg-linear-to-r from-lime-400 to-purple-400"></span>
                  <span className="text-gray-500">Rahman</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact List */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-200/50 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-linear-to-r from-lime-400 to-purple-400 rounded-full"></span>
                Contact me at ➜
              </h3>

              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    onMouseEnter={() => setHoveredContact(index)}
                    onMouseLeave={() => setHoveredContact(null)}
                  >
                    <div
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                        hoveredContact === index
                          ? `bg-linear-to-r ${contact.color} text-white shadow-xl scale-105 translate-x-2`
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          hoveredContact === index
                            ? "bg-white/20"
                            : "bg-white shadow-md"
                        }`}
                      >
                        <img
                          src={contact.icon}
                          alt={contact.type}
                          className="w-6 h-6 object-contain"
                          style={{
                            filter:
                              hoveredContact === index
                                ? "brightness(0) invert(1)"
                                : "none",
                          }}
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/24/4ade80/ffffff?text=${contact.type.charAt(0)}`;
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p
                          className={`text-sm font-medium transition-colors duration-300 ${
                            hoveredContact === index
                              ? "text-white/80"
                              : "text-gray-500"
                          }`}
                        >
                          {contact.type}
                        </p>
                      </div>

                      {/* Arrow icon */}
                      <div
                        className={`transition-all duration-300 ${
                          hoveredContact === index
                            ? "translate-x-1 opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
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
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></span>
                <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse delay-700"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Rahman • Full-Stack Web Developer
          </p>
        </div>
      </div>
    </section>
  );
}
