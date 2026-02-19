import { useState } from "react";
//import whatsapp from "./../assets/whatsapp.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-blue-950/70 px-7 md:px-10">
        <div className="text-white max-w-7xl mx-auto h-16 flex items-center justify-between">
          <div className="text-lg font-bold tracking-wide">
            <h1>M. Fadhlul Rahman Prabowo</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button
              onClick={() => handleScroll("about-tag")}
              className="cursor-pointer hover:text-lime-400 transition"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("tech-stack-tag")}
              className="cursor-pointer hover:text-lime-400 transition"
            >
              Tech Stack
            </button>
            <button
              onClick={() => handleScroll("projects-tag")}
              className="hover:text-lime-400 transition"
            >
              Projects
            </button>
            <button
              onClick={() => handleScroll("contacts-tag")}
              className="hover:text-lime-400 transition"
            >
              Contacts
            </button>
          </nav>

          {/* Hamburger */}
          {isOpen ? (
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              ❌
            </button>
          ) : (
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          )}
        </div>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-950/70 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-white flex flex-col mt-20 px-6 gap-6 text-sm">
          <button
            onClick={() => handleScroll("about-tag")}
            className="cursor-pointer hover:text-lime-400 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("tech-stack-tag")}
            className="cursor-pointer hover:text-lime-400 transition"
          >
            Tech Stack
          </button>
          <button
            onClick={() => handleScroll("projects-tag")}
            className="hover:text-lime-400 transition"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contacts-tag")}
            className="hover:text-lime-400 transition"
          >
            Contacts
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
