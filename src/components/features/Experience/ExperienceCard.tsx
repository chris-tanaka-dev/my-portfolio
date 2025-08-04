import React from 'react';

interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  bullets: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, title, period, bullets }) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700 card-hover animate-fade-in">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
      <span className="font-bold text-lg text-gray-900 dark:text-white">
        {title} @ {company}
      </span>
      <span className="text-sm text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600">
        {period}
      </span>
    </div>
    <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-200 text-base space-y-2">
      {bullets.map((b, i) => (
        <li key={i} className="animate-slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
          {b}
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
