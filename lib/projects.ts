export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  status: "ready" | "coming-soon";
};

export const projects: Project[] = [
  {
    name: "BankingC360",
    description: "Multi-agent banking intelligence system.",
    stack: ["Python", "Anthropic SDK", "Gemini", "FastAPI"],
    status: "coming-soon",
  },
  {
    name: "AI Research Pipeline",
    description: "Daily AI paper summarization from ArXiv and HuggingFace.",
    stack: ["Python", "FastAPI", "Railway", "Gemini API"],
    status: "coming-soon",
  },
  {
    name: "Hush",
    description: "Calm daily mood and habit tracker with on-device encryption.",
    stack: ["React Native", "Expo", "AdMob"],
    status: "coming-soon",
  },
];
