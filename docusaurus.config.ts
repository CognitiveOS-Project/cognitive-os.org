import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CognitiveOS',
  tagline: 'An AI-native operating system',
  favicon: '/favicon.svg',

  url: 'https://cognitive-os.org',
  baseUrl: '/',

  organizationName: 'CognitiveOS-Project',
  projectName: 'cognitive-os.org',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/CognitiveOS-Project/cognitive-os.org/tree/main/',
          path: 'docs',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CognitiveOS',
      logo: {
        alt: 'CognitiveOS',
        src: '/favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/CognitiveOS-Project/cognitiveos-distro/releases/latest',
          label: 'Download',
          position: 'left',
        },
        {
          href: 'https://github.com/CognitiveOS-Project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Getting Started', to: '/docs/intro'},
            {label: 'Installation', to: '/docs/installation'},
            {label: 'Architecture', to: '/docs/architecture/overview'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/CognitiveOS-Project'},
            {label: 'Sponsor', href: 'https://github.com/sponsors/jeanmachuca'},
            {label: 'LinkedIn', href: 'https://linkedin.com/in/jeanmachuca'},
          ],
        },
        {
          title: 'Repositories',
          items: [
            {label: 'cognitiveos', href: 'https://github.com/CognitiveOS-Project/cognitiveos'},
            {label: 'cognitiveos-distro', href: 'https://github.com/CognitiveOS-Project/cognitiveos-distro'},
            {label: 'SDLC', href: 'https://github.com/CognitiveOS-Project/sdlc'},
            {label: 'product-specs', href: 'https://github.com/CognitiveOS-Project/product-specs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CognitiveOS Project — MIT licensed`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
