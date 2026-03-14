"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

const roles = ["AI/ML Practitioner", "Agentic AI", "LLM Systems", "GCP"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className={`py-12 md:py-20 transition-opacity duration-600 ease-in-out ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 text-center md:text-left">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
            <span className="text-white font-serif text-lg font-semibold">
              SP
            </span>
          </div>
        </div>

        {/* Name */}
        <h1 className="font-serif text-4xl md:text-6xl text-text-primary mb-4">
          Sohee Park
        </h1>

        {/* Tagline */}
        <p className="font-sans text-lg text-text-secondary max-w-xl mx-auto md:mx-0 mb-6">
          I build ML and Generative AI tools for real business problems, in
          banking and in the real world.
        </p>

        {/* Role pills */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
          {roles.map((role) => (
            <span
              key={role}
              className="border border-border text-text-muted text-xs rounded-full px-3 py-1"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/Sohee-sophiePark"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sohee-sophie-park/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
