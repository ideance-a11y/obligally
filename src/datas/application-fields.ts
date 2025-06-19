/** TRADUCTION
 *
 * La valeur de chaque clé "name" fait référence à la clé i18n correspondante.
 * Voir fichier src/datas/i18n.ts
 */

import type { Id } from '@/assets/types/global'
import type { Service } from '@/datas/services'

export type ApplicationField = {
  id: Id
  name: string
  servicesId: Service['id'][]
}

/**
 * Champs d'application
 */
export const applicationFields: ApplicationField[] = [
  {
    id: 'digital-content',
    name: 'general.all_digital_content_including',
    servicesId: [
      'website',
      'mobile-app',
      'internet',
      'intranet',
      'software-package',
      'digital-urban-furniture'
    ]
  },
  {
    id: 'digital-services',
    name: 'general.following_digital_services',
    servicesId: [
      'digital-communication',
      'audiovisual',
      'transport',
      'bank',
      'digital-book',
      'ecommerce'
    ]
  }
]
