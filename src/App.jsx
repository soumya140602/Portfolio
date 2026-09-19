import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  ExternalLink, ChevronLeft, ChevronRight, Sparkles, Code2,
  Database, Cloud, BrainCircuit, Award, Terminal, Trophy, Download,
  FileText, CalendarDays, MapPin
} from "lucide-react";
import gasimg from "../public/assets/gasimg.jpg";

const profile = {
  name: "Soumya Agrawal",
  title: "Full Stack Developer",
  summary:
    "Full Stack Developer with 1+ year of experience building scalable web and mobile applications. Experienced with React JS, React Native, Java/JDBC, REST APIs, MySQL/PostgreSQL, LLM integration with Google Gemini API, and CI/CD workflows.",
  email: "soumya.agarwal89@gmail.com",
  phone: "+91 6392336309",
  linkedin: "https://linkedin.com/in/soumya-agrawal-3b965120a",
  github: "https://github.com/soumya140602",
  leetcode: "https://leetcode.com/u/SoumyaAgar/",
  location: "India",
  resume: "/assets/Soumya-Agrawal-Resume.pdf"
};

// Replace the LeetCode URL above with your actual profile URL when ready.
// No LeetCode statistics are hardcoded because the supplied resume did not contain them.

const projects = [
  {
    id: "01",
    title: "AI Chatbot using Google Gemini API",
    category: "AI / FULL STACK",
    description:
      "Production-grade real-time conversational chatbot with multi-turn dialogue, context management and reusable React integration for customer-support workflows.",
    tags: ["React JS", "Google Gemini API", "LLM", "Prompt Engineering", "REST API"],
    accent: "violet",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85",
    github: "https://github.com/soumya140602",
    live: "#"
  },
  {
    id: "02",
    title: "Violence Against Women and Girls — EDA",
    category: "DATA / ANALYTICS",
    description:
      "End-to-end exploratory data analysis on a 12,600-row Kaggle dataset covering 70 countries from 2000–2018, using cleaning, feature engineering and statistical visualization.",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "EDA", "Kaggle"],
    accent: "orange",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
    github: "https://github.com/soumya140602",
    live: "#"
  },
  {
    id: "03",
  title: "Gas Agency Management System",
  category: "FULL STACK",
  description:
    "A full-stack gas agency management system designed to handle customer registrations, cylinder bookings, connections, suppliers and day-to-day agency operations through dedicated user and admin workflows.",
  tags: ["React JS", "Java", "JavaScript", "HTML/CSS"],
  image: "../public/assets/gasimg.jpg",
  github: "https://github.com/soumya140602/gas-agency",
  highlights: [
    "User & Admin Dashboards",
    "Cylinder Booking",
    "Consumer Management",
    "Supplier Management",
    "New Connections",
    "Booking & Reports"
  ]
  }
];

const technologies = [
  { name: "React JS", group: "Frontend", icon: Code2 },
  { name: "React Native", group: "Mobile", icon: Code2 },
  { name: "JavaScript", group: "Frontend", icon: Code2 },
  { name: "TypeScript", group: "Frontend", icon: Code2 },
  { name: "Java", group: "Backend", icon: Terminal },
  { name: "JDBC", group: "Backend", icon: Database },
  { name: "Node.js", group: "Backend — Familiar", icon: Database },
  { name: "PostgreSQL", group: "Database", icon: Database },
  { name: "Python", group: "AI / Data", icon: BrainCircuit },
  { name: "Google Gemini", group: "LLM / AI", icon: BrainCircuit },
  { name: "GitHub", group: "Development", icon: Github },
  { name: "Jenkins", group: "CI/CD", icon: Terminal },
  { name: "Argo CD", group: "Deployment", icon: Cloud },
  { name: "AWS", group: "AWS Services", icon: Cloud },
];

const experience = [
  {
    year: "FEB 2025 — NOW",
    role: "Full Stack Developer",
    company: "Vasaptex Pvt Ltd",
    location: "India",
    text:
      "Building and maintaining high-performance React JS applications, scalable Java/JDBC REST APIs, production fintech features and LLM-powered conversational experiences.",
    bullets: [
      "Built responsive React applications using functional components, Hooks and reusable component architecture.",
      "Designed RESTful APIs with Java/JDBC and optimized SQL using indexing, joins and pagination.",
      "Integrated Google Gemini API with prompt engineering and context management for real-time chatbot workflows.",
      "Refactored monolithic frontend components into reusable modules, reducing code duplication by 40%+.",
      "Worked in Agile/Scrum ceremonies, code reviews, API testing and CI/CD delivery.",
      "Currently working across GitHub-based development workflows, Jenkins pipelines, Argo CD and AWS services."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "ABES Institute of Technology, Ghaziabad",
    date: "2020 — 2024",
    result: "78%"
  },
  {
    degree: "Intermediate — Class XII (Science)",
    school: "Methodist High School",
    date: "2019 — 2020",
    result: "82%"
  },
  {
    degree: "High School — Class X",
    school: "Methodist High School",
    date: "2017 — 2018",
    result: "83%"
  }
];

const certifications = [
  {
    title: "AI Builder Workshop — Certificate of Appreciation",
    issuer: "Notion × HackBriven × Opstree",
    date: "26 July 2026",
    description:
      "Awarded for actively participating in the AI Builder Workshop held at the Paytm Office and demonstrating enthusiasm and commitment toward learning and building with Artificial Intelligence.",
    credential: "AIBUI-AQ7DSW",
    image: "/assets/ai-builder-workshop-certificate.jpeg",
    type: "WORKSHOP"
  },
  {
    title: "Core Java Internship",
    issuer: "UpSkill Campus",
    date: "2023",
    description: "Core Java internship certification listed on the supplied resume.",
    type: "CERTIFICATION"
  },
  {
    title: "Machine Learning Training",
    issuer: "GI Ventures",
    date: "2023",
    description: "Machine Learning training certification listed on the supplied resume.",
    type: "TRAINING"
  },
  {
    title: "Data Science Training",
    issuer: "ABESIT",
    date: "2023",
    description: "Data Science training certification listed on the supplied resume.",
    type: "TRAINING"
  }
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React JS", "React Hooks", "Context API", "React Native", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "Responsive Web Design"]
  },
  {
    title: "Backend",
    items: ["Java", "Core Java", "OOP", "Collections", "JDBC", "RESTful API Design", "Node.js (Familiar)", "MVC", "JSON", "HTTP/HTTPS"]
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "SQL Query Optimization", "Relational Database Design", "Schema Management", "DynamoDB"]
  },
  {
    title: "AI / Data",
    items: ["Google Gemini API", "LLM Integration", "Prompt Engineering", "Python", "NumPy", "Pandas", "EDA", "Matplotlib"]
  },
  {
    title: "DevOps / Cloud",
    items: ["Git", "GitHub", "Jenkins", "Argo CD", "AWS", "Docker / CI-CD workflows"]
  },
  {
    title: "Tools",
    items: ["Postman", "Agile/Scrum", "VS Code", "npm", "Chrome DevTools", "Jira", "Figma (Familiar)"]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeTech, setActiveTech] = useState("React JS");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  const nextProject = () => setProjectIndex((i) => (i + 1) % projects.length);
  const prevProject = () => setProjectIndex((i) => (i - 1 + projects.length) % projects.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />

      <header className="nav">
        <a className="brand" href="#top">SA<span>.</span></a>
        <nav className="desktop-nav">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-github" href={profile.github} target="_blank" rel="noreferrer">
          <Github size={17} /> GitHub
        </a>
        <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="close-btn" onClick={() => setMenuOpen(false)}><X /></button>
            {["work", "stack", "experience", "credentials", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-grid">
            <div className="hero-copy">
              <motion.div className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="status-dot" /> FULL STACK DEVELOPER
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .8 }}>
                Building <em>useful</em><br />software with<br />a human touch.
              </motion.h1>
              <motion.p className="hero-lead" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}>
                {profile.summary}
              </motion.p>
              <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .38 }}>
                <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
                <a className="button button-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                  <Download size={17} /> Resume
                </a>
              </motion.div>
              <div className="hero-contact-row">
                <span><MapPin size={14} /> {profile.location}</span>
                <a href={`mailto:${profile.email}`}><Mail size={14} /> {profile.email}</a>
              </div>
            </div>

            <motion.div className="hero-orb" initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: 1.1 }}>
              <div className="orb-ring ring-one" /><div className="orb-ring ring-two" />
              <div className="orb-core"><Sparkles size={30} /></div>
              <div className="orb-label label-one">REACT</div><div className="orb-label label-two">JAVA</div><div className="orb-label label-three">AWS</div>
            </motion.div>
          </div>

          {/* <div className="hero-stats">
            <Stat value="1+" label="YEAR EXPERIENCE" />
          </div> */}

          <a className="scroll-hint" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
        </section>

        <section className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>REACT JS</span><i>✦</i><span>JAVA</span><i>✦</i><span>LLM / GEMINI</span><i>✦</i><span>AWS</span><i>✦</i><span>JENKINS</span><i>✦</i><span>ARGO CD</span><i>✦</i>
            <span>REACT JS</span><i>✦</i><span>JAVA</span><i>✦</i><span>LLM / GEMINI</span><i>✦</i><span>AWS</span><i>✦</i><span>JENKINS</span><i>✦</i><span>ARGO CD</span>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <SectionHeading number="01" kicker="SELECTED WORK" title={<>Projects with a<br /><em>point of view.</em></>} />
          <div className="project-stage">
            <div className="project-image-wrap">
              <AnimatePresence mode="wait">
                <motion.img
                  key={projects[projectIndex].id}
                  src={projects[projectIndex].image}
                  alt={projects[projectIndex].title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55 }}
                  style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
                />
              </AnimatePresence>
              <div className="image-overlay" />
              <div className="project-number">{projects[projectIndex].id} / 0{projects.length}</div>
            </div>
            <div className="project-info">
              <AnimatePresence mode="wait">
                <motion.div key={projects[projectIndex].id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className={`project-category ${projects[projectIndex].accent}`}>{projects[projectIndex].category}</div>
                  <h3>{projects[projectIndex].title}</h3>
                  <p>{projects[projectIndex].description}</p>
                  <div className="tag-list">{projects[projectIndex].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <a href={projects[projectIndex].github} target="_blank" rel="noreferrer">Repository <Github size={17} /></a>
                    {projects[projectIndex].live !== "#" && <a href={projects[projectIndex].live} target="_blank" rel="noreferrer">Live project <ExternalLink size={17} /></a>}
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="project-controls">
                <button onClick={prevProject} aria-label="Previous project"><ChevronLeft /></button>
                <button onClick={nextProject} aria-label="Next project"><ChevronRight /></button>
              </div>
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="section-pad">
            <p className="statement-kicker">THE WAY I WORK</p>
            <h2>From <span>component architecture</span> to cloud workflows, I like understanding the system from interface to deployment.</h2>
          </div>
        </section>

        <section id="stack" className="stack section-pad">
          <SectionHeading number="02" kicker="TECHNOLOGY" title={<>A stack built around<br /><em>shipping end to end.</em></>} />
          <div className="stack-layout">
            <div className="tech-orbit">
              <div className="tech-center">{activeTech}</div>
              {technologies.map((tech, i) => {
                const angle = (i / technologies.length) * Math.PI * 2;
                const radius = 175;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <button key={tech.name} className={`tech-node ${activeTech === tech.name ? "active" : ""}`}
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    onClick={() => setActiveTech(tech.name)}>
                    <tech.icon size={15} /> {tech.name}
                  </button>
                );
              })}
            </div>
            <div className="tech-detail">
              <span className="eyebrow">SELECTED TECHNOLOGY</span>
              <h3>{activeTech}</h3>
              <p>
                {technologies.find(t => t.name === activeTech)?.group}.
              </p>
              <div className="skill-meter"><span style={{ width: "82%" }} /></div>
            </div>
          </div>

          <div className="skill-groups">
            {skillGroups.map(group => (
              <div className="skill-group" key={group.title}>
                <span className="eyebrow">{group.title}</span>
                <div>{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>

          {/* <div className="current-tooling">
            <div>
              <span className="eyebrow">CURRENTLY WORKING WITH</span>
              <p>Production tooling and AWS services used in my current corporate work.</p>
            </div>
            <div className="current-tool-list">
              {["GitHub Tools", "Jenkins Pipelines", "Argo CD", "AWS DynamoDB", "AWS SQS", "AWS SES"].map(tool => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div> */}
        </section>

        <section id="experience" className="experience section-pad">
          <SectionHeading number="03" kicker="EXPERIENCE" title={<>Building across<br /><em>product and infrastructure.</em></>} />
          <div className="timeline">
            {experience.map((item, index) => (
              <motion.article className="timeline-item" key={item.company}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" />
                <div>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.text}</p>
                  <ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="credentials" className="credentials section-pad">
          <SectionHeading number="04" kicker="CREDENTIALS" title={<>Proof of learning,<br /><em>practice and curiosity.</em></>} />

          <div className="credential-grid">
            {certifications.map((cert, i) => (
              <motion.article className={`credential-card ${cert.image ? "has-image" : ""}`} key={cert.title}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .05 }}>
                {cert.image && <img src={cert.image} alt={`${cert.title} certificate`} />}
                <div className="credential-body">
                  <div className="credential-top"><Award size={18} /><span>{cert.type}</span></div>
                  <h3>{cert.title}</h3>
                  <strong>{cert.issuer}</strong>
                  <p>{cert.description}</p>
                  <div className="credential-meta"><span><CalendarDays size={14} /> {cert.date}</span>{cert.credential && <span>ID: {cert.credential}</span>}</div>
                  {cert.image && <a className="text-link" href={cert.image} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={15} /></a>}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="coding-profiles">
            <div className="profile-card">
              <div className="profile-icon"><Code2 /></div>
              <div><span className="eyebrow">CODING PROFILE</span><h3>LeetCode</h3><p>Problem-solving profile.</p></div>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" className="round-link"><ArrowUpRight /></a>
            </div>
            <div className="profile-card">
              <div className="profile-icon"><Github /></div>
              <div><span className="eyebrow">SOURCE CODE</span><h3>GitHub</h3><p>Projects, development history and code behind the work shown here.</p></div>
              <a href={profile.github} target="_blank" rel="noreferrer" className="round-link"><ArrowUpRight /></a>
            </div>
          </div>
        </section>

        <section className="education section-pad">
          <SectionHeading number="05" kicker="EDUCATION" title={<>The foundation<br /><em>behind the craft.</em></>} />
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <span className="eyebrow">{item.date}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <strong>{item.result}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="github-section section-pad">
          <div className="github-card">
            <div>
              <div className="eyebrow"><Github size={16} /> OPEN SOURCE / GITHUB</div>
              <h2>Code is where<br /><em>the proof lives.</em></h2>
              <p>Explore repositories and the engineering work behind this portfolio.</p>
              <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={18} /></a>
            </div>
            <div className="contribution-grid" aria-hidden="true">
              {Array.from({ length: 98 }).map((_, i) => <span key={i} className={`cell level-${(i * 7) % 5}`} />)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact-inner">
            <span className="eyebrow">06 / CONTACT</span>
            <h2>Let's build<br /><em>something useful.</em></h2>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight /></a>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer"><Trophy /> LeetCode</a>
              <a href={profile.resume} target="_blank" rel="noreferrer"><FileText /> Resume</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <span>© 2026 SOUMYA AGRAWAL</span>
        <span>REACT · MOTION · FULL STACK</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

function Stat({ value, label }) {
  return <div className="stat"><strong>{value}</strong><span>{label}</span></div>;
}

function SectionHeading({ number, kicker, title }) {
  return (
    <div className="section-heading">
      <div><span className="section-number">{number}</span><span className="eyebrow">{kicker}</span></div>
      <h2>{title}</h2>
    </div>
  );
}

export default App;
