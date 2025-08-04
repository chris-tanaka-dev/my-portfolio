import Section from '../../components/common/Section';
import PageWrapper from '../../components/common/PageWrapper';
import ExperienceCard from '../../components/features/Experience/ExperienceCard';

const Experience = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-24">
        <Section id="experience" title="Experience">
          <div className="flex flex-col gap-8">
            <ExperienceCard
              company="FoxyAI"
              title="Senior Software Engineer"
              period="Dec 2023 - Present"
              bullets={[
                'Built and maintained React/TypeScript dashboards to visualize AI-powered Visual Property Intelligence - including Condition Scores, Quality Scores, object/damage detection, renovation forecasts, and 360° Property Valuations via FoxyAI APIs.',
                'Integrated a multimodal, GPT-powered Advanced Search feature, enabling intuitive image-and-text search across large-scale property datasets.',
                'Optimized Canvas/WebGL rendering pipelines to reduce frontend latency and deliver responsive, high-resolution model outputs.',
                'Developed full-stack flows from image ingestion through AI inference to visual output, ensuring speed, reliability, and product alignment.',
                "Designed and implemented a subscription and payment system using Foxy's hosted checkout powered by Stripe, with a customer portal for plan management, invoices, and billing methods.",
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
                'Scaled performance testing infrastructure from a single MacBook to a dual-system CI pipeline with GPU-accelerated VMs and hardware testing rigs - enabling performance guardrails under 10-minute pulls with detailed profiling.',
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
                'Delivered modular client-facing products with consistent 5x ROI within 6-8 weeks, accelerating enterprise decision-making and operational efficiency.',
                'Partnered with domain experts across finance, retail, and logistics, translating business needs into polished, production-grade frontend experiences.',
              ]}
            />
            <ExperienceCard
              company="Google"
              title="Software Engineer"
              period="May 2013 - Nov 2016"
              bullets={[
                'Joined as a Software Engineering Intern, collaborating on production projects and delivering feature work under mentorship over a 12-week period.',
                'Transitioned to a full-time Software Engineer after internship conversion, demonstrating strong ownership and performance early on.',
                'Developed internal web tools and A/B experimentation infrastructure using AngularJS and Java to support high-volume advertiser platforms.',
                'Collaborated across product and analytics teams to build scalable UI components and experimentation frameworks, accelerating engineering velocity.',
              ]}
            />
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
};

export default Experience;
