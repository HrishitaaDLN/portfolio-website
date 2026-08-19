export const PERSON = {
  name: "Lakshmi Naga Hrishitaa Dharmavarapu",
  shortName: "Hrishitaa",
  role: "AI/ML Engineer",
  education: "MS Computer Science @ UIC",
  email: "ldhar@uic.edu",
  github: "https://github.com/HrishitaaDLN",
  linkedin: "https://www.linkedin.com/in/hrishitaa-dharmavarapu-ln-3420a8205/",
  phone: "+1-872-369-6228",
};

export const TYPEWRITER_ROLES = [
  "Software Engineer - AI",
  "AI/ML Engineer",
  "ML Researcher",
  "LLM Builder",
  "Data Scientist",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

/** Matches resume — Technical Skills section */
export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    title: "AI/ML Engineering",
    icon: "brain",
    skills: [
      "LLM APIs",
      "LangChain",
      "LangGraph",
      "Amazon Bedrock",
      "MCP",
      "RAG",
      "ChromaDB",
      "Prompt Engineering",
      "Context Management",
      "Agent Evaluation",
      "Guardrails",
      "PII Redaction",
      "Human-in-the-Loop",
      "Hooks",
      "LangSmith",
    ],
  },
  {
    title: "Full-Stack & API Development",
    icon: "server",
    skills: [
      "React",
      "REST APIs",
      "gRPC",
      "GraphQL",
      "FastAPI",
      "Flask",
      "Webhooks",
      "Stripe",
      "UI/API/DB Architecture",
    ],
  },
  {
    title: "Data & Search",
    icon: "database",
    skills: [
      "Spark",
      "Hadoop",
      "Elasticsearch",
      "Redis",
      "PostgreSQL",
      "pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    icon: "cloud",
    skills: [
      "AWS",
      "GCP",
      "Vercel",
      "API Gateway",
      "S3",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "A/B Testing",
      "Datadog",
      "Pytest",
      "Git",
      "Cursor",
      "Claude Code",
      "Codex",
      "Salesforce",
      "Jira",
    ],
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
    title: "AI/ML Engineer",
    company: "PivotX Advisors",
    location: "United States",
    period: "Aug 2026 – Present",
    bullets: [
      {
        title: "LLM Evaluation Platform",
        description:
          "Built a 0-dimension LLM evaluation platform (hybrid LLM-judge + deterministic) for an enterprise contact-center AI client — +10–12% accuracy on KB retrieval and tool-use; now the model-risk gate for every release.",
      },
      {
        title: "Agent Factory on GCP",
        description:
          "Built a LangChain + LangGraph agent-factory on GCP for an industrial conglomerate's compliance and credit-risk screening — displaced 21,000+ analyst hours/year across 7,000 vendors.",
      },
      {
        title: "Parallel Fan-Out Optimization",
        description:
          "Cut per-vendor LLM processing 75s → 12s (~84%) — LangSmith tracing surfaced a sequential judge bottleneck; rebuilt with parallel fan-out on LangChain LCEL.",
      },
      {
        title: "Multi-Agent on AWS Bedrock",
        description:
          "Architected a multi-agent system on AWS Bedrock using MCP. A/B tested +65% completion on Proof of Service vs. legacy UI; now the default flow.",
      },
    ],
  },
  {
    title: "Graduate Research Assistant",
    company: "UIC Business School",
    location: "Chicago, IL",
    period: "May 2025 – May 2026",
    group: "University of Illinois at Chicago",
    bullets: [
      {
        title: "Multi-Agent Extraction",
        description:
          "Architected a scalable manager-worker multi-agent system with LangChain and Amazon Bedrock, delivering structured extraction from unstructured PDFs across 100+ municipalities at 95%+ accuracy.",
      },
      {
        title: "Chroma RAG Pipeline",
        description:
          "Engineered a Chroma RAG pipeline with prompt design and context management, lifting retrieval precision by 40% across inconsistent document formats.",
      },
      {
        title: "Telemetry & Reliability",
        description:
          "Instrumented the pipeline with Datadog telemetry and automated failure detection, cutting silent data corruption by 70%.",
      },
      {
        title: "Research Impact",
        description:
          "Presented the work to the Sustainability Research and Innovation Congress, reaching an audience across 80+ countries.",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "University of Illinois at Chicago",
    location: "Chicago, IL",
    period: "Oct 2024 – May 2025",
    bullets: [
      {
        title: "Mental Health Application",
        description:
          "Built and shipped a full-stack mental health application with React, FastAPI, and PostgreSQL, leveraging Cursor AI to cut development time by 50%.",
      },
      {
        title: "Production Deployment",
        description:
          "Deployed to production on AWS with CI/CD and monitoring, now used internally across UI Health after piloting with 15 teams.",
      },
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "OpenText Technologies",
    location: "Hyderabad, India",
    period: "Oct 2022 – June 2024",
    bullets: [
      {
        title: "Full-Stack Platform",
        description:
          "Designed a React and TypeScript frontend over a FastAPI backend using modular object-oriented design, delivering real-time dashboards to enterprise clients at scale.",
      },
      {
        title: "Backend & CI/CD",
        description:
          "Architected and scaled backend services behind an AWS API Gateway, automating build, test, and deployment via CI/CD to cut release time by 40%.",
      },
      {
        title: "Performance Optimization",
        description:
          "Used Datadog APM to pinpoint SQL bottlenecks on a 2M+ user platform, applying query tuning and indexing to cut response times by 30%.",
      },
      {
        title: "Test Automation",
        description:
          "Built automated end-to-end validation and UI test suites, driving up automation coverage and cutting manual testing effort by 60%.",
      },
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "OpenText Technologies",
    location: "Hyderabad, India",
    period: "Aug 2022 – Oct 2022",
    bullets: [
      {
        title: "Resolved customer issues that are impactful",
        description:
          "Owned resolution of a production-breaking 1 TB upload failure on a 2M+ user platform, implementing S3 multipart uploads to slash upload time by 60%.",
      },
      {
        title: "Backend Reliability",
        description:
          "Drove backend reliability with functional and unit test suites in Pytest, reducing production defects by 30%.",
      },
    ],
  },
];

export const PROJECTS = [
  {
    name: "Clinical Documentation Helper",
    subtitle: "Multi-Agent GenAI for Clinical Workflows",
    period: "May 2025 – May 2026",
    description:
      "Multi-agent GenAI system with LangGraph and AWS Textract that extracts data from clinical document images, maintains patient records, and automates scheduling, checkup reminders, and patient notifications. Includes PII redaction and human-in-the-loop approval before critical actions; React, FastAPI, and PostgreSQL platform used internally by UI Health clinicians.",
    tags: ["LangGraph", "AWS Textract", "React", "FastAPI", "PostgreSQL", "Guardrails"],
    github: "#",
    icon: "clinical",
  },
  {
    name: "Behavioral Health Reference Matcher",
    subtitle: "Hybrid Retrieval Referral Tool",
    period: "Jan 2026",
    description:
      "Staff-facing referral tool that parses free-text client needs and matches them to treatment programs using hybrid retrieval — structured filters plus semantic search over ChromaDB. LangGraph agent with input/output hooks ranks programs and explains each match, achieving 85% recall@5 on a 15-query evaluation set.",
    tags: ["LangGraph", "RAG", "ChromaDB", "FastAPI", "React", "PostgreSQL"],
    github: "#",
    icon: "referral",
  },
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
      "Gemini-powered financial analyst using RAG over the Financial PhraseBank - semantic search with Sentence-Transformers and Qdrant, plus real-time sentiment visualization in Streamlit.",
    tags: ["RAG", "Gemini", "Qdrant", "Streamlit", "NLP", "Python"],
    github: "https://github.com/HrishitaaDLN/FinGptPro",
    icon: "fingpt",
  },
  {
    name: "Customer Churn Survival Analysis",
    subtitle: "Time-to-Event Churn Modeling",
    period: "2025",
    description:
      "Reframes telecom churn as a survival problem on the IBM Telco dataset - CoxPH, Weibull AFT (C-index 0.87), and Random Survival Forests with an interactive Streamlit dashboard for curves, hazards, and retention insights.",
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
    name: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI · LangChain",
    date: "May 30, 2026",
    verifyUrl:
      "https://learn.deeplearning.ai/accomplishments/a0ec6c11-b49c-4a9a-8168-fa0a948b8d6b?usp=sharing",
    icon: "langchain",
  },
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
