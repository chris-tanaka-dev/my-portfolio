import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = '', children }) => (
  <section id={id} className={`py-12 sm:py-20 ${className}`}>
    {title && (
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100 tracking-tight animate-fade-in">
        {title}
      </h2>
    )}
    <div className="animate-fade-in-slow">{children}</div>
  </section>
);

export default Section;
