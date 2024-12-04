import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'My Docs',
        defaultLocale: 'root',
        logo: {
            src: './src/assets/Logo_Monomo_negro.png',
        },
        customCss: [
            // Path to your Tailwind base styles:
            './src/tailwind.css',
          ],
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
            {
                label: 'Modelos',
                autogenerate: {directory: 'modelos'}
            }
        ],
		}), tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
          })],
});