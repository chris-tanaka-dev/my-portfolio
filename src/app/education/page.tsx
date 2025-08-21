import PageWrapper from '../../components/common/PageWrapper';
import { MdSchool, MdBook, MdEmojiEvents, MdCalendarToday, MdLocationOn, MdStar } from 'react-icons/md';

const Education = () => {
  const educationData = [
    {
      degree: "Master's degree in Computer Science",
      institution: "University of Tokyo",
      period: "Apr 2011 - Mar 2013",
      location: "Tokyo, Japan",
      description: "Advanced studies in algorithms, machine learning, and software engineering. Research focused on distributed systems and performance optimization.",
      achievements: ["Graduated with honors", "Published 2 research papers", "Teaching assistant for Data Structures"],
      icon: <MdSchool className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Bachelor's degree in Computer Science",
      institution: "University of Tokyo",
      period: "Apr 2007 - Mar 2011",
      location: "Tokyo, Japan",
      description: "Comprehensive foundation in computer science fundamentals, mathematics, and programming. Active participation in coding competitions and hackathons.",
      achievements: ["Dean's List recipient", "Computer Science Society President", "3rd place in ACM Programming Contest"],
      icon: <MdBook className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <MdSchool className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">Academic Foundation</h1>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A strong educational background from one of the world's leading institutions, 
            providing the theoretical foundation for practical innovation in software engineering.
          </p>
        </div>
      </section>

      {/* Education Cards */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-12 stagger-animation">
            {educationData.map((edu, index) => (
              <div key={index} className="group">
                <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 hover:scale-[1.02] interactive-card">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Left side - Icon and basic info */}
                    <div className="text-center lg:text-left">
                      <div className={`w-24 h-24 bg-gradient-to-br ${edu.gradient} rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <div className="text-white">
                          {edu.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                        {edu.degree}
                      </h3>
                      
                      <h4 className="text-xl font-semibold gradient-text mb-4">{edu.institution}</h4>
                      
                      {/* Meta information */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                          <MdLocationOn className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Center - Description */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        {edu.description}
                      </p>
                      
                      {/* Achievements */}
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                          <MdEmojiEvents className="w-5 h-5 text-yellow-400" />
                          <span>Key Achievements</span>
                        </h5>
                        <div className="space-y-3">
                          {edu.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center space-x-3 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                              <span className="text-gray-300">{achievement}</span>
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

      {/* Additional Learning */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">Continuous Learning</h2>
            <p className="text-gray-300 text-lg">Ongoing education and skill development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Online Courses", count: "50+", description: "Completed courses on Coursera, Udemy, and other platforms" },
              { title: "Certifications", count: "15+", description: "Professional certifications in various technologies" },
              { title: "Conferences", count: "25+", description: "Attended tech conferences and workshops worldwide" }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border border-white/10 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MdStar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <div className="text-3xl font-bold gradient-text mb-2">{item.count}</div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card p-12 rounded-3xl border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Knowledge Meets Innovation
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Combining academic excellence with practical experience to deliver cutting-edge solutions 
              that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/experience"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-ring"
              >
                View Experience
              </a>
              <a
                href="/contact"
                className="px-8 py-4 glass-card border border-white/20 rounded-2xl text-white font-semibold text-lg hover:border-white/40 transition-all duration-300 focus-ring"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Education;
