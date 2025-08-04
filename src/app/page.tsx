import Section from '../components/common/Section';
import PageWrapper from '../components/common/PageWrapper';
import ProfileAvatar from '../components/features/Home/ProfileAvatar';

const Home = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-24">
        <Section id="home">
          <ProfileAvatar />
          <p className="max-w-2xl mx-auto mt-6 text-gray-700 dark:text-gray-100 text-base sm:text-lg animate-fade-in-slow">
            Senior Software Engineer with 12 years of experience building low-latency, AI-powered
            systems and collaborative tools. Proven impact scaling real-time editing at Figma and
            driving high-performance PropTech interfaces at FoxyAI. Strong collaborator and mentor
            with a record of aligning product-driven engineering across both startups and enterprise
            settings. Eager to take on complex, high-velocity engineering challenges - optimizing
            systems, integrating AI interfaces, and working deeply across product and technical
            teams.
          </p>
        </Section>
      </div>
    </PageWrapper>
  );
};

export default Home;
