import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://ayuda.monomo.com.co',
    integrations: [starlight({
        title: 'Ayuda',
        description: 'Portal de ayuda de Monomo',
        favicon: '/images/prueba_ca.png',
        defaultLocale: 'root',
        logo: {
            src: './src/assets/Logo_Monomo_negro.png',
            replacesTitle: true
        },
        customCss: [
            // Path to your Tailwind base styles:
            './src/tailwind.css',
          ],
        social: {
            instagram: 'https://instagram.com/monomo_co',
        },
        sidebar: [
            // {
                // label: 'Guides',
                // items: [
                    // Each item here is one entry in the navigation menu.
                    // { label: 'Example Guide', slug: 'guides/example' },
                // ],
            // },
            {
                label: 'Modelos',
                items: [
                    'modelos/modelos-intro',    
                    {
                        label: 'Primeros pasos',
                        autogenerate: {directory: 'modelos/primeros-pasos'},
                    },
                    {
                        label: 'Tipos de proyectos',
                        autogenerate: {directory: 'modelos/tipos-de-proyectos'},
                    },                                                                                                                        
                    {
                        label: 'Contratos y Pagos',
                        autogenerate: {directory: 'modelos/contratos-y-pagos'},
                    },
                    {
                        label: 'Mejores prácticas',
                        autogenerate: {directory: 'modelos/mejores-practicas'},
                    },
                ]
            },
            {
                label: 'Marcas',
                items: [
                    'marcas/marcas-intro',    
                    {
                        label: 'Primeros pasos',
                        autogenerate: {directory: 'marcas/primeros-pasos'},
                    },
                    {
                        label: 'Tipos de proyectos',
                        autogenerate: {directory: 'marcas/tipos-de-proyectos'},
                    },                                           
                    {
                        label: 'Encuentra y contrata',
                        autogenerate: {directory: 'marcas/encuentra-y-contrata'},
                    },
                    {
                        label: 'Mejores prácticas',
                        autogenerate: {directory: 'marcas/mejores-practicas'},
                    },
                ]
            }            
        ],
		}), tailwind({
            // Disable the default base styles:
            applyBaseStyles: true,
          })],
});
