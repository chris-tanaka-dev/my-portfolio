import React from 'react';

interface SkillListProps {
  title: string;
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ title, skills }) => (
  <div className="animate-fade-in bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-100 dark:border-gray-700 card-hover">
    <h4 className="font-bold mb-4 text-gray-900 dark:text-white text-lg border-b border-gray-200 dark:border-gray-600 pb-2">
      {title}
    </h4>
    <ul className="space-y-2 animate-stagger">
      {skills.map((skill, i) => (
        <li key={i} className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillList;
