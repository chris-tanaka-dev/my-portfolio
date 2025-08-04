import Section from '../../components/common/Section';
import PageWrapper from '../../components/common/PageWrapper';
import SkillList from '../../components/features/Skills/SkillList';

const Skills = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-24">
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
      </div>
    </PageWrapper>
  );
};

export default Skills;
