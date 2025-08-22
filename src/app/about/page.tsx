import {
  MdWork,
  MdCalendarToday,
  MdLocationOn,
  MdStar,
  MdSchool,
  MdBook,
  MdEmojiEvents,
  MdRocketLaunch,
  MdCode,
  MdPsychology,
  MdStorage,
  MdCloud,
} from 'react-icons/md';
import PageWrapper from '../../components/common/PageWrapper';

const About = () => {
  const experienceData = [
    {
      company: 'FoxyAI',
      title: 'Senior Software Engineer',
      period: 'Dec 2023 - Present',
      location: 'Remote',
      description: 'PropTech Innovation - Building AI-powered Visual Property Intelligence systems',
      bullets: [
        'Built React/TypeScript dashboards for AI-powered Visual Property Intelligence including Condition Scores, Quality Scores, object/damage detection, renovation forecasts, and 360° Property Valuations',
        'Integrated multimodal, GPT-powered Advanced Search feature enabling intuitive image-and-text search across large-scale property datasets',
        'Optimized Canvas/WebGL rendering pipelines reducing frontend latency and delivering responsive, high-resolution model outputs',
        'Developed full-stack flows from image ingestion through AI inference to visual output ensuring speed, reliability, and product alignment',
        'Designed subscription and payment system using Stripe with customer portal for plan management, invoices, and billing methods',
        'Collaborated across teams to build Quality Control module reducing manual review time by ~50% for inspection and lending workflows',
      ],
      gradient: 'from-indigo-500 to-purple-600',
      icon: <MdWork className="w-8 h-8" />,
    },
    {
      company: 'Figma',
      title: 'Senior Full-Stack Engineer',
      period: 'May 2019 - Dec 2023',
      location: 'San Francisco, CA',
      description:
        'Design Collaboration Platform - Scaling real-time multiplayer editing infrastructure',
      bullets: [
        'Engineered real-time multiplayer editing infrastructure leveraging WebSockets, custom sync logic (OT/CRDT-inspired), and WebAssembly-based performance components',
        'Led Canvas rendering optimizations reducing load and render latency by 30%+ through refactoring rendering pipelines and minimizing redraws',
        'Built robust front-end and backend services (Node.js, Python, React/TypeScript) powering collaborative Canvas UI updates and conflict resolution',
        'Scaled performance testing infrastructure from single MacBook to dual-system CI pipeline with GPU-accelerated VMs enabling performance guardrails under 10-minute pulls',
        'Helped shape design-system collaboration tools and workflows pairing closely with product and design teams to resolve nuanced UX conflicts',
      ],
      gradient: 'from-purple-500 to-pink-600',
      icon: <MdStar className="w-8 h-8" />,
    },
    {
      company: 'ElectrifAi',
      title: 'Senior Frontend Engineer',
      period: 'Dec 2016 - Apr 2019',
      location: 'New York, NY',
      description: 'Enterprise AI Solutions - Building AI/ML-powered analytics interfaces',
      bullets: [
        'Built React/TypeScript dashboards transforming AI/ML outputs (CV, NLP) into clear analytics interfaces for Spend, Demand Forecasting, and Contract Analytics',
        'Integrated backend pipelines (Spark, Kubernetes, Python) to consume ML-driven APIs supporting corporate spend visibility and contract insights',
        'Delivered modular client-facing products with consistent 5x ROI within 6-8 weeks accelerating enterprise decision-making and operational efficiency',
        'Partnered with domain experts across finance, retail, and logistics translating business needs into polished, production-grade frontend experiences',
      ],
      gradient: 'from-pink-500 to-red-600',
      icon: <MdWork className="w-8 h-8" />,
    },
    {
      company: 'Google',
      title: 'Software Engineer',
      period: 'May 2013 - Nov 2016',
      location: 'Mountain View, CA',
      description: 'Search & Advertising - Internal tools and experimentation infrastructure',
      bullets: [
        'Joined as Software Engineering Intern collaborating on production projects and delivering feature work under mentorship over 12-week period',
        'Transitioned to full-time Software Engineer after internship conversion demonstrating strong ownership and performance early on',
        'Developed internal web tools and A/B experimentation infrastructure using AngularJS and Java to support high-volume advertiser platforms',
        'Collaborated across product and analytics teams to build scalable UI components and experimentation frameworks accelerating engineering velocity',
      ],
      gradient: 'from-red-500 to-orange-600',
      icon: <MdStar className="w-8 h-8" />,
    },
  ];

  const educationData = [
    {
      degree: "Master's degree in Computer Science",
      institution: 'University of Tokyo',
      period: 'Apr 2011 - Mar 2013',
      location: 'Tokyo, Japan',
      description:
        'Advanced studies in algorithms, machine learning, and software engineering. Research focused on distributed systems and performance optimization.',
      achievements: [
        'Graduated with honors',
        'Published 2 research papers',
        'Teaching assistant for Data Structures',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      icon: <MdSchool className="w-8 h-8" />,
    },
    {
      degree: "Bachelor's degree in Computer Science",
      institution: 'University of Tokyo',
      period: 'Apr 2007 - Mar 2011',
      location: 'Tokyo, Japan',
      description:
        'Comprehensive foundation in computer science fundamentals, mathematics, and programming. Active participation in coding competitions and hackathons.',
      achievements: [
        "Dean's List recipient",
        'Computer Science Society President',
        '3rd place in ACM Programming Contest',
      ],
      gradient: 'from-purple-500 to-pink-500',
      icon: <MdBook className="w-8 h-8" />,
    },
  ];

  const skillCategories = [
    {
      icon: <MdCode className="w-8 h-8" />,
      title: 'Frontend & UI Development',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        'JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS',
        'React, Next.js, Redux, Context API, Zustand, Storybook, Material UI, TailwindCSS',
        'Canvas API, WebGL, SVG, WebAssembly, WebSockets, WebRTC',
      ],
    },
    {
      icon: <MdStorage className="w-8 h-8" />,
      title: 'Backend & APIs',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        'Node.js, Express.js, Python, C#, Ruby on Rails',
        'REST, GraphQL, AI/ML/CV model endpoints, real-time services (WebSockets)',
      ],
    },
    {
      icon: <MdPsychology className="w-8 h-8" />,
      title: 'AI/ML & Data Visualization',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        'TensorFlow integration, NLP/CV model pipelines',
        'D3.js, financial time-series analysis, interactive dashboards',
        'GPT-powered multimodal search, Visual Property Intelligence UIs',
      ],
    },
    {
      icon: <MdCloud className="w-8 h-8" />,
      title: 'DevOps & Infrastructure',
      gradient: 'from-orange-500 to-red-500',
      skills: [
        'Docker, Kubernetes, AWS (EC2, ELB, Redis), serverless',
        'CI/CD pipelines (Jenkins, GitHub Actions), Storybook snapshot testing',
        'Build tools: Webpack, Babel, npm/Yarn, Vite',
      ],
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <MdRocketLaunch className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">About Me</h1>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A seasoned software engineer with 12+ years of experience building innovative solutions
            at the intersection of AI, real-time systems, and collaborative tools.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Professional Experience
            </h2>
            <p className="text-gray-300 text-lg">Building impactful solutions at scale</p>
          </div>

          <div className="space-y-12">
            {experienceData.map((exp) => (
              <div key={`${exp.company}-${exp.title}`} className="group">
                <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Company Info */}
                    <div className="text-center lg:text-left">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${exp.gradient} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <div className="text-white">{exp.icon}</div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                      <h4 className="text-xl font-semibold gradient-text mb-2">{exp.title}</h4>
                      <p className="text-gray-400 mb-4">{exp.description}</p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                          <MdLocationOn className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:col-span-2">
                      <div className="space-y-4">
                        {exp.bullets.map((bullet, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 animate-slide-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">Education</h2>
            <p className="text-gray-300 text-lg">
              Strong academic foundation from world-class institutions
            </p>
          </div>

          <div className="space-y-12">
            {educationData.map((edu) => (
              <div key={`${edu.degree}-${edu.institution}`} className="group">
                <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Education Info */}
                    <div className="text-center lg:text-left">
                      <div
                        className={`w-24 h-24 bg-gradient-to-br ${edu.gradient} rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <div className="text-white">{edu.icon}</div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <h4 className="text-xl font-semibold gradient-text mb-4">
                        {edu.institution}
                      </h4>

                      <div className="space-y-3">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                          <MdLocationOn className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Education Details */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        {edu.description}
                      </p>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                          <MdEmojiEvents className="w-5 h-5 text-yellow-400" />
                          <span>Key Achievements</span>
                        </h5>
                        <div className="space-y-3">
                          {edu.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3 animate-slide-up"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                              <span className="text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">Technical Skills</h2>
            <p className="text-gray-300 text-lg">
              Comprehensive toolkit of modern technologies and methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="group">
                <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{category.icon}</div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-4 text-center">
                    {category.title}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm leading-relaxed">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card p-12 rounded-3xl border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let&apos;s collaborate on your next project and bring your vision to life with
              cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring"
              >
                Get In Touch
              </a>
              <a
                href="/skills"
                className="px-8 py-4 glass-card border border-white/20 rounded-2xl text-white font-semibold text-lg hover:border-white/40 transition-all duration-300 focus-ring"
              >
                View Full Skills
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
