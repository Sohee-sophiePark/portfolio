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
  {
    name: "Triage Desk",
    description: "Agentic operations desk for fraud, risk and compliance alerts: code-computed metrics and breach rules, parallel read-only specialists, a single writer, deterministic gates, an evaluator revision loop, and a human decision. Every number in a case brief traces to a metric.",
    stack: ["Python", "LangGraph", "FastAPI", "Gemini", "React", "TypeScript"],
    demo: "https://sohee-sophiepark.github.io/triage-desk/",
  },
  {
    name: "LuciaRead",
    description: "Agentic reading assistant for chest X-rays and retinal OCT: calibrated classifiers with Grad-CAM, LLM specialists, deterministic gates, an evaluator loop, and clinician sign-off. Code sets the label and triage. Research demo, not medical advice.",
    stack: ["Python", "PyTorch", "FastAPI", "Gemini", "React", "TypeScript"],
    demo: "https://sohee-sophiepark.github.io/luciaread/",
  },
  {
    name: "Money Trail Agents",
    description: "Anti-money-laundering alert review that follows the money: code traces counterparties and multi-hop cycles, three analysts weigh the evidence in parallel, gates block tipping off, and the investigator decides. Synthetic IBM AML data with ground truth.",
    stack: ["Python", "pandas", "FastAPI", "Gemini", "React", "TypeScript"],
    demo: "https://sohee-sophiepark.github.io/money-trail-agents/",
  },
];
