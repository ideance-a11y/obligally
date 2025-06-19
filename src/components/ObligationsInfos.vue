<template>
  <div class="wrapper-obligations">
    <template v-if="obligationResults.length === 0">
      <h3>{{ t('general.no_explicit_obligation') }}</h3>
      <div v-html="t('html.no_legal_obligation_content')" />
    </template>

    <template v-else>
      <h2>{{ t('general.your_legal_obligations') }}</h2>

      <template
        v-for="result in obligationResults"
        :key="result.id"
      >
        <article class="wrapper-obligation">
          <!-- Champ d'application -->
          <h3>{{ t('general.application_field') }}</h3>
          <template
            v-for="field in result.applicationFields"
            :key="field.id"
          >
            <p>{{ t(field.name) }} :</p>
            <ListWithSingle :length="field.services.length">
              <template v-slot:default="{ index }">
                {{ t(field.services[index].name) }}
              </template>
            </ListWithSingle>
          </template>

          <!-- Oligations légales -->
          <h3>{{ t('general.obligation', result.obligations.length) }}</h3>
          <ListWithSingle :length="result.obligations.length">
            <template v-slot:default="{ index }">
              {{ t(result.obligations[index].name) }}
            </template>
          </ListWithSingle>

          <!-- Sanctions -->
          <h3>{{ t('general.sanction', result.sanctions.length) }}</h3>
          <p v-if="filterSanctions(result.sanctions, 'penalty').length > 0">
            {{ t('general.legal_penalties', 2) }} :
          </p>
          <ListWithSingle :length="filterSanctions(result.sanctions, 'penalty').length">
            <template v-slot:default="{ index }">
              {{ t(filterSanctions(result.sanctions, 'penalty')[index].name) }}
            </template>
          </ListWithSingle>

          <p v-if="filterSanctions(result.sanctions, 'fine').length > 0">
            {{ t('general.financial_penalties', 2) }} :
          </p>
          <ListWithSingle :length="filterSanctions(result.sanctions, 'fine').length">
            <template v-slot:default="{ index }">
              {{ t(filterSanctions(result.sanctions, 'fine')[index].name) }}
            </template>
          </ListWithSingle>

          <!-- Organismes de contrôle -->
          <h3>{{ t('general.control_organism', result.controlOrganizations.length) }}</h3>
          <ListWithSingle :length="result.controlOrganizations.length">
            <template v-slot:default="{ index }">
              {{ t(result.controlOrganizations[index].name) }}
              {{
                result.controlOrganizations[index].acronym &&
                `(${t(result.controlOrganizations[index].acronym)})`
              }}<template v-if="result.controlOrganizations[index].services !== 'all'"
                >&nbsp;:&ensp;</template
              >

              <ListWithSingle
                v-if="result.controlOrganizations[index].services !== 'all'"
                :length="result.controlOrganizations[index].services.length"
                singleElement="SPAN"
              >
                <!-- Renommage de la prop enfant pour éviter les ambiguités -->
                <template v-slot:default="{ index: subIndex }">
                  {{ t(result.controlOrganizations[index].services[subIndex].name) }}
                </template>
              </ListWithSingle>
            </template>
          </ListWithSingle>

          <!-- Lois -->
          <h3>{{ t('general.reference_text', result.laws.length) }}</h3>
          <ListWithSingle :length="result.laws.length">
            <template v-slot:default="{ index }">
              {{ t(result.laws[index].name) }}
            </template>
          </ListWithSingle>
        </article>
      </template>
      <!-- Fin de boucle sur les obligations -->
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { datas } from '@/datas/datas'

import ListWithSingle from '@/components/ListWithSingle.vue'

import type { Entity, Turnover, StringBoolean, ItemConditions } from '@/assets/types/global'
import type { Sanction } from '@/datas/sanctions'

const t = inject<(key: string, number?: number) => string>('t')
if (!t) throw Error('I18n non fourni')

/** Les props correspondent aux données du formulaire */
const props = defineProps<{
  entity: Entity
  turnover?: Turnover
  exceedEmployeeLimit?: StringBoolean
  provideService?: StringBoolean
}>()

/** Retourne un tableau d'obligations correspondant aux données du formulaire */
const obligationResults = computed(() => datas.filter((data) => matchConditions(data.conditions)))

/**
 * Tableau des props au format ['key: value', 'key: value', ...]
 * Permet de simplifier la correspondance entre les props et les cas d'application des obligations
 */
const propsToArray = computed(() => {
  return Object.entries(props).map((item) => `${item[0]}: ${item[1]}`)
})

/**
 * Vérifie la correspondance d'une ou plusieurs conditions avec les données actuelles du formulaire
 *
 * @param {ItemConditions[]} itemConditions
 * @returns {boolean} true si au moins une des condition correspond aux données actuelles
 */
function matchConditions(itemConditions: ItemConditions[]): boolean {
  return (
    itemConditions.filter((condition) => {
      /** Tableau de conditions au format ['key: value', 'key: value', ...] */
      const entriesToArray = Object.entries(condition).map((item) => `${item[0]}: ${item[1]}`)
      /**
       * Est-ce que toutes les valeurs actuelles se retrouvent
       */
      return entriesToArray.every((v) => propsToArray.value.includes(v)) === true
    }).length > 0
  )
}

// Aides de filtrage du template

/** Filtre un tableau de sanctions par type */
function filterSanctions(sanctions: Sanction[], type: Sanction['type']) {
  return sanctions.filter((sanction) => sanction?.type === type)
}
</script>
