export type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
};

// Live projects only: public repo + live demo.
export const projects: Project[] = [
  {
    name: "Advisor Copilot",
    description: "Multi-agent copilot that prepares wealth advisor client reviews: parallel analysts, deterministic gates, an evaluator revision loop, and human approval. Every number is computed by code and traceable.",
    stack: ["Python", "FastAPI", "Gemini", "React", "TypeScript"],
    github: "https://github.com/Sohee-sophiePark/advisor-copilot",
    demo: "https://sohee-sophiepark.github.io/advisor-copilot/",
  },
];
