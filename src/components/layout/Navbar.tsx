import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => (
  <nav
    className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300"
    aria-label="Main navigation"
  >
    <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
      <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-gray-100">
        Christopher Tanaka
      </span>
      <ul className="flex gap-6 text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
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

export default Navbar;
