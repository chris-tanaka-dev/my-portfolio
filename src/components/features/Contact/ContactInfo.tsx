import React from 'react';

const CONTACT = {
  location: 'Seattle, WA',
  email: 'hello@reallygreatsite.com',
  website: 'https://www.reallygreatsite.com',
  phone: '123-456-7890',
};

const ContactInfo = () => (
  <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300 text-base items-center animate-fade-in">
    <span>{CONTACT.location}</span>
    <a
      href={`mailto:${CONTACT.email}`}
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      {CONTACT.email}
    </a>
    <a
      href={CONTACT.website}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      {CONTACT.website.replace('https://', '')}
    </a>
    <span>{CONTACT.phone}</span>
  </div>
);

export default ContactInfo;
