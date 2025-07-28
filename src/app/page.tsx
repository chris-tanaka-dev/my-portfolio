import Section from '../components/common/Section';
import ProfileAvatar from '../components/features/Home/ProfileAvatar';
import ExperienceCard from '../components/features/Experience/ExperienceCard';
import SkillList from '../components/features/Skills/SkillList';
import ContactInfo from '../components/features/Contact/ContactInfo';

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Section id="home">
        <ProfileAvatar />
        <p className="max-w-2xl mx-auto mt-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg animate-fade-in-slow">
          Senior Software Engineer with 12 years of experience building low-latency, AI-powered
          systems and collaborative tools. Proven impact scaling real-time editing at Figma and
          driving high-performance PropTech interfaces at FoxyAI. Strong collaborator and mentor
          with a record of aligning product-driven engineering across both startups and enterprise
          settings. Eager to take on complex, high-velocity engineering challenges—optimizing
          systems, integrating AI interfaces, and working deeply across product and technical teams.
        </p>
      </Section>

      <Section id="experience" title="Experience">
        <div className="flex flex-col gap-8">
          <ExperienceCard
            company="FoxyAI"
            title="Senior Software Engineer"
            period="Dec 2023 - Present"
            bullets={[
              'Built and maintained React/TypeScript dashboards to visualize AI-powered Visual Property Intelligence — including Condition Scores, Quality Scores, object/damage detection, renovation forecasts, and 360° Property Valuations via FoxyAI APIs.',
              'Integrated a multimodal, GPT-powered Advanced Search feature, enabling intuitive image-and-text search across large-scale property datasets.',
              'Optimized Canvas/WebGL rendering pipelines to reduce frontend latency and deliver responsive, high-resolution model outputs.',
              'Developed full-stack flows from image ingestion through AI inference to visual output, ensuring speed, reliability, and product alignment.',
              'Designed and implemented a subscription and payment system using Foxy’s hosted checkout powered by Stripe, with a customer portal for plan management, invoices, and billing methods.',
              'Collaborated across product, engineering, and domain teams to build a Quality Control module that reduced manual review time by ~50% for inspection and lending workflows.',
            ]}
          />
          <ExperienceCard
            company="Figma"
            title="Senior Full-Stack Engineer"
            period="May 2019 - Dec 2023"
            bullets={[
              'Engineered the real-time multiplayer editing infrastructure, leveraging WebSockets, custom sync logic (OT/CRDT-inspired), and WebAssembly-based performance components to support concurrency and consistency across users.',
              'Led Canvas rendering optimizations, reducing load and render latency by 30%+ through refactoring rendering pipelines, minimizing redraws, and improving browser resource usage.',
              'Built robust front-end and backend services (Node.js, Python, React/TypeScript) powering collaborative Canvas UI updates, conflict resolution, and state reconciliation across users.',
              'Scaled performance testing infrastructure from a single MacBook to a dual-system CI pipeline with GPU-accelerated VMs and hardware testing rigs—enabling performance guardrails under 10-minute pulls with detailed profiling.',
              'Helped shape design-system collaboration tools and workflows, pairing closely with product and design teams to resolve nuanced UX conflicts, maintaining consistent component libraries across design files and production codebase.',
            ]}
          />
          <ExperienceCard
            company="ElectrifAi"
            title="Senior Frontend Engineer"
            period="Dec 2016 - Apr 2019"
            bullets={[
              'Built React/TypeScript dashboards transforming AI/ML outputs (CV, NLP) into clear analytics interfaces for modules like Spend, Demand Forecasting, and Contract Analytics.',
              'Integrated backend pipelines (Spark, Kubernetes, Python) to consume ML-driven APIs supporting corporate spend visibility and contract insights.',
              'Delivered modular client-facing products with consistent 5× ROI within 6–8 weeks, accelerating enterprise decision-making and operational efficiency.',
              'Partnered with domain experts across finance, retail, and logistics, translating business needs into polished, production-grade frontend experiences.',
            ]}
          />
          <ExperienceCard
            company="Google"
            title="Software Engineer"
            period="May 2013 - Nov 2016"
            bullets={[
              'Joined as a Software Engineering Intern, collaborating on production projects and delivering feature work under mentorship over a 12‑week period.',
              'Transitioned to a full-time Software Engineer after internship conversion, demonstrating strong ownership and performance early on.',
              'Developed internal web tools and A/B experimentation infrastructure using AngularJS and Java to support high-volume advertiser platforms.',
              'Collaborated across product and analytics teams to build scalable UI components and experimentation frameworks, accelerating engineering velocity.',
            ]}
          />
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SkillList
            title="Frontend & UI Development"
            skills={[
              'JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS',
              'React, Next.js, Redux, Context API, Zustand, Storybook, Material UI, TailwindCSS',
              'Canvas API, WebGL, SVG, WebAssembly, WebSockets, WebRTC',
            ]}
          />
          <SkillList
            title="Backend & APIs"
            skills={[
              'Node.js, Express.js, Python, C#, Ruby on Rails',
              'REST, GraphQL, AI/ML/CV model endpoints, real-time services (WebSockets)',
            ]}
          />
          <SkillList
            title="AI/ML & Data Visualization"
            skills={[
              'TensorFlow integration, NLP/CV model pipelines',
              'D3.js, financial time-series analysis, interactive dashboards',
              'GPT-powered multimodal search, Visual Property Intelligence UIs',
            ]}
          />
          <SkillList
            title="DevOps & Infrastructure"
            skills={[
              'Docker, Kubernetes, AWS (EC2, ELB, Redis), serverless',
              'CI/CD pipelines (Jenkins, GitHub Actions), Storybook snapshot testing',
              'Build tools: Webpack, Babel, npm/Yarn, Vite',
            ]}
          />
          <SkillList title="Databases & Persistence" skills={['PostgreSQL, MongoDB, Redis']} />
          <SkillList
            title="Performance & Tooling"
            skills={[
              'Profiling & optimization: Lighthouse, Chrome tracing, virtualized lists',
              'Skillful in Git workflows, cross-browser debugging, responsive design',
            ]}
          />
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="flex flex-col gap-1 text-gray-700 dark:text-gray-300 animate-fade-in">
          <div>
            <span className="font-bold">Master’s degree in Computer Science</span>{' '}
            <span className="text-sm text-gray-500">Apr 2011 - Mar 2013</span>
          </div>
          <div>
            <span className="font-bold">Bachelor’s degree in Computer Science</span>{' '}
            <span className="text-sm text-gray-500">Apr 2007 - Mar 2011</span>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <ContactInfo />
      </Section>
    </div>
  );
}
