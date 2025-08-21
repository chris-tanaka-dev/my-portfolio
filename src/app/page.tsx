import PageWrapper from '../components/common/PageWrapper';
import ProfileAvatar from '../components/features/Home/ProfileAvatar';
import {
  MdKeyboardArrowDown,
  MdAutoAwesome,
  MdCode,
  MdFlashOn,
  MdRocketLaunch,
} from 'react-icons/md';

const Home = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '4s' }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Profile Avatar */}
          <ProfileAvatar />

          {/* Professional Summary */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-scale">
                Senior Software Engineer with{' '}
                <span className="gradient-text font-semibold">12 years of experience</span> building
                <span className="text-white font-semibold">
                  {' '}
                  low-latency, AI-powered systems
                </span>{' '}
                and
                <span className="text-white font-semibold"> collaborative tools</span>. Proven
                impact scaling real-time editing at
                <span className="gradient-text font-semibold"> Figma</span> and driving
                high-performance PropTech interfaces at
                <span className="gradient-text font-semibold"> FoxyAI</span>.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MdCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Full-Stack Expertise</h3>
              <p className="text-gray-400 text-sm">
                React, TypeScript, Node.js, Python, and modern web technologies
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MdFlashOn className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Performance Focus</h3>
              <p className="text-gray-400 text-sm">
                Real-time systems, WebGL optimization, and high-performance architectures
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MdRocketLaunch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Integration</h3>
              <p className="text-gray-400 text-sm">
                GPT-powered interfaces, computer vision, and ML model pipelines
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 animate-fade-in-scale" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/experience"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring"
              >
                <span className="flex items-center space-x-2">
                  <span>View Experience</span>
                  <MdKeyboardArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="/contact"
                className="group px-8 py-4 glass-card border border-white/20 rounded-2xl text-white font-semibold text-lg hover:border-white/40 transition-all duration-300 focus-ring"
              >
                <span className="flex items-center space-x-2">
                  <span>Get In Touch</span>
                  <MdAutoAwesome className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">12+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-400 text-sm">Major Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
