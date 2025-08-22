'use client';

import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return <div className={`min-h-screen ${className}`}>{children}</div>;
};

export default PageWrapper;
