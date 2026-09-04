// src/data/authors.ts
//
// Single source of truth for every writer/editor on the site.
// AuthorBio (on posts) and the /team pages both read from this file, so a
// bio, title, or photo only needs to be updated in one place.

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  expertise: string[];
  avatarInitials: string;
  email?: string;
  twitter?: string;
  linkedin?: string;
}

export const authors: Author[] = [
  {
    slug: 'asha-fenn',
    name: 'Asha Fenn',
    role: 'Co-founder & Editor-in-Chief',
    bio: 'Asha writes about product design and the psychology of software. She previously led product design at two YC-backed startups.',
    longBio:
      "Asha has spent the last eight years researching how trust is built — and lost — in digital interfaces. Before co-founding Verdant Notes, she led product design teams at two Y Combinator-backed startups, shipping consumer products used by millions of people. She holds a degree in Human-Computer Interaction and has spoken at several design conferences on the ethics of persuasive UX. As Editor-in-Chief, she reviews every piece for accuracy and fairness before it's published.",
    expertise: ['Product Design', 'UX Research', 'Design Ethics'],
    avatarInitials: 'AF',
    email: 'asha@example.com',
    twitter: 'https://x.com/example',
    linkedin: 'https://www.linkedin.com/in/example',
  },
  {
    slug: 'tomas-reyher',
    name: 'Tomás Reyher',
    role: 'Co-founder & Technical Editor',
    bio: 'Backend engineer of nine years. Covers infrastructure, hosting, and performance.',
    longBio:
      "Tomás has spent nine years building and operating backend systems, most recently as a staff engineer at a mid-size infrastructure company. He covers hosting, performance, and developer tooling for Verdant Notes, and personally benchmarks every hosting platform or tool he writes about before publishing a word. He's also responsible for the technical accuracy of every post on the site.",
    expertise: ['Web Performance', 'Cloud Infrastructure', 'Developer Tools'],
    avatarInitials: 'TR',
    email: 'tomas@example.com',
    linkedin: 'https://www.linkedin.com/in/example',
  },
  {
    slug: 'priya-ostrander',
    name: 'Priya Ostrander',
    role: 'Senior Writer',
    bio: 'Former business journalist. Covers workplace culture and management practice.',
    longBio:
      'Priya spent six years as a business journalist covering labor and workplace trends for a regional newspaper before joining Verdant Notes full-time. She specializes in translating academic management research into practical advice for working teams, and every one of her pieces is fact-checked against at least one primary study or dataset.',
    expertise: ['Workplace Culture', 'Management', 'Business Journalism'],
    avatarInitials: 'PO',
    email: 'priya@example.com',
    twitter: 'https://x.com/example',
  },
  {
    slug: 'daniel-osei',
    name: 'Daniel Osei',
    role: 'Contributing Editor',
    bio: 'Freelance tech journalist covering sustainability and green technology.',
    longBio:
      'Daniel is a freelance journalist who has covered climate technology and sustainable business practices for a variety of outlets over the past five years. He contributes a regular column to Verdant Notes on the environmental footprint of digital products, and fact-checks all sustainability-related claims made on the site.',
    expertise: ['Sustainability', 'Climate Tech', 'Reporting'],
    avatarInitials: 'DO',
    email: 'daniel@example.com',
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
