// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'
import starlightThemeRapide from 'starlight-theme-rapide'
import sidebar from "./sidebar.mjs"

const production = process.env.MODE === 'production';

const plugins = [
	starlightThemeRapide(),
]

if (!production) {
	plugins.push(starlightLinksValidator({
		errorOnRelativeLinks: false,
	}))
}

// https://astro.build/config
export default defineConfig({
	site: 'https://upc.ua',
	integrations: [
		starlight({
			title: 'UPC SDK Docs 0.1.0',
			editLink: {
				baseUrl: 'https://github.com/olton/metroui-docs/edit/master/',
			},
			favicon: 'favicon.png',
			social: [
				{icon: 'github', label: 'GitHub', href: 'https://github.com/pimenov-upc/upc-sdk-docs'}
			], 
      defaultLocale: 'uk',
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
