/** Entité sujette aux obligations */
export type Entity = 'public' | 'private'
/** Chiffre d'affaire */
export type Turnover = 'over250m' | 'over2m' | 'below2m'
/** Booléen en chaines de caractères */
export type StringBoolean = 'true' | 'false'
/** Id d'une entrée de données */
export type Id = string
/** Conditions d'applications */
export type ItemConditions = {
  entity: Entity
  turnover?: Turnover
  exceedEmployeeLimit?: StringBoolean
  provideService?: StringBoolean
}

