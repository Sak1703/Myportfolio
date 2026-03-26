/* =============================================
   PORTFOLIO DATA - SAKSHAM DUA
   ============================================= */

   const TYPEWRITER_WORDS = [
    "AI/ML systems.",
    "full-stack web apps.",
    "NLP-powered tools.",
    "real-world solutions."
  ];
  
  const SKILLS_DATA = [
    // Frontend
    { name: "React.js", emoji: "⚛️", category: "frontend" },
    { name: "JavaScript", emoji: "✨", category: "frontend" },
    { name: "HTML5/CSS3", emoji: "🌐", category: "frontend" },
  
    // Backend & Languages
    { name: "Python", emoji: "🐍", category: "backend" },
    { name: "Node.js", emoji: "🟢", category: "backend" },
    { name: "C++", emoji: "💻", category: "backend" },
    { name: "Java", emoji: "☕", category: "backend" },
  
    // AI / ML
    { name: "TensorFlow", emoji: "🧠", category: "ai" },
    { name: "PyTorch", emoji: "🔥", category: "ai" },
    { name: "Scikit-learn", emoji: "🤖", category: "ai" },
    { name: "NLP", emoji: "📝", category: "ai" },
    { name: "OpenCV", emoji: "👁️", category: "ai" },
  
    // Data & Tools
    { name: "MongoDB", emoji: "🍃", category: "data" },
    { name: "MySQL", emoji: "🗄️", category: "data" },
    { name: "Git/GitHub", emoji: "🐙", category: "tools" },
    { name: "Docker", emoji: "🐳", category: "tools" }
  ];
  
  const PROJECTS_DATA = [
    {
      id: 1,
      title: "SafeSpace – Stress Detection",
      category: "ai",
      shortDesc: "Real-time multimodal stress detection system using CNN and LSTM for classification.",
      fullDesc: "Developed an end-to-end deep learning pipeline using CNN and LSTM models to classify real-time stress signals with 90% accuracy.",
      stack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "AI Resume Screener",
      category: "nlp",
      shortDesc: "NLP-based candidate ranking system using BERT embeddings for semantic matching.",
      fullDesc: "Built an NLP ranking system using BERT embeddings, achieving 18% higher accuracy in candidate matching compared to traditional TF-IDF baselines.",
      stack: ["Python", "Transformers", "Scikit-learn", "Streamlit"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Sports Scholarship Portal",
      category: "fullstack",
      shortDesc: "Scalable MERN-based portal for athlete registrations and scholarship workflows.",
      fullDesc: "Developed a scalable MERN-based Sports Scholarship Portal supporting 100+ athlete registrations with JWT authentication.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      github: "#",
      live: null
    }
  ];
  
  const EXPERIENCE_DATA = [
    {
      company: "Engineers India Ltd.",
      role: "Junior Developer Intern",
      period: "June 2025 – July 2025",
      points: [
        "Developed a scalable MERN-based Sports Scholarship Portal supporting 100+ athlete registrations.",
        "Reduced backend response latency by 25% through API and schema optimization.",
        "Designed MongoDB schemas with indexing, improving query performance by 30%.",
        "Maintained 99% application uptime through effective debugging and logging in an Agile Git-based workflow.",
      ]
    },
    {
      company: "Youth United (NGO) – Patiala Chapter",
      role: "General Secretary",
      period: "April 2025 – Present",
      points: [
        "Leading operational and financial management for initiatives supporting specially-abled individuals.",
        "Coordinating volunteers, sponsors, and institutional stakeholders for outreach events.",
        "Ensuring transparent budgeting and responsible fund allocation."
      ]
    },
    {
      company: "URJA Tech Sports Fest – 10th Edition",
      role: "Deputy Overall Event Coordinator",
      period: "August 2025 – Feb 2026",
      points: [
        "Assisted in strategic planning and large-scale execution of the tech-sports fest.",
        "Led the introduction of Shooting Sport at Thapar University for the first time.",
        "Managed on-ground operations, stakeholder communication, and real-time issue resolution."
      ]
    }
  ];