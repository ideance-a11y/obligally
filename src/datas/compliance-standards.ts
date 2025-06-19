/** TRADUCTION
 *
 * La valeur de chaque clé "name" fait référence à la clé i18n correspondante.
 * Voir fichier src/datas/i18n.ts
 */

import type { Id } from '@/assets/types/global'

export type ComplianceStandard = {
  id: Id
  name: string
  description: string
  href: string
  scope: string
}

/**
 * Standards de conformité à l'accessibilité
 */
export const complianceStandards: ComplianceStandard[] = [
  {
    id: 'rgaa',
    name: 'standard.rgaa',
    description: 'standard.rgaa_long',
    href: 'https://accessibilite.numerique.gouv.fr/',
    scope: 'France'
  },
  {
    id: 'raweb',
    name: 'standard.raweb',
    description: 'standard.raweb_long',
    href: 'https://accessibilite.public.lu/fr/raweb1/index.html',
    scope: 'Luxembourg'
  },
]
