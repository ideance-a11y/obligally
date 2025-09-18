/** TRADUCTION
 *
 * La valeur de chaque clé "name" fait référence à la clé i18n correspondante.
 * Voir fichier src/datas/i18n.ts
 */

import type { Id } from '@/assets/types/global'

export type Law = {
  id: Id
  scope: string
  name: string
  description?: string
  href?: string
  date: { year: number, month: number, day: number }
  articles?: { name: string, href: string }[]
}


/**
 * Lois appliquables
 */
export const laws: Law[] = [
  {
    id: 'fr-2023-171',
    scope: 'France',
    name: 'law.france.2023_171',
    date: {
      year: 2023,
      month: 3,
      day: 9
    },
    articles: [
      {
        name: '16',
        href: 'https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000047281814'
      }
    ]
  },
  {
    id: 'fr-2005-102',
    scope: 'France',
    name: 'law.france.2005_102',
    date: {
      year: 2005,
      month: 2,
      day: 11
    },
    articles: [
      {
        name: '47',
        href: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037388867/'
      },
      {
        name: '47-1',
        href: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000048050174'
      }
    ]
  },
  {
    id: 'eu-2016-2102',
    scope: 'Europe',
    name: 'law.europe.2016_2102',
    href: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=celex:32016L2102',
    date: {
      year: 2016,
      month: 10,
      day: 26
    }
  },
  {
    id: 'eu-2019-882',
    scope: 'Europe',
    name: 'law.europe.2019_882',
    description: 'Dite "EAA": "European Accessibility Act',
    href: 'https://eur-lex.europa.eu/eli/dir/2019/882/oj?locale=fr',
    date: {
      year: 2019,
      month: 4,
      day: 17
    }
  }
]
