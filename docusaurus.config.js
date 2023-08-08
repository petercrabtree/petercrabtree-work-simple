// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'petercrabtree.work',
  tagline: 'Backend - DevOps - Infrastructure',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://petercrabtree.work',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'petercrabtree', // Usually your GitHub org/user name.
  projectName: 'petercrabtree-work-simple', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false /*{
          showReadingTime: true,
        }*/ ,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Peter\'s Resume Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'Email',
                href: 'mailto:peter.crabtree@gmail.com',
              },
              {
                label: 'X (Twitter)',
                href: 'https://twitter.com/PeterCrabtree42',
              },
            ],
          },
          {
            title: 'Code',
            items: [
              {
                label: 'Peter\'s Github',
                href: 'https://github.com/petercrabtree',
              },
              {
                label: 'This site\'s Commit Log',
                href: 'https://github.com/petercrabtree/petercrabtree-work-simple/commits/main',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Peter Crabtree. Built with 💓 and Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
