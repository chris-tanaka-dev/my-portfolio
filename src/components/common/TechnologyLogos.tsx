import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiWebgl,
} from 'react-icons/si';

// React Logo Component
export const ReactLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <SiReact className={className} />
);

// TypeScript Logo Component
export const TypeScriptLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <SiTypescript className={className} />
);

// Node.js Logo Component
export const NodeJsLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <SiNodedotjs className={className} />
);

// Python Logo Component
export const PythonLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <SiPython className={className} />
);

// AI/ML Logo Component (TensorFlow icon)
export const AIMLLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <SiTensorflow className={className} />
);

// WebGL Logo Component
export const WebGLLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <SiWebgl className={className} />
);
