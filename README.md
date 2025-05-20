# Ideance Lega11y

Affiche les obligations légales en termes d'accessbilité numérique des contenus et services numériques en France selon le profil.

## Installation et informations techniques

### Environnement nécessaire

Node et npm (node package manager) sont requis pour installer et compiler le projet.

Pour installer Node et npm, le plus simple est d'installer nvm (node version manager) qui se charge d'installer node et npm et de gérer leurs versions.

- Installation mac & Linux : [Github nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
- Installation Windows : [Documentation microsoft](https://learn.microsoft.com/fr-fr/windows/dev-environment/javascript/nodejs-on-windows#install-nvm-windows-nodejs-and-npm)

Une fois nvm installé, dans un terminal :

1. Vérifier l'installation de nvm : `nvm -v`.
2. Installer node et npm : `nvm install latest`.

### Configuration IDE recommandée

[VSCode](https://code.visualstudio.com/) & [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (désactiver Vetur car déprecié).

### Commandes 🧞

Toutes les commandes doivent être lancées à la racine du projet depuis un terminal:

| Commande                  | Action                                                    |
| :------------------------ | :-------------------------------------------------------- |
| `npm install`             | Installation des dépendances                              |
| `npm run dev`             | Démarre un serveur local à `localhost:4321`               |
| `npm run build`           | Build le site pour production dans `./dist/`              |
| `npm run preview`         | Aperçu du build en local, avant de déployer               |
| `npm run astro ...`       | Lancer des commandes CLI comme `astro add`, `astro check` |
| `npm run astro -- --help` | Aide à l'utilisation de la CLI d'Astro                    |

### Modules installés

- [eslint-plugin-astro](https://docs.astro.build/fr/editor-setup/#eslint)
- [prettier](https://docs.astro.build/fr/editor-setup/#prettier)
- `vue-i18n` : Gestion des clés de texte selon la locale

### Documentations

En cas de soucis, consulter la documentation technique correspondante :

- [astro](https://docs.astro.build/fr/concepts/why-astro/)
- [vue](https://fr.vuejs.org/guide/introduction.html)
- [vue API](https://fr.vuejs.org/api/)
- [vue-i18n](https://vue-i18n.intlify.dev/guide/essentials/started.html) (Anglais)

## Structure du projet 🚀

Structure d'un projet Astro classique :

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Pour en savoir plus sur la structure de fichiers d'un projet Astro, se référer au [guide sur la structure du projet](https://docs.astro.build/fr/basics/project-structure/).
