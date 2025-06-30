import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ayuda.monomo.com.co',
  integrations: [
    starlight({
      title: 'Ayuda',
      description: 'Portal de ayuda de Monomo',
      favicon: '/faviconV2.png', // 📌 Esto asume que está en /public/faviconV2.png
      defaultLocale: 'root',
      logo: {
        src: './src/assets/Logo_Monomo_negro.png',
        replacesTitle: true
      },
      social: {
        instagram: 'https://instagram.com/monomo_co'
      },
      sidebar: [
        {
          label: 'Modelos',
          items: [
            'modelos/modelos-intro',
            {
              label: 'Primeros pasos',
              autogenerate: { directory: 'modelos/primeros-pasos' }
            },
            {
              label: 'Tipos de proyectos',
              autogenerate: { directory: 'modelos/tipos-de-proyectos' }
            },
            {
              label: 'Contratos y Pagos',
              autogenerate: { directory: 'modelos/contratos-y-pagos' }
            },
            {
              label: 'Mejores prácticas',
              autogenerate: { directory: 'modelos/mejores-practicas' }
            }
          ]
        },
        {
          label: 'Marcas',
          items: [
            'marcas/marcas-intro',
            {
              label: 'Primeros pasos',
              autogenerate: { directory: 'marcas/primeros-pasos' }
            },
            {
              label: 'Tipos de proyectos',
              autogenerate: { directory: 'marcas/tipos-de-proyectos' }
            },
            {
              label: 'Encuentra y contrata',
              autogenerate: { directory: 'marcas/encuentra-y-contrata' }
            },
            {
              label: 'Mejores prácticas',
              autogenerate: { directory: 'marcas/mejores-practicas' }
            }
          ]
        }
      ]
    }),
    tailwind({
      applyBaseStyles: true
    })
  ]
});
