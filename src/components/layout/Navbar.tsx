'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/education', label: 'Education' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300"
      aria-label="Main navigation"
      suppressHydrationWarning
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-gray-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Christopher Tanaka
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 rounded ${
                  pathname === link.href
                    ? 'text-blue-700 dark:text-blue-300'
                    : 'text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-300'
                }`}
                tabIndex={0}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
