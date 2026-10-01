/**
 * Main site configuration.
 * Most branding, navigation, labels, code insertion and ad placements live here.
 */
export const siteConfig = {
  name: 'Job Career Hub',
  shortName: 'Job Career Hub',
  url: 'https://example.com',
  description: 'Latest jobs, recruitment updates, career guides and employment news for India, the UK and other countries.',
  author: 'Job Career Hub',
  language: 'en',
  locale: 'en_US',
  logoText: 'Job Career Hub',
  logoAccent: 'Hub',

  theme: {
    primary: '#155eef',
    primaryDark: '#0b4acb',
    accent: '#16a34a',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    muted: '#64748b',
  },

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Latest Jobs', href: '/posts/' },
    { label: 'Categories', href: '/categories/' },
    { label: 'Tags', href: '/tags/' },
    { label: 'Career Guide', href: '/category/career-guide/' },
    { label: 'Locations', href: '/countries/' },
  ],

  footerLinks: [
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Terms', href: '/terms/' },
    { label: 'RSS', href: '/rss.xml' },
  ],

  // Paste trusted HTML/JS here. These values are rendered exactly where named.
  code: {
    head: '',
    header: '',
    footer: '',
  },

  // Add complete ad/HTML snippets to any placement. Leave empty to disable.
  ads: {
    header: '',
    homeTop: '',
    homeAfterHero: '',
    homeAfterPosts: '',
    homeBottom: '',
    archiveTop: '',
    articleTop: '',
    articleBeforeContent: '',
    articleAfterParagraph: '',
    articleAfterContent: '',
    articleSidebarTop: '',
    articleSidebarMiddle: '',
    articleSidebarBottom: '',
    footer: '',
  },

  homepage: {
    heroTitle: 'Find the latest jobs and build your next career move.',
    heroText: 'Job openings, recruitment updates, salary insights, career guides and application tips for job seekers worldwide.',
    searchPlaceholder: 'Search jobs, companies, skills or keywords...',
    postsPerLoad: 6,
    featuredTitle: 'Featured Jobs & Career Updates',
    latestTitle: 'Latest Job Updates',
  },
} as const;
