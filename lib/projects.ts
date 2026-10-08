export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  status: "ready" | "coming-soon";
};

export const projects: Project[] = [
  // --- Live
  {
    name: "Aegis Agents",
    description: "B2B banking ops platform with AI agents for fraud, risk, compliance, and advisory. Human-in-the-loop throughout.",
    stack: ["Python", "LangGraph", "LiteLLM", "FastAPI", "React"],
    github: "https://github.com/Sohee-sophiePark/aegis-agents",
    status: "ready",
  },
  // --- AI Research Pipeline
  {
    name: "AI Research Pipeline",
    description: "Daily AI paper summarization from ArXiv and HuggingFace.",
    stack: ["Python", "FastAPI", "Railway", "Gemini API"],
    status: "coming-soon",
  },
  // --- ML
  {
    name: "Fraud Detection",
    description: "Credit card fraud classifier on 284K real transactions. Handles severe class imbalance with SHAP explainability.",
    stack: ["Python", "scikit-learn", "XGBoost", "SHAP", "FastAPI"],
    status: "coming-soon",
  },
  // --- DL
  {
    name: "Chest X-Ray Diagnosis",
    description: "CNN that classifies pneumonia from chest X-rays with Grad-CAM heatmaps showing which pixels drove the prediction.",
    stack: ["Python", "PyTorch", "timm", "Grad-CAM", "FastAPI"],
    status: "coming-soon",
  },
  // --- LLM
  {
    name: "SEC Filing RAG",
    description: "Ask plain English questions against 20+ years of SEC filings. Retrieval-augmented generation with source citations.",
    stack: ["Python", "LiteLLM", "ChromaDB", "LangGraph", "FastAPI"],
    status: "coming-soon",
  },
  // --- DOC
  {
    name: "Financial Document Intelligence",
    description: "End-to-end intelligent document processing pipeline for financial documents. Compares OCR APIs, LayoutLM fine-tuning, and VLM fine-tuning (LoRA/QLoRA). Calibrated confidence routing to human review via a LangGraph agentic pipeline.",
    stack: ["Python", "LayoutLMv3", "Qwen2.5-VL", "LangGraph", "LiteLLM"],
    status: "coming-soon",
  },
  // --- Agent
  {
    name: "Research Agent",
    description: "Autonomous research agent that searches the web, synthesises findings, and returns a structured report.",
    stack: ["Python", "LangGraph", "LiteLLM", "Tavily", "FastAPI"],
    status: "coming-soon",
  },
  // --- RL
  {
    name: "RL Trading Agent",
    description: "Reinforcement learning agent trained to allocate a stock portfolio. Walk-forward backtesting with Sharpe and drawdown analysis.",
    stack: ["Python", "FinRL", "Stable-Baselines3", "Plotly"],
    status: "coming-soon",
  },
];
