/** TRADUCTION
 *
 * La valeur de chaque clé "name" fait référence à la clé i18n correspondante.
 * Voir fichier src/datas/i18n.ts
 */

import type { Id } from '@/assets/types/global'

export type Obligation = {
  id: Id
  name: string
}

/**
 * Obligations légales
 */
export const obligations: Obligation[] = [
  {
    id: 'rgaa-compliance',
    name: 'obligation.rgaa_compliance'
  },
  {
    id: 'declaration-schema-plan-publication',
    name: 'obligation.declaration_schema_plan_publication'
  },
  {
    id: 'compliance-display',
    name: 'obligation.compliance_display'
  },
  {
    id: 'general-compliance',
    name: 'obligation.general_compliance'
  },
  {
    id: 'en-301-549-compliance',
    name: 'obligation.en_301_549_compliance'
  },
  {
    id: 'user-accessibility-information',
    name: 'obligation.user_accessibility_information'
  },
  {
    id: 'maintaining-compliance-procedures',
    name: 'obligation.maintaining_compliance_procedures'
  },
  {
    id: 'informing-authorities-of-noncompliance',
    name: 'obligation.informing_authorities_of_noncompliance'
  },
  {
    id: 'providing-compliance-proof-ability',
    name: 'obligation.providing_compliance_proof_ability'
  },
]
