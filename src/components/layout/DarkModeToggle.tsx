'use client';

import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsLight(savedTheme === 'light');
    } else {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      setIsLight(prefersLight);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isLight) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLight, mounted]);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  // Prevent hydration mismatch by showing a consistent initial state
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="relative w-12 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1 transition-all duration-300 focus-ring"
        disabled
      >
        <div className="w-4 h-4 bg-white rounded-full shadow-lg transform translate-x-0"></div>
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1 transition-all duration-500 focus-ring group hover:shadow-lg hover:shadow-indigo-500/25"
    >
      {/* Toggle handle */}
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-lg transform transition-transform duration-500 ease-out ${
          isLight ? 'translate-x-6' : 'translate-x-0'
        }`}
      />

      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
        <MdLightMode
          size={12}
          className={`text-yellow-400 transition-all duration-300 ${
            isLight ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
        <MdDarkMode
          size={12}
          className={`text-blue-400 transition-all duration-300 ${
            !isLight ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
    </button>
  );
};

export default DarkModeToggle;
