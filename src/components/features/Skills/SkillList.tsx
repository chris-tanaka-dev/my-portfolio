import React from 'react';

interface SkillListProps {
  title: string;
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ title, skills }) => (
  <div className="animate-fade-in">
    <h4 className="font-bold mb-1 text-gray-900 dark:text-gray-100">{title}</h4>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
      {skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default SkillList;
