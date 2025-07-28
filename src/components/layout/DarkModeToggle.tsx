'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  useEffect(() => {
    // On mount, check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(prefersDark);
  }, []);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDark((d) => !d)}
      className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {dark ? (
        <Moon size={20} className="text-yellow-400" />
      ) : (
        <Sun size={20} className="text-yellow-500" />
      )}
    </button>
  );
};

export default DarkModeToggle;
