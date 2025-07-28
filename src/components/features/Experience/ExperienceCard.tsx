import React from 'react';

interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  bullets: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, title, period, bullets }) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg animate-fade-in">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
        {title} @ {company}
      </span>
      <span className="text-sm text-gray-500">{period}</span>
    </div>
    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 text-base space-y-1">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
