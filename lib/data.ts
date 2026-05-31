export const PERSON = {
  name: "Lakshmi Naga Hrishitaa Dharmavarapu",
  shortName: "Hrishitaa",
  role: "AI Engineer",
  education: "MS Computer Science @ UIC",
  email: "ldhar@uic.edu",
  github: "https://github.com/HrishitaaDLN",
  linkedin: "https://www.linkedin.com/in/hrishitaa-dharmavarapu-ln-3420a8205/",
  phone: "+1-872-369-6228",
};

export const TYPEWRITER_ROLES = [
  "AI Engineer",
  "ML Researcher",
  "LLM Builder",
  "Data Scientist",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

/** Matches resume — Technical Skills section */
export const SKILL_GROUPS = [
  {
    title: "ML & AI",
    icon: "brain",
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "Keras",
      "NLP",
      "spaCy",
      "LLM Applications",
      "RAG",
      "LangGraph",
      "LangChain",
    ],
  },
  {
    title: "Data Science",
    icon: "chart",
    skills: [
      "SQL",
      "Feature Engineering",
      "Statistical Modeling",
      "Hypothesis Testing",
      "A/B Testing",
      "Causal Inference",
      "pandas",
      "SciPy",
    ],
  },
  {
    title: "MLOps & Infrastructure",
    icon: "server",
    skills: [
      "MLflow",
      "Docker",
      "Kubernetes",
      "FastAPI",
      "CI/CD",
      "REST APIs",
      "Git",
      "Linux",
      "Terraform",
      "AWS CDK",
    ],
  },
  {
    title: "Data Engineering",
    icon: "database",
    skills: [
      "ETL Pipelines",
      "Spark",
      "Hadoop",
      "Elasticsearch",
      "MySQL",
      "AWS (S3, EC2, RDS, Redshift)",
    ],
  },
  {
    title: "Visualization",
    icon: "viz",
    skills: ["Tableau", "Looker Studio", "Streamlit", "Matplotlib"],
  },
];

export type ExperienceBullet = {
  title: string;
  description: string;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  location: string;
  period: string;
  group?: string;
  bullets: ExperienceBullet[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Research Assistant",
    company: "University of Illinois Chicago",
    location: "Chicago, IL",
    period: "May 2025 – Present",
    group:
      "IDIATER (Infrastructure and Decision Intelligence for Accelerating Technology & Energy Resilience) Research Group",
    bullets: [
      {
        title: "ML Data Pipeline",
        description:
          "Engineered an end-to-end ingestion pipeline to collect, merge, and structure heterogeneous data — sustainability plans, emissions inventories, and census data — across 100+ municipalities.",
      },
      {
        title: "NLP & LLM Extraction",
        description:
          "Built a prompt-engineered LLM document parsing system converting raw municipal PDFs into structured datasets with 95%+ extraction accuracy using NLP extraction chains.",
      },
      {
        title: "Experiment Tracking & Feature Engineering",
        description:
          "Tracked model runs with MLflow and transformed 100+ municipal financial reports into analysis-ready feature sets; built Streamlit dashboards presented to urban planning groups, the Metropolitan Mayors Caucus, and at the SRI Congress spanning 80+ countries.",
      },
      {
        title: "Research Impact",
        description:
          "Research accepted to the Sustainability Research and Innovation Congress (SRI) spanning 80+ countries; findings adopted by local governments to benchmark climate investments.",
      },
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "OpenText Technologies",
    location: "Hyderabad, India",
    period: "Oct 2022 – Jun 2024",
    bullets: [
      {
        title: "Client-Facing POC to Production",
        description:
          "Presented analytics platform demos to enterprise clients, gathered feedback, and iteratively evolved POCs into a production-grade Python + FastAPI platform on AWS serving 100+ stakeholders.",
      },
      {
        title: "Full-Stack Analytics Platform",
        description:
          "Built React frontend over a FastAPI backend delivering real-time analytics dashboards to enterprise clients, owning every layer from UI components to API design and deployment.",
      },
      {
        title: "ML-Backed Analytics Platform",
        description:
          "Architected a scalable service layer replacing ad hoc SQL/Excel workflows; incorporated client feedback across iteration cycles to align product behavior with enterprise business needs.",
      },
      {
        title: "Container Orchestration",
        description:
          "Deployed and managed containerized services using Kubernetes and Docker, ensuring high availability and scalable infrastructure across development and production environments.",
      },
      {
        title: "Large-Scale ETL",
        description:
          "Built Spark and Hadoop pipelines processing up to 1 TB via AWS S3, automating PDF report generation and eliminating 20+ hours/month of manual effort.",
      },
      {
        title: "Search & Inference Optimization",
        description:
          "Integrated Elasticsearch to offload high-latency queries, reducing response latency by 35% for a system serving 2M+ users.",
      },
      {
        title: "Pipeline Validation Automation",
        description:
          "Automated end-to-end data validation and UI testing workflows, cutting manual testing by 60% and reducing production release risk by 50–60%.",
      },
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "OpenText Technologies",
    location: "Hyderabad, India",
    period: "Aug 2022 – Sep 2022",
    bullets: [
      {
        title: "Data Integrity & Query Optimization",
        description:
          "Maintained and optimized MySQL schemas using joins, indexes, and migrations to ensure data integrity; resolved ~40% of cross-layer issues across search and database components.",
      },
      {
        title: "Deployment & CI/CD Support",
        description:
          "Assisted in deploying containerized services to AWS using Docker and contributed to CI/CD pipeline setup, supporting reliable and repeatable production deployments.",
      },
    ],
  },
];

export const PROJECTS = [
  {
    name: "CommuteGenie",
    subtitle: "Multi-Agent AI Transportation Assistant",
    period: "Spring 2026",
    description:
      "Multi-agent LangGraph system with a Manager Router/Writer orchestrating Trip Planner, Transport, Context, and LLM-only paths — validated by a Critic agent. RAG with Chroma/FAISS for real-time transit and weather. React + Next.js frontend over FastAPI.",
    tags: ["LangGraph", "LangChain", "RAG", "FastAPI", "React", "Next.js"],
    github: "https://github.com/HrishitaaDLN/commute_genie_agentic",
    paper:
      "https://drive.google.com/file/d/1wMSe0I0kX4GF-Kl8wTjjalF3nRWBLsmI/view?usp=sharing",
    icon: "commute",
  },
  {
    name: "NIJ Recidivism Forecasting",
    subtitle: "ML + Algorithmic Fairness",
    period: "Fall 2025",
    description:
      "XGBoost survival models on 25,835 individuals. Fairness audit across Race, Gender subgroups with bootstrap CIs. Bias mitigation with SHAP analysis.",
    tags: ["XGBoost", "SHAP", "Fairness AI", "scikit-learn", "Python"],
    github: "#",
    paper:
      "https://drive.google.com/file/d/1zltjBqT30NJ49M-DhY-re2hVtJfO94rj/view?usp=sharing",
    icon: "fairness",
  },
  {
    name: "FinGPT-Pro",
    subtitle: "Financial RAG Assistant",
    period: "2025",
    description:
      "Gemini-powered financial analyst using RAG over the Financial PhraseBank — semantic search with Sentence-Transformers and Qdrant, plus real-time sentiment visualization in Streamlit.",
    tags: ["RAG", "Gemini", "Qdrant", "Streamlit", "NLP", "Python"],
    github: "https://github.com/HrishitaaDLN/FinGptPro",
    icon: "fingpt",
  },
  {
    name: "Customer Churn Survival Analysis",
    subtitle: "Time-to-Event Churn Modeling",
    period: "2025",
    description:
      "Reframes telecom churn as a survival problem on the IBM Telco dataset — CoxPH, Weibull AFT (C-index 0.87), and Random Survival Forests with an interactive Streamlit dashboard for curves, hazards, and retention insights.",
    tags: ["Survival Analysis", "lifelines", "Streamlit", "CoxPH", "Python"],
    github: "https://github.com/HrishitaaDLN/Customer-Churn-Survival-Analysis",
    icon: "churn",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  icon: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Education",
    date: "May 30, 2026",
    verifyUrl: "https://verify.skilljar.com/c/o5ouyrv2z3kp",
    icon: "anthropic",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic Education",
    date: "May 30, 2026",
    verifyUrl: "https://verify.skilljar.com/c/2crqevoaezek",
    icon: "anthropic",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic Education",
    date: "May 22, 2026",
    verifyUrl: "https://verify.skilljar.com/c/8yoekubd23o8",
    icon: "anthropic",
  },
];
