/** TRADUCTION
 *
 * La valeur de chaque clé "name" fait référence à la clé i18n correspondante.
 * Voir fichier src/datas/i18n.ts
 */

import type { Id } from '@/assets/types/global'

export type Service = {
  id: Id
  name: string
}

/**
 * Services concernés
 */
export const services: Service[] = [
  {
    id: 'audiovisual',
    name: 'service.audiovisual'
  },
  {
    id: 'digital-communication',
    name: 'service.digital_communication'
  },
  {
    id: 'transport',
    name: 'service.transport'
  },
  {
    id: 'bank',
    name: 'service.bank'
  },
  {
    id: 'digital-book',
    name: 'service.digital_book'
  },
  {
    id: 'ecommerce',
    name: 'service.ecommerce'
  },
  {
    id: 'website',
    name: 'service.website'
  },
  {
    id: 'mobile-app',
    name: 'service.mobile_app'
  },
  {
    id: 'internet',
    name: 'service.internet'
  },
  {
    id: 'intranet',
    name: 'service.intranet'
  },
  {
    id: 'software-package',
    name: 'service.software_package'
  },
  {
    id: 'digital-urban-furniture',
    name: 'service.digital_urban_furniture'
  }
]
