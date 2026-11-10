// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'
import starlightThemeRapide from 'starlight-theme-rapide'
import sidebar from "./sidebar.mjs"
import version from "./version.js"

const production = process.env.MODE === 'production';

const plugins = [
	starlightThemeRapide(),
]

if (!production) {
	plugins.push(starlightLinksValidator({
		errorOnRelativeLinks: false,
	}))
}

const defaultLocale = 'uk';

// https://astro.build/config
export default defineConfig({
	site: 'https://upc.ua',
  redirects: { 
    '/': `/${defaultLocale}/overview`,
    '/uk': '/uk/overview',
    '/en': '/en/overview',
  },
	integrations: [
		starlight({
			title: {
        uk: `UPC SDK v${version}`,
        en: `UPC SDK v${version}`,
      },
			editLink: {
				baseUrl: 'https://github.com/pimenov-upc/upc-sdk-docs/edit/master/',
			},
			favicon: 'favicon.png',
      logo: {
        src: './src/assets/logo.png',
        alt: 'UPC SDK'
      },
			social: [
				{icon: 'github', label: 'GitHub', href: 'https://github.com/pimenov-upc/upc-sdk-docs'}
			], 
      defaultLocale,
      locales: {
        uk: {
          label: 'Українська',
        },
        en: {
          label: 'English',
        },
        // hu: {
        //   label: 'Magyar',
        // },
        // de: {
        //   label: 'Deutsch',
        // },
        // bg: {
        //   label: 'Български',
        // },
        // bs: {
        //   label: 'Bosanski',
        // },
        // cz: {
        //   label: 'Čeština',
        // },
        // fr: {
        //   label: 'Français',
        // },
        // hr: {
        //   label: 'Hrvatski',
        // },
        // it: {
        //   label: 'Italiano',
        // },
        // pl: {
        //   label: 'Polski',
        // },
        // ro: {
        //   label: 'Română',
        // },
        // rs: {
        //   label: 'Srpski',
        // },
        // ru: {
        //   label: 'Русский',
        // },
        // sk: {
        //   label: 'Slovenčina',
        // },
        // sl: {
        //   label: 'Slovenščina',
        // },
        // sq: {
        //   label: 'Shqip',
        // },
      },
			sidebar,
			customCss: [
				'./src/styles/index.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			lastUpdated: true,
			plugins,
			expressiveCode: {
				themes: ['dark-plus', 'github-light']
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			credits: false,
			head: []
		}),
	],
});
