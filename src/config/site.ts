/**
 * Central site settings.
 *
 * Edit this file when you want to add custom code or ad code without
 * touching the page/layout files.
 */
export const siteConfig = {
  name: 'AstroJyotish',
  url: 'https://static-blog-380.pages.dev',
  description: 'राशिफल, ज्योतिष और astrology की जानकारी।',
  author: 'AstroJyotish',

  // Custom code insertion points.
  // Paste raw HTML/JS here. Keep these strings empty if you do not need them.
  code: {
    head: '',
    header: '', // Immediately after <body>
    footer: '', // Immediately before </body>
  },

  // Ad placement system. Paste the complete ad unit HTML/JS in a slot.
  // The slot is rendered only when its string is not empty.
  ads: {
    homeTop: '',
    homeAfterPosts: '',
    articleTop: '',
    articleBeforeContent: '',
    articleAfterContent: '',
    articleSidebar: '',
    footer: '',
  },
} as const;
