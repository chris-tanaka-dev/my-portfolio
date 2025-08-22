import {
  MdFlashOn,
  MdCode,
  MdPsychology,
  MdStorage,
  MdCloud,
  MdRocketLaunch,
  MdPalette,
  MdSecurity,
} from 'react-icons/md';
import PageWrapper from '../../components/common/PageWrapper';
import SkillList from '../../components/features/Skills/SkillList';

const Skills = () => {
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
    {
      icon: <MdSecurity className="w-8 h-8" />,
      title: 'Databases & Persistence',
      gradient: 'from-indigo-500 to-purple-500',
      skills: ['PostgreSQL, MongoDB, Redis'],
    },
    {
      icon: <MdRocketLaunch className="w-8 h-8" />,
      title: 'Performance & Tooling',
      gradient: 'from-pink-500 to-rose-500',
      skills: [
        'Profiling & optimization: Lighthouse, Chrome tracing, virtualized lists',
        'Skillful in Git workflows, cross-browser debugging, responsive design',
      ],
    },
  ];

  const proficiencyLevels = [
    { name: 'Frontend', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', level: 90, color: 'from-purple-500 to-pink-500' },
    { name: 'AI/ML', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'DevOps', level: 80, color: 'from-orange-500 to-red-500' },
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
              <MdFlashOn className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">Technical Arsenal</h1>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies, frameworks, and methodologies that power
            innovative solutions and drive exceptional user experiences.
          </p>
          <div className="mt-4 flex justify-center">
            <span
              aria-label="Open to remote work"
              className="text-xs md:text-sm text-gray-200 bg-white/5 px-3 py-1 rounded-full border border-white/10"
            >
              Open to remote work
            </span>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {skillCategories.map((category) => (
              <div key={category.title} className="group">
                <SkillList
                  icon={category.icon}
                  title={category.title}
                  gradient={category.gradient}
                  skills={category.skills}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency Overview */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Proficiency Levels
            </h2>
            <p className="text-gray-300 text-lg">Expertise across different technology domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proficiencyLevels.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-6 rounded-2xl border border-white/10 text-center group hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <MdPalette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{skill.name}</h3>

                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                  <div
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <div className="text-2xl font-bold gradient-text">{skill.level}%</div>
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
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring"
            >
              <span>Start a Project</span>
              <MdRocketLaunch className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;
