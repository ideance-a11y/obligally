# Ideance Obligally

Site web permettant de mieux cerner les obligations légales en termes d'accessbilité numérique des contenus et services numériques en France selon le profil.

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

Le framework utilisé est [Astro](https://astro.build/).

L'arborescence de dossiers et fichiers du projet et la suivante:

```
├── public/
│       └── fonts/
│       └── img/
├── src/
│   └── assets/
│       └── datas/
│       └── i18n/
│       └── styles/
│       └── types/
│   └── components/
│       └── form/
│       └── page-content/
│   └── content/
│   └── layout/
│   └── pages/
│       └── index.astro
└── package.json
```

- `public`: dossier de structure d'Astro. Tous les assets statiques (qui n'ont pas besoin de compilation particulière), comme les images, fonts, etc. peuvent être placés dans ce dossier.
  - `fonts`: polices d'écriture utilisées.
  - `images`: images utilisées dans le projet.
- `src`: dossier de structure d'Astro. Stoque les fichiers sources qui vont servir à builder le projet.
  - `assets`:
    - `data`: Données en rapports avec la directive européene et le RGAA. Divisées en différents contenus : lois, sanctions, services, champs d'applications, etc. Les données sont mergées dans le fichier `data.ts`.
    - `i18n`: internationalisation. Clés de traduction dans les fichiers `fr.ts` et `en.ts` et script d'initialisation de i18n.
    - `styles`: feuilles de styles découpées selon la thématique et les composants.
    - `types`: définitions de types pour typescript.

  - `components`: composants nécessaires au fonctionnement du projet. C'est ici qu'on aime mettre les composants Astro/React/Vue/Svelte/Preact
    - `form`: composants de formulaires en vue.
    - `page-content`: composants de contenus dans différentes langues pour les pages principales. Permet de fournir un contenu statique complet dans la langue désirée. Utiliser les chaines de traduciton i18n n'est pas obligatoire ici.
  - `content`: dossier de structure d'Astro. Stoque des "Collections". Format de données statiques internes d'Astro.
  - `layout`: composants de structures de page. Coquilles communes de contenu de pages
  - `pages`: dossier de sctructure d'Astro. Représente l'arborescence du site. Astro recherche les fichiers `.astro` ou `.md` dans le dossier `src/pages/`. Chaque page est exposée comme une route basée sur le nom de son fichier.

Pour en savoir plus sur la structure de fichiers d'un projet Astro, se référer au [guide sur la structure du projet](https://docs.astro.build/fr/basics/project-structure/).

## Traduction

La traduction s'effectue de deux manière différentes dans le site:

- Au moyen de clés de traduction : dossier `./src/assets/i18n`, les fichiers `fr.ts` et `en.ts`.
- En "dur" (contenu html) dans les fichiers de contenu des pages : dossier `./src/components/page-content`.

Pour activer le composant de menu de langue, ouvrir le fichier `./components/Header.astro` et décommenter les lignes suivantes:

```md
---
…
// import Lang from '@components/Lang.astro'
…
---
…
<!-- <Lang /> -->
…
```

### Clés de traduction

Toutes les clés sont disponibles dans le fichier `fr.ts`. Pour traduire en anglais, il suffit de dupliquer les mêmes clés dans le fichier `en.ts` et fournir l'équivalent en anglais.

Si une clé non traduite est utilisée en anglais, c'est le texte en français qui apparaitra à la place, le français étant la langue par défaut.

### Fichiers de traduction

Pour le contenu de chaque page, il existe un fichier `.fr.astro` et `.en.astro`. L'un étant chargé pour le français, l'autre pour l'anglais.

Il suffit de renseigner le contenu dans la langue dédiée en HTML. Il faudra voir avec Zelda les classes à utiliser sur les différents éléments pour appliquer la charte Ideance.

## Déploiement

1. Executer la commange `npm run build`
2. Récupérer le contenu du dossier `./dist` (pages statiques)
3. Les placer sur un serveur distant. Par exemple via FTP (le répertoire `/en` généré automatiquement n'est pas forcément à déplacer si l'anglais n'est pas souhaité).
4. Prévoir éventuellement un fichier `.php` ou `.htacces` pour rerouter vers l'url en `/fr`.
