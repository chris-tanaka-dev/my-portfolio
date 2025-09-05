import { MdSend, MdChat, MdCoffee } from 'react-icons/md';
import JsonLd from '@/components/common/JsonLd';

import PageWrapper from '../../components/common/PageWrapper';
import { contactMethods as contactMethodsData } from '../../lib/data/contact';
import { renderIcon } from '../../lib/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Christopher Tanaka',
  description:
    'Get in touch with Christopher Tanaka for projects, opportunities, or a quick coffee chat. Email, phone, and more.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: '/contact',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/twitter-image'],
  },
};

export const dynamic = 'force-dynamic';

const Contact = () => {
  const contactMethods = contactMethodsData.map((m) => ({
    ...m,
    icon: renderIcon(m.iconName, 'w-8 h-8'),
  }));
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const email = contactMethodsData.find((m) => m.title === 'Email')?.value;
  const phone = contactMethodsData.find((m) => m.title === 'Phone')?.value;

  return (
    <PageWrapper>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Christopher Tanaka',
          url: `${baseUrl}/contact`,
          contactPoint: [
            ...(email
              ? [
                  {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    email: `mailto:${email}`,
                    availableLanguage: ['English'],
                  },
                ]
              : []),
            ...(phone
              ? [
                  {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    telephone: phone,
                    availableLanguage: ['English'],
                  },
                ]
              : []),
          ],
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
              <MdChat className="w-6 h-6 on-gradient" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">Let&apos;s Connect</h1>
          </div>

          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            Ready to start a conversation? Whether you have a project in mind, want to discuss
            opportunities, or just want to say hello - I&apos;d love to hear from you.
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

      {/* Contact Methods Grid */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method) => (
              <div key={method.title} className="group">
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block glass-card p-6 rounded-2xl border border-[var(--border)] shadow-2xl hover:border-[var(--border-strong)] transition-all duration-500 group hover:scale-105 interactive-card h-full overflow-hidden"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="on-gradient">{method.icon}</div>
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:gradient-bg transition-all duration-300">
                    {method.title}
                  </h3>

                  <p className="text-[var(--muted)] text-sm text-center mb-3 transition-colors duration-300">
                    {method.description}
                  </p>

                  <div className="text-center w-full">
                    <span
                      className="inline-block max-w-full truncate align-middle text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-1 rounded-full border border-[var(--glass-border)] transition-all duration-300"
                      title={typeof method.value === 'string' ? method.value : undefined}
                    >
                      {method.value}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl border border-[var(--border)] shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-4">Send a Message</h2>
              <p className="text-[var(--muted)]">I&apos;ll get back to you within 24 hours</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--muted)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--muted)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[var(--muted)] mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--muted)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring group gradient-bg"
                >
                  <span>Send Message</span>
                  <MdSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card p-12 rounded-3xl border border-[var(--border)] text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MdCoffee className="w-10 h-10 on-gradient" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Let&apos;s Grab a Coffee
            </h2>

            <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
              I&apos;m always open to meeting new people and discussing exciting opportunities.
              Whether it&apos;s a virtual coffee chat or a quick call, I&apos;d love to connect and
              explore how we can work together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:christophertanaka42@gmail.com"
                className="px-8 py-4 rounded-2xl on-gradient font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring gradient-bg"
              >
                Schedule a Chat
              </a>
              <a
                href="/about"
                className="px-8 py-4 glass-card border border-[var(--border)] hover:border-[var(--border-strong)] rounded-2xl text-[var(--foreground)] font-semibold text-lg transition-all duration-300 focus-ring"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
