import Link from 'next/link';
import { MdAutoAwesome, MdKeyboardArrowDown } from 'react-icons/md';

import JsonLd from '@/components/common/JsonLd';

import PageWrapper from '../components/common/PageWrapper';
import ProfileAvatar from '../components/features/Home/ProfileAvatar';
import { homeHighlights, homeStats } from '../lib/data/home';
import { renderIcon } from '../lib/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Christopher Tanaka',
  description:
    'Senior Software Engineer building low-latency, AI-powered products. Explore highlights, experience, and core skills.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/twitter-image'],
  },
};

const Home = () => {
  const highlights = homeHighlights.map((h) => ({
    ...h,
    // Use theme token for icon color
    icon: renderIcon(h.iconName, 'w-8 h-8 text-[var(--foreground)]'),
  }));
  const stats = homeStats;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return (
    <PageWrapper>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: baseUrl,
          name: 'Christopher Tanaka | Senior Software Engineer',
          inLanguage: 'en-US',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Christopher Tanaka',
          url: baseUrl,
          jobTitle: 'Senior Software Engineer',
          sameAs: [
            // Add your profiles if available
            // 'https://www.linkedin.com/in/USERNAME',
            // 'https://github.com/USERNAME',
          ],
        }}
      />
      {/* Hero Section */}
      <section
        className="relative min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="home-hero-title"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {[
            {
              key: 'top-left',
              delay: 0,
              className:
                'top-20 left-6 md:left-20 w-56 md:w-72 h-56 md:h-72 from-indigo-500/20 to-purple-600/20',
            },
            {
              key: 'bottom-right',
              delay: 2,
              className:
                'bottom-20 right-6 md:right-20 w-72 md:w-96 h-72 md:h-96 from-purple-500/20 to-pink-600/20',
            },
            {
              key: 'center',
              delay: 4,
              className:
                'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 from-blue-500/10 to-cyan-500/10',
            },
          ].map((b) => (
            <div
              key={b.key}
              className={`absolute bg-gradient-to-br ${b.className} rounded-full blur-3xl animate-float`}
              style={{ animationDelay: `${b.delay}s` }}
            />
          ))}
        </div>

        {/* Main Content */}
        <header className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Profile Avatar */}
          <ProfileAvatar />

          {/* Headline & Summary */}
          <div className="mt-10 md:mt-12 max-w-4xl mx-auto">
            <h1 id="home-hero-title" className="text-3xl md:text-5xl font-bold tracking-tight">
              Building low-latency, AI-powered products
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-[var(--muted)] leading-relaxed animate-fade-in-scale">
              Senior Software Engineer with{' '}
              <span className="gradient-text font-semibold">12+ years </span>
              delivering real-time collaboration, high-performance UI, and production ML
              integrations for customer-facing products.
            </p>
            <div className="mt-4 flex justify-center">
              <span
                aria-label="Open to remote work"
                className="text-xs md:text-sm text-[var(--muted)] px-3 py-1 rounded-full border bg-[var(--glass-bg)] border-[var(--glass-border)]"
              >
                Open to remote work
              </span>
            </div>
          </div>

          {/* Key Highlights */}
          <div
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            aria-label="Key strengths"
          >
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="glass-card p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-300 group hover:scale-[1.02]"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <div className="on-gradient">{highlight.icon}</div>
                </div>
                <h2 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  {highlight.title}
                </h2>
                <p className="text-[var(--muted)] text-sm">{highlight.description}</p>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 md:mt-16 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring gradient-bg"
                aria-label="Contact me"
              >
                <span className="flex items-center gap-2">
                  <span>Start a project</span>
                  <MdAutoAwesome className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="/about"
                className="group px-8 py-4 glass-card border border-[var(--border)] hover:border-[var(--border-strong)] rounded-2xl text-[var(--foreground)] font-semibold text-lg transition-all duration-300 focus-ring"
                aria-label="View experience"
              >
                <span className="flex items-center gap-2">
                  <span>View experience</span>
                  <MdKeyboardArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </header>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 rounded-full flex justify-center border-[var(--border)]">
            <div className="w-1 h-3 rounded-full mt-2 animate-pulse bg-[var(--foreground)]/60"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 md:py-20 relative" aria-labelledby="quick-stats-title">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="quick-stats-title" className="sr-only">
            Key stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--muted)] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights (no duplication, concise) */}
      <section className="py-12 md:py-16" aria-labelledby="experience-highlights-title">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="experience-highlights-title" className="text-xl md:text-2xl font-semibold mb-6">
            Recent Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="glass-card p-6 rounded-2xl border border-[var(--border)]">
              <header className="mb-4">
                <h3 className="text-lg font-semibold">Senior Software Engineer @ FoxyAI</h3>
                <p className="text-[var(--muted)] text-sm">Dec 2023 – Aug 2025</p>
              </header>
              <ul className="text-[var(--muted)] text-sm space-y-2 list-disc list-inside">
                <li>
                  Built React/TypeScript dashboards for Visual Property Intelligence (scores,
                  detections, valuations).
                </li>
                <li>Launched GPT-powered multimodal search across large property datasets.</li>
                <li>Optimized Canvas/WebGL pipelines to reduce UI latency and improve fidelity.</li>
              </ul>
            </article>
            <article className="glass-card p-6 rounded-2xl border border-[var(--border)]">
              <header className="mb-4">
                <h3 className="text-lg font-semibold">Senior Full-Stack Engineer @ Figma</h3>
                <p className="text-[var(--muted)] text-sm">May 2019 – Dec 2023</p>
              </header>
              <ul className="text-[var(--muted)] text-sm space-y-2 list-disc list-inside">
                <li>
                  Engineered real-time multiplayer editing (WebSockets, OT/CRDT-inspired, WASM
                  perf).
                </li>
                <li>
                  Cut render latency 30%+ via Canvas pipeline and resource usage optimizations.
                </li>
                <li>Scaled perf testing to GPU-accelerated CI with robust profiling guardrails.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Skills Overview (compact, scannable) */}
      <section className="py-12 md:py-16" aria-labelledby="skills-overview-title">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="skills-overview-title" className="text-xl md:text-2xl font-semibold mb-6">
            Core Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-5 rounded-2xl border border-[var(--border)]">
              <h3 className="font-semibold mb-3">Frontend & Rendering</h3>
              <div className="flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                <span className="glass px-2 py-1 rounded-md">React</span>
                <span className="glass px-2 py-1 rounded-md">TypeScript</span>
                <span className="glass px-2 py-1 rounded-md">Next.js</span>
                <span className="glass px-2 py-1 rounded-md">Canvas</span>
                <span className="glass px-2 py-1 rounded-md">WebGL</span>
                <span className="glass px-2 py-1 rounded-md">WASM</span>
              </div>
            </div>
            <div className="glass-card p-5 rounded-2xl border border-[var(--border)]">
              <h3 className="font-semibold mb-3">Backend & Realtime</h3>
              <div className="flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                <span className="glass px-2 py-1 rounded-md">Node.js</span>
                <span className="glass px-2 py-1 rounded-md">Python</span>
                <span className="glass px-2 py-1 rounded-md">Express</span>
                <span className="glass px-2 py-1 rounded-md">GraphQL/REST</span>
                <span className="glass px-2 py-1 rounded-md">WebSockets</span>
                <span className="glass px-2 py-1 rounded-md">Stripe</span>
              </div>
            </div>
            <div className="glass-card p-5 rounded-2xl border border-[var(--border)]">
              <h3 className="font-semibold mb-3">AI & Visualization</h3>
              <div className="flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                <span className="glass px-2 py-1 rounded-md">GPT UX</span>
                <span className="glass px-2 py-1 rounded-md">Computer Vision</span>
                <span className="glass px-2 py-1 rounded-md">TensorFlow integ.</span>
                <span className="glass px-2 py-1 rounded-md">D3.js</span>
                <span className="glass px-2 py-1 rounded-md">Dashboards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work (behavioral & cultural) */}
      <section className="py-12 md:py-16" aria-labelledby="how-i-work-title">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="how-i-work-title" className="text-xl md:text-2xl font-semibold mb-6">
            How I work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--foreground)]">
                Product-first delivery
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Partner closely with design and PM to ship high-impact features quickly and iterate
                with real user feedback.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--foreground)]">Performance mindset</h3>
              <p className="text-sm text-[var(--muted)]">
                Profile, measure, and optimize—real-time, low-latency UI and scalable systems are my
                default.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--foreground)]">Ownership & quality</h3>
              <p className="text-sm text-[var(--muted)]">
                End-to-end responsibility from data to UI; raise the bar on reliability,
                accessibility, and maintainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16" aria-labelledby="cta-title">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 id="cta-title" className="text-xl md:text-2xl font-semibold">
            Let’s build something great
          </h2>
          <p className="text-[var(--muted)] mt-2 text-sm md:text-base">
            Open to Senior/Staff Frontend or Full-Stack roles focused on real-time, AI, or complex
            UI.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring gradient-bg"
              aria-label="Contact me"
            >
              <span className="flex items-center gap-2">
                <span>Get in touch</span>
              </span>
            </Link>
            <Link
              href="/about"
              className="group px-8 py-4 glass-card border border-[var(--border)] hover:border-[var(--border-strong)] rounded-2xl text-[var(--foreground)] font-semibold text-lg transition-all duration-300 focus-ring"
              aria-label="View experience"
            >
              <span className="flex items-center gap-2">
                <span>See experience</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
