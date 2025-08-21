import PageWrapper from '../../components/common/PageWrapper';
import ExperienceCard from '../../components/features/Experience/ExperienceCard';
import { MdWork, MdCalendarToday, MdLocationOn, MdStar } from 'react-icons/md';

const Experience = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        {/* Background Elements */}
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
              <MdWork className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">Professional Journey</h1>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A decade-plus journey through cutting-edge technology companies, building innovative
            solutions and scaling systems that impact millions of users worldwide.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-20">
              {/* FoxyAI */}
              <div className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div
                    className={`${window.innerWidth > 1024 ? 'lg:order-1' : ''} animate-fade-in-scale`}
                  >
                    <ExperienceCard
                      company="FoxyAI"
                      title="Senior Software Engineer"
                      period="Dec 2023 - Present"
                      location="Remote"
                      bullets={[
                        'Built and maintained React/TypeScript dashboards to visualize AI-powered Visual Property Intelligence - including Condition Scores, Quality Scores, object/damage detection, renovation forecasts, and 360° Property Valuations via FoxyAI APIs.',
                        'Integrated a multimodal, GPT-powered Advanced Search feature, enabling intuitive image-and-text search across large-scale property datasets.',
                        'Optimized Canvas/WebGL rendering pipelines to reduce frontend latency and deliver responsive, high-resolution model outputs.',
                        'Developed full-stack flows from image ingestion through AI inference to visual output, ensuring speed, reliability, and product alignment.',
                        "Designed and implemented a subscription and payment system using Foxy's hosted checkout powered by Stripe, with a customer portal for plan management, invoices, and billing methods.",
                        'Collaborated across product, engineering, and domain teams to build a Quality Control module that reduced manual review time by ~50% for inspection and lending workflows.',
                      ]}
                    />
                  </div>

                  <div
                    className={`${window.innerWidth > 1024 ? 'lg:order-2' : ''} text-center lg:text-left`}
                  >
                    <div className="glass-card p-8 rounded-3xl border border-white/10">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                        <MdWork className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">FoxyAI</h3>
                      <p className="text-gray-400 mb-4">PropTech Innovation</p>
                      <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-1">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>Dec 2023 - Present</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MdLocationOn className="w-4 h-4" />
                          <span>Remote</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Figma */}
              <div className="relative group">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-right">
                    <div className="glass-card p-8 rounded-3xl border border-white/10">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto lg:ml-auto mb-6">
                        <MdStar className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Figma</h3>
                      <p className="text-gray-400 mb-4">Design Collaboration Platform</p>
                      <div className="flex items-center justify-center lg:justify-end space-x-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-1">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>May 2019 - Dec 2023</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MdLocationOn className="w-4 h-4" />
                          <span>San Francisco</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="animate-fade-in-scale">
                    <ExperienceCard
                      company="Figma"
                      title="Senior Full-Stack Engineer"
                      period="May 2019 - Dec 2023"
                      location="San Francisco, CA"
                      bullets={[
                        'Engineered the real-time multiplayer editing infrastructure, leveraging WebSockets, custom sync logic (OT/CRDT-inspired), and WebAssembly-based performance components to support concurrency and consistency across users.',
                        'Led Canvas rendering optimizations, reducing load and render latency by 30%+ through refactoring rendering pipelines, minimizing redraws, and improving browser resource usage.',
                        'Built robust front-end and backend services (Node.js, Python, React/TypeScript) powering collaborative Canvas UI updates, conflict resolution, and state reconciliation across users.',
                        'Scaled performance testing infrastructure from a single MacBook to a dual-system CI pipeline with GPU-accelerated VMs and hardware testing rigs - enabling performance guardrails under 10-minute pulls with detailed profiling.',
                        'Helped shape design-system collaboration tools and workflows, pairing closely with product and design teams to resolve nuanced UX conflicts, maintaining consistent component libraries across design files and production codebase.',
                      ]}
                    />
                  </div>
                </div>
              </div>

              {/* ElectrifAi */}
              <div className="relative group">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-pink-500 to-red-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="animate-fade-in-scale">
                    <ExperienceCard
                      company="ElectrifAi"
                      title="Senior Frontend Engineer"
                      period="Dec 2016 - Apr 2019"
                      location="New York, NY"
                      bullets={[
                        'Built React/TypeScript dashboards transforming AI/ML outputs (CV, NLP) into clear analytics interfaces for modules like Spend, Demand Forecasting, and Contract Analytics.',
                        'Integrated backend pipelines (Spark, Kubernetes, Python) to consume ML-driven APIs supporting corporate spend visibility and contract insights.',
                        'Delivered modular client-facing products with consistent 5x ROI within 6-8 weeks, accelerating enterprise decision-making and operational efficiency.',
                        'Partnered with domain experts across finance, retail, and logistics, translating business needs into polished, production-grade frontend experiences.',
                      ]}
                    />
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="glass-card p-8 rounded-3xl border border-white/10">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                        <MdWork className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">ElectrifAi</h3>
                      <p className="text-gray-400 mb-4">Enterprise AI Solutions</p>
                      <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-1">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>Dec 2016 - Apr 2019</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MdLocationOn className="w-4 h-4" />
                          <span>New York, NY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google */}
              <div className="relative group">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-red-500 to-orange-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-right">
                    <div className="glass-card p-8 rounded-3xl border border-white/10">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto lg:ml-auto mb-6">
                        <MdStar className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Google</h3>
                      <p className="text-gray-400 mb-4">Search & Advertising</p>
                      <div className="flex items-center justify-center lg:justify-end space-x-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-1">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>May 2013 - Nov 2016</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MdLocationOn className="w-4 h-4" />
                          <span>Mountain View, CA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="animate-fade-in-scale">
                    <ExperienceCard
                      company="Google"
                      title="Software Engineer"
                      period="May 2013 - Nov 2016"
                      location="Mountain View, CA"
                      bullets={[
                        'Joined as a Software Engineering Intern, collaborating on production projects and delivering feature work under mentorship over a 12-week period.',
                        'Transitioned to a full-time Software Engineer after internship conversion, demonstrating strong ownership and performance early on.',
                        'Developed internal web tools and A/B experimentation infrastructure using AngularJS and Java to support high-volume advertiser platforms.',
                        'Collaborated across product and analytics teams to build scalable UI components and experimentation frameworks, accelerating engineering velocity.',
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Experience;
