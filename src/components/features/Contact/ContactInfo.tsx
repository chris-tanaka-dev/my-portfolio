import React from 'react';

const CONTACT = {
  location: '4101 SW Orchard Street, Seattle, WA 98136',
  email: 'christophertanaka42@gmail.com',
  website: 'https://himalayas.app/@christophertanaka',
  phone: '425-491-2815',
};

const ContactInfo = () => (
  <div className="max-w-md mx-auto">
    <div className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-100 dark:border-gray-700 card-hover animate-scale-in">
      <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 text-base items-center">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-300">📍</span>
          <span>{CONTACT.location}</span>
        </div>
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 hover:underline flex items-center gap-2 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 rounded"
        >
          <span>📧</span>
          {CONTACT.email}
        </a>
        <a
          href={CONTACT.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 hover:underline flex items-center gap-2 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 rounded"
        >
          <span>🌐</span>
          {CONTACT.website.replace('https://', '')}
        </a>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-300">📞</span>
          <span>{CONTACT.phone}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo;
