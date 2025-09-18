/** TRADUCTION
 *
 * La valeur de chaque clé "name" fait référence à la clé i18n correspondante.
 * Voir fichier src/datas/i18n.ts
 */

import type { Id } from '@/assets/types/global'

export type Sanction = {
  id: Id
  name: string
  type: 'penalty' | 'fine'
  scope: string
}

/**
 * Sanctions appliquables
 */
export const sanctions: Sanction[] = [
  {
    id: 'public-notice',
    name: 'sanction.public_notice',
    type: 'penalty',
    scope: 'France'
  },
  {
    id: 'no-compliance-fine',
    name: 'sanction.no_compliance_fine',
    type: 'fine',
    scope: 'France'
  },
  {
    id: 'no-declaration-fine',
    name: 'sanction.no_declaration_fine',
    type: 'fine',
    scope: 'France'
  },
  {
    id: 'acrom-publication',
    name: 'sanction.acrom_publication',
    type: 'penalty',
    scope: 'France'
  },
  {
    id: 'six-month-renewable',
    name: 'sanction.six_month_renewable',
    type: 'penalty',
    scope: 'France'
  },
  {
    id: 'five-class-fine',
    name: 'sanction.five_class_fine',
    type: 'fine',
    scope: 'France'
  },
  {
    id: 'injunction-daily-fine',
    name: 'sanction.injunction_daily_fine',
    type: 'fine',
    scope: 'France'
  },
  {
    id: 'fine-in-europe',
    name: 'sanction.fine_in_europe_depends',
    type: 'fine',
    scope: 'Europe'
  },
]
