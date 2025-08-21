import React from 'react';
import { MdLocationOn, MdCalendarToday } from 'react-icons/md';

interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, title, period, location, bullets }) => (
  <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 group hover:scale-[1.02] interactive-card">
    {/* Header */}
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
            {title}
          </h3>
          <h4 className="text-xl font-semibold gradient-text">{company}</h4>
        </div>
        
        <div className="flex flex-col sm:items-end space-y-2 mt-4 sm:mt-0">
          <div className="flex items-center space-x-2 text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <MdCalendarToday className="w-4 h-4" />
            <span>{period}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <MdLocationOn className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bullet Points */}
    <div className="space-y-4">
      {bullets.map((bullet, index) => (
        <div 
          key={index} 
          className="flex items-start space-x-3 group/bullet animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Animated bullet point */}
          <div className="relative mt-2">
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full group-hover/bullet:scale-150 transition-transform duration-300"></div>
            <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-50 group-hover/bullet:scale-200 transition-transform duration-300"></div>
          </div>
          
          <p className="text-gray-300 leading-relaxed group-hover/bullet:text-gray-200 transition-colors duration-300">
            {bullet}
          </p>
        </div>
      ))}
    </div>

    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </div>
);

export default ExperienceCard;
