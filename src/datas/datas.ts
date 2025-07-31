/**
 * SOURCES
 *
 * - Gsheet de Jeanne L. sur les obligations légales: https://docs.google.com/spreadsheets/d/1T7Jr7ozrUvIglp80gaHJoVnLj63BiKcxoV3mXuprO1Y/edit?gid=0#gid=0
 * - Canvas de Jeanne L. sur les obligations légales: https://www.canva.com/design/DAGilT-Gykw/RiYWAh2aAKEQNhrngW5XDA/view?utlId=h842a3c0ad7
 *
 *
 * TRADUCTION
 *
 * La valeur de chaque clé "name" fait référence à la clé i18n correspondante.
 * Voir fichier src/datas/i18n.ts
 */

// Données fragmentées
import { laws } from '@/datas/laws'
import { applicationFields } from '@/datas/application-fields'
import { obligations } from '@/datas/obligations'
import { sanctions } from '@/datas/sanctions'
import { controlOrganizations, type ControlOrganization } from '@/datas/control-organizations'
import { services } from '@/datas/services'

import { useId } from 'vue'

// Types généraux
import type { Id, ItemConditions } from '@/assets/types/global'

// Types de données
import type { Law } from '@/datas/laws'
import type { ApplicationField } from '@/datas/application-fields'
import type { Obligation } from '@/datas/obligations'
import type { Sanction } from '@/datas/sanctions'
import type { Service } from '@/datas/services'

export type CaseData = {
  conditions: ItemConditions[]
  lawsId: Law['id'][]
  applicationFieldsId: ApplicationField['id'][]
  obligationsId: Obligation['id'][]
  sanctionsId: Sanction['id'][]
  controlOrganizations: { id: Id; servicesId: 'all' | Service['id'][] }[]
}

/**
 * Cas concrêts combinant les infos s'appliquant à une ou plusieurs conditions
 */
const cases: CaseData[] = [
  {
    conditions: [{ entity: 'public' }],
    lawsId: ['fr-2005-102', 'eu-2016-2102'],
    applicationFieldsId: ['digital-content'],
    obligationsId: ['rgaa-compliance', 'declaration-schema-plan-publication', 'compliance-display'],
    sanctionsId: [
      'public-notice',
      'no-compliance-fine',
      'no-declaration-fine',
      'acrom-publication',
      'six-month-renewable'
    ],
    controlOrganizations: [
      {
        id: 'arcom',
        servicesId: 'all'
      }
    ]
  },
  {
    conditions: [{ entity: 'private', turnover: 'over250m' }],
    lawsId: ['fr-2005-102'],
    applicationFieldsId: ['digital-content'],
    obligationsId: [
      'general-compliance',
      'declaration-schema-plan-publication',
      'compliance-display'
    ],
    sanctionsId: [
      'public-notice',
      'no-compliance-fine',
      'no-declaration-fine',
      'acrom-publication',
      'six-month-renewable'
    ],
    controlOrganizations: [
      {
        id: 'arcom',
        servicesId: 'all'
      }
    ]
  },
  {
    conditions: [
      { entity: 'private', turnover: 'over250m', provideService: 'true' },
      { entity: 'private', turnover: 'over2m', provideService: 'true' },
      { entity: 'private', exceedEmployeeLimit: 'true', provideService: 'true' }
    ],
    lawsId: ['fr-2023-171', 'eu-2019-882'],
    applicationFieldsId: ['digital-services'],
    obligationsId: [
      'en-301-549-compliance',
      'user-accessibility-information',
      'maintaining-compliance-procedures',
      'informing-authorities-of-noncompliance',
      'providing-compliance-proof-ability'
    ],
    sanctionsId: ['five-class-fine', 'injunction-daily-fine', 'fine-in-europe'],
    controlOrganizations: [
      { id: 'dgccrf', servicesId: ['digital-book', 'ecommerce', 'transport'] },
      { id: 'amf', servicesId: ['bank'] },
      { id: 'bdf', servicesId: ['bank'] },
      { id: 'arcom', servicesId: ['audiovisual'] },
      { id: 'arcep', servicesId: ['digital-communication'] }
    ]
  }
]

export type Data = {
  id: string
  conditions: ItemConditions[]
  laws: Law[]
  applicationFields: {
    id: ApplicationField['id']
    name: ApplicationField['name']
    services: Service[]
  }[]
  obligations: Obligation[]
  sanctions: Sanction[]
  controlOrganizations: (ControlOrganization & {
    services: 'all' | Service[]
  })[]
}

/**
 * Tableau de données finales
 * Construit à partir de `cases` en replaçant les id par leurs données correspondantes
 */
export const datas: Data[] = cases.map((c) => {
  return {
    id: useId(),
    conditions: c.conditions,
    laws: c.lawsId.map((id) => laws.find((law) => law.id === id) as Law),
    applicationFields: c.applicationFieldsId.map((id) => {
      const field = applicationFields.find((field) => field.id === id) as ApplicationField
      /** Récupèration les sous-références aux services */
      return {
        id: field.id,
        name: field.name,
        services: field.servicesId.map(
          (id) => services.find((service) => service.id === id) as Service
        )
      }
    }),
    obligations: c.obligationsId.map(
      (id) => obligations.find((obligation) => obligation.id === id) as Obligation
    ),
    sanctions: c.sanctionsId.map(
      (id) => sanctions.find((sanction) => sanction.id === id) as Sanction
    ),
    controlOrganizations: c.controlOrganizations.map((orgData) => {
      return {
        ...(controlOrganizations.find((org) => orgData.id === org.id) as ControlOrganization),
        services:
          orgData.servicesId === 'all'
            ? orgData.servicesId
            : orgData.servicesId.map(
                (id) => services.find((service) => service.id === id) as Service
              )
      }
    })
  }
})
