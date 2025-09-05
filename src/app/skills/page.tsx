import type { Metadata } from 'next';

import { MdFlashOn, MdPalette, MdRocketLaunch } from 'react-icons/md';

import JsonLd from '@/components/common/JsonLd';
import PageWrapper from '@/components/common/PageWrapper';
import SkillList from '@/components/features/Skills/SkillList';
import { proficiencyLevels, skillCategories as skillCategoriesData } from '@/lib/data/skills';
import { renderIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Skills | Christopher Tanaka',
  description:
    'Technical arsenal across frontend, backend, AI/ML, and DevOps. Explore categorized skills and proficiency levels.',
  alternates: {
    canonical: '/skills',
  },
  openGraph: {
    url: '/skills',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/twitter-image'],
  },
};

export const dynamic = 'force-dynamic';

const Skills = () => {
  const skillCategories = skillCategoriesData.map((c) => ({
    ...c,
    icon: renderIcon(c.iconName, 'w-8 h-8'),
  }));
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return (
    <PageWrapper>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Skills',
          url: `${baseUrl}/skills`,
          hasPart: skillCategories.map((c) => ({
            '@type': 'ItemList',
            name: c.title,
            itemListElement: c.skills.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: s,
            })),
          })),
        }}
      />
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
              <MdFlashOn className="w-6 h-6 on-gradient" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">Technical Arsenal</h1>
          </div>

          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies, frameworks, and methodologies that power
            innovative solutions and drive exceptional user experiences.
          </p>
          <div className="mt-4 flex justify-center">
            <span
              aria-label="Open to remote work"
              className="text-xs md:text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-1 rounded-full border border-[var(--glass-border)]"
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
            <p className="text-[var(--muted)] text-lg">
              Expertise across different technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proficiencyLevels.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-6 rounded-2xl border border-[var(--border)] text-center group hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <MdPalette className="w-8 h-8 on-gradient" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full bg-[var(--glass-bg)] rounded-full h-2 mb-2">
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
          <div className="glass-card p-12 rounded-3xl border border-[var(--border)]">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
              Let&apos;s collaborate on your next project and bring your vision to life with
              cutting-edge technology.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center space-x-2 px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring gradient-bg"
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
