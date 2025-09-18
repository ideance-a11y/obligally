/** TRADUCTION
 *
 * La valeur de chaque clé "name" fait référence à la clé i18n correspondante.
 * Voir fichier src/datas/i18n.ts
 */

import type { Id } from '@/assets/types/global'

export type ControlOrganization = {
  id: Id
  name: string
  acronym?: string
}

/**
 * Organismes de contrôle
 */
export const controlOrganizations: ControlOrganization[] = [
  {
    id: 'arcom',
    name: 'control_organization.arcom_long',
    acronym: 'control_organization.arcom',
  },
  {
    id: 'dgccrf',
    name: 'control_organization.dgccrf_long',
    acronym: 'control_organization.dgccrf',
  },
  {
    id: 'bdf',
    name: 'control_organization.bdf',
    acronym: '',
  },
  {
    id: 'amf',
    name: 'control_organization.amf_long',
    acronym: 'control_organization.amf',
  },
  {
    id: 'arcep',
    name: 'control_organization.arcep_long',
    acronym: 'control_organization.arcep',
  },
  {
    id: 'amf',
    name: 'control_organization.amf_long',
    acronym: 'control_organization.amf',
  }
]
