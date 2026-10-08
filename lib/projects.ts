export type Project = {
  name: string;
  description: string;
  stack: string[];
  demo: string;
};

// Live projects only; the tile links to the live demo.
export const projects: Project[] = [
  {
    name: "Advisor Copilot",
    description: "Multi-agent copilot that prepares wealth advisor client reviews: parallel analysts, deterministic gates, an evaluator revision loop, and human approval. Every number is computed by code and traceable.",
    stack: ["Python", "FastAPI", "Gemini", "React", "TypeScript"],
    demo: "https://sohee-sophiepark.github.io/advisor-copilot/",
  },
];
