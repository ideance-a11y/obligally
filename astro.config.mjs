import { defineConfig } from 'astro/config'

// https://astro.build/config
// I18n : https://docs.astro.build/fr/guides/internationalization/
export default defineConfig({
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true // La locale par défaut est présente dans la route également
    }
  }
})
