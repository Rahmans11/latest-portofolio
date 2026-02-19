import { useState } from "react";
import whatsapp from "./../assets/whatsapp.svg";
import Modal from "./Modal";
import profileImg from "./../assets/Rahman-up.png"

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDownload = () => {
    setIsDownloaded(true);
  };

  const handleClick = () => {
    setIsModalOpen(false);
    setIsDownloaded(false);
  };

  console.log(isDownloaded);

  return (
    <>
      {/* Main Wrapper untuk background gradasi langit malam */}
      <section
        id="about-tag"
        className="scroll-smooth relative w-full min-h-screen bg-linear-to-b from-[#0c0f1e] via-[#1a1f35] to-[#14182b] text-white px-7 md:px-10 py-16 md:py-24 overflow-hidden"
      >
        {/* Efek bintang-bintang */}
        <div className="absolute inset-0 z-0">
          {/* Bintang kecil - random pattern */}
          <div className="absolute top-10 left-[10%] w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute top-20 left-[30%] w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse delay-100"></div>
          <div className="absolute top-40 left-[70%] w-0.5 h-0.5 bg-white rounded-full opacity-80 animate-pulse delay-200"></div>
          <div className="absolute top-60 left-[15%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-300"></div>
          <div className="absolute top-80 left-[85%] w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-150"></div>
          <div className="absolute top-32 left-[45%] w-1 h-1 bg-white rounded-full opacity-70 animate-pulse delay-75"></div>
          <div className="absolute top-72 left-[55%] w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse delay-250"></div>
          <div className="absolute top-96 left-[25%] w-0.5 h-0.5 bg-white rounded-full opacity-90 animate-pulse"></div>
          <div className="absolute top-48 left-[90%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-200"></div>
          <div className="absolute top-88 left-[5%] w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse delay-100"></div>

          {/* Bintang sedang dengan efek kedipan */}
          <div className="absolute top-24 left-[20%] w-2 h-2 bg-white rounded-full opacity-80 animate-twinkle"></div>
          <div className="absolute top-52 left-[75%] w-2.5 h-2.5 bg-white rounded-full opacity-70 animate-twinkle delay-300"></div>
          <div className="absolute top-68 left-[40%] w-2 h-2 bg-white rounded-full opacity-90 animate-twinkle delay-150"></div>

          {/* Bintang dengan warna kebiruan */}
          <div className="absolute top-36 left-[60%] w-1 h-1 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-84 left-[12%] w-1.5 h-1.5 bg-blue-100 rounded-full opacity-50 animate-pulse delay-250"></div>
        </div>

        {/* SVG Siluet Gedung dengan gradasi abu-abu ke putih */}
        <div className="absolute bottom-0 left-0 w-full leading-0 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Linear gradient untuk efek siluet */}
              <linearGradient
                id="buildingGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4a5568" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#a0aec0" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              fill="url(#buildingGradient)"
              fillOpacity="1"
              d="M0,160L0,32L42.4,32L42.4,256L84.7,256L84.7,288L127.1,288L127.1,32L169.4,32L169.4,32L211.8,32L211.8,128L254.1,128L254.1,160L296.5,160L296.5,224L338.8,224L338.8,288L381.2,288L381.2,32L423.5,32L423.5,224L465.9,224L465.9,224L508.2,224L508.2,160L550.6,160L550.6,64L592.9,64L592.9,256L635.3,256L635.3,192L677.6,192L677.6,224L720,224L720,288L762.4,288L762.4,192L804.7,192L804.7,224L847.1,224L847.1,256L889.4,256L889.4,96L931.8,96L931.8,192L974.1,192L974.1,160L1016.5,160L1016.5,288L1058.8,288L1058.8,64L1101.2,64L1101.2,128L1143.5,128L1143.5,64L1185.9,64L1185.9,96L1228.2,96L1228.2,64L1270.6,64L1270.6,160L1312.9,160L1312.9,96L1355.3,96L1355.3,32L1397.6,32L1397.6,192L1440,192L1440,320L1397.6,320L1397.6,320L1355.3,320L1355.3,320L1312.9,320L1312.9,320L1270.6,320L1270.6,320L1228.2,320L1228.2,320L1185.9,320L1185.9,320L1143.5,320L1143.5,320L1101.2,320L1101.2,320L1058.8,320L1058.8,320L1016.5,320L1016.5,320L974.1,320L974.1,320L931.8,320L931.8,320L889.4,320L889.4,320L847.1,320L847.1,320L804.7,320L804.7,320L762.4,320L762.4,320L720,320L720,320L677.6,320L677.6,320L635.3,320L635.3,320L592.9,320L592.9,320L550.6,320L550.6,320L508.2,320L508.2,320L465.9,320L465.9,320L423.5,320L423.5,320L381.2,320L381.2,320L338.8,320L338.8,320L296.5,320L296.5,320L254.1,320L254.1,320L211.8,320L211.8,320L169.4,320L169.4,320L127.1,320L127.1,320L84.7,320L84.7,320L42.4,320L42.4,320L0,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              <span className="bg-linear-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent">
                C💫DING WITH PASSI🪐N,
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                CRAFTING WITH PURP🌕SE
              </span>
            </h2>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Bagian Foto */}
            <div className="w-full flex justify-center lg:justify-end order-1 lg:order-1">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-linear-to-r from-lime-400/30 to-purple-600/30 rounded-3xl -rotate-6 transform transition-transform hover:rotate-3 duration-300 blur-xl"></div>
                <div className="absolute inset-0 bg-linear-to-r from-lime-400 to-purple-600 rounded-3xl -rotate-6 transform transition-transform hover:rotate-3 duration-300"></div>
                <div className="absolute inset-0 bg-[#1a1f35] rounded-3xl overflow-hidden border-2 border-lime-400/50 rotate-6 shadow-2xl shadow-lime-400/20">
                  <div style={{ backgroundImage: `url(${profileImg})` }} className="w-full h-full bg-contain bg-bottom bg-no-repeat transform -rotate-4 scale-110 hover:scale-105 transition-transform duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime-400/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-300"></div>
              </div>
            </div>

            <div className="w-full space-y-6 order-2 lg:order-2">
              {/* Introduction */}
              <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl hover:border-lime-400/30 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-2xl animate-bounce">👋</span>
                  <p className="text-white/95 text-base md:text-lg leading-relaxed">
                    Hello! I'm Rahman — a driven{" "}
                    <span className="font-bold text-lime-400">
                      Full-Stack Web Developer
                      <span className="text-white">.</span>{" "}
                    </span>
                  </p>
                </div>
                <p className="text-justify text-white/95 text-base md:text-lg leading-relaxed">
                  I build modern web applications using{" "}
                  <span className="font-bold text-purple-400">React</span>,{" "}
                  <span className="font-bold text-purple-400">
                    Tailwind CSS
                  </span>
                  , and{" "}
                  <span className="font-bold text-purple-400">Redux </span>
                  on the frontend, and develop scalable RESTful APIs with{" "}
                  <span className="font-bold text-purple-400">Gin(Go) </span>
                  on the backend. From ERD design to{" "}
                  <span className="font-bold text-purple-400">
                    PostgreSQL
                  </span>{" "}
                  implementation, and deployment using{" "}
                  <span className="font-bold text-purple-400">Linux </span> &{" "}
                  <span className="font-bold text-purple-400">Docker</span>, I
                  focus on clean architecture, performance, and scalable
                  systems.
                </p>
              </div>

              {/* Tombol aksi */}
              <div className="flex flex-col justify-center items-center lg:justify-start sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/6281386263605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-linear-to-r from-lime-400 to-lime-500 text-black px-6 py-3 rounded-full font-semibold hover:from-lime-300 hover:to-lime-400 transition-all duration-300 shadow-lg hover:shadow-lime-400/30 flex items-center gap-2 justify-center"
                >
                  Let's Talk
                  <img
                    src={whatsapp}
                    alt="wa-icon"
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                  />
                </a>

                <button
                  onClick={openModal}
                  className="border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Download CV
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <div>
                    {isDownloaded ? (
                      <>
                        <div>
                          <p className="mt-1 text-blue-950 text-xl font-bold mb-4">
                            Thank You for downloading!
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <button
                            onClick={handleClick}
                            className="cursor-pointer bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                          >
                            Close
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="mt-1 text-blue-950 text-xl font-bold mb-4">
                            Want to download this cv?
                          </p>
                        </div>
                        <div className="flex justify-center gap-4">
                          <button
                            onClick={handleDownload}
                            className="cursor-pointer bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                          >
                            <a
                              href="/CV-M. Fadhlul Rahman Prabowo.pdf"
                              download
                            >
                              Yes
                            </a>
                          </button>
                          <button
                            onClick={closeModal}
                            className="cursor-pointer bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                          >
                            No
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tambahkan keyframes untuk animasi bintang */}
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
