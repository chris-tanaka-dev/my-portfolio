import { MdCalendarToday, MdLocationOn, MdEmojiEvents, MdRocketLaunch } from 'react-icons/md';
import JsonLd from '@/components/common/JsonLd';

import PageWrapper from '../../components/common/PageWrapper';
import { experienceData, educationData, aboutSkillCategories } from '../../lib/data/about';
import { renderIcon, renderBrandIcon } from '../../lib/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Christopher Tanaka',
  description:
    'Professional experience, education, and technical strengths of Christopher Tanaka, Senior Software Engineer.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: '/about',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/twitter-image'],
  },
};

export const dynamic = 'force-dynamic';

const About = () => {
  const exps = experienceData.map((e) => ({
    ...e,
    icon: renderBrandIcon(e.logoName, 'w-8 h-8'),
  }));
  const edus = educationData.map((e) => ({
    ...e,
    icon: renderBrandIcon(e.logoName, 'w-8 h-8'),
  }));
  const skillCategories = aboutSkillCategories.map((c) => ({
    ...c,
    icon: renderIcon(c.iconName, 'w-8 h-8'),
  }));
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const email = 'christophertanaka42@gmail.com';
  const phone = '425-565-3249';
  const website = 'https://himalayas.app/@christophertanaka';

  return (
    <PageWrapper>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Christopher Tanaka',
          jobTitle: 'Senior Software Engineer',
          url: `${baseUrl}/about`,
          email: `mailto:${email}`,
          telephone: phone,
          sameAs: [website],
          alumniOf: educationData.map((e) => ({
            '@type': 'CollegeOrUniversity',
            name: e.institution,
          })),
          worksFor: experienceData.map((e) => ({ '@type': 'Organization', name: e.company })),
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
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center gradient-bg">
              <MdRocketLaunch className="w-6 h-6 on-gradient" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">About Me</h1>
          </div>

          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            A seasoned software engineer with 12+ years of experience building innovative solutions
            at the intersection of AI, real-time systems, and collaborative tools.
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

      {/* Experience Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Professional Experience
            </h2>
            <p className="text-[var(--muted)] text-lg">Building impactful solutions at scale</p>
          </div>

          <div className="space-y-12">
            {exps.map((exp) => (
              <div key={`${exp.company}-${exp.title}`} className="group">
                <div className="glass-card p-8 rounded-3xl border border-[var(--border)] shadow-2xl hover:border-[var(--border-strong)] transition-all duration-500 hover:scale-[1.02]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Company Info */}
                    <div className="text-center lg:text-left">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${exp.gradient} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <div className="on-gradient">{exp.icon}</div>
                      </div>

                      <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                        {exp.company}
                      </h3>
                      <h4 className="text-xl font-semibold gradient-text mb-2">{exp.title}</h4>
                      <p className="text-[var(--muted)] mb-4">{exp.description}</p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-2 rounded-full border border-[var(--glass-border)]">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-2 rounded-full border border-[var(--glass-border)]">
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
                            <span className="text-[var(--muted)] leading-relaxed">{bullet}</span>
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
            <p className="text-[var(--muted)] text-lg">
              Strong academic foundation from world-class institutions
            </p>
          </div>

          <div className="space-y-12">
            {edus.map((edu) => (
              <div key={`${edu.degree}-${edu.institution}`} className="group">
                <div className="glass-card p-8 rounded-3xl border border-[var(--border)] shadow-2xl hover:border-[var(--border-strong)] transition-all duration-500 hover:scale-[1.02]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Education Info */}
                    <div className="text-center lg:text-left">
                      <div
                        className={`w-24 h-24 bg-gradient-to-br ${edu.gradient} rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <div className="on-gradient">{edu.icon}</div>
                      </div>

                      <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-semibold gradient-text mb-4">
                        {edu.institution}
                      </h4>

                      <div className="space-y-3">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-2 rounded-full border border-[var(--glass-border)]">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-2 rounded-full border border-[var(--glass-border)]">
                          <MdLocationOn className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Education Details */}
                    <div className="lg:col-span-2">
                      <p className="text-[var(--muted)] leading-relaxed text-lg mb-6">
                        {edu.description}
                      </p>

                      <div>
                        <h5 className="text-lg font-semibold text-[var(--foreground)] mb-4 flex items-center space-x-2">
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
                              <span className="text-[var(--muted)]">{achievement}</span>
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
            <p className="text-[var(--muted)] text-lg">
              Comprehensive toolkit of modern technologies and methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="group">
                <div className="glass-card p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-300 group hover:scale-105">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="on-gradient">{category.icon}</div>
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4 text-center">
                    {category.title}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--muted)] text-sm leading-relaxed">{skill}</span>
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
          <div className="glass-card p-12 rounded-3xl border border-[var(--border)]">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
              Let&apos;s collaborate on your next project and bring your vision to life with
              cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring gradient-bg"
              >
                Get In Touch
              </a>
              <a
                href="/skills"
                className="px-8 py-4 glass-card border border-[var(--border)] hover:border-[var(--border-strong)] rounded-2xl text-[var(--foreground)] font-semibold text-lg transition-all duration-300 focus-ring"
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
