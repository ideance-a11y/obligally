<template>
  <h1 class="text-center">
    {{ t('general.a11y_legal_obligations_france') }}
  </h1>

  <form
    class="wrapper-form"
    action=""
    v-on:submit.prevent="handleFormSubmit"
    v-on:change="handleFormChange"
    novalidate
  >
    <p class="text-right">{{ t('general.form_mandatory_fields_legend') }}</p>

    <!-- Type d'entité -->
    <FieldsetGroup ref="fieldset-entity">
      <template v-slot:legend>
        <h3>{{ t('general.what_entity_are_you') }} *</h3>
      </template>
      <template
        v-if="isErrorEntity && isFormSubmitted"
        v-slot:error
      >
        {{ t('error.empty_entity') }}
      </template>
      <InputRadio
        name="entity"
        value="public"
        required
        v-model="entityValue"
        >{{ t('general.public_entity') }}</InputRadio
      >
      <InputRadio
        name="entity"
        value="private"
        required
        v-model="entityValue"
        >{{ t('general.private_entity') }}</InputRadio
      >
    </FieldsetGroup>

    <!-- Chiffre d'affaire -->
    <FieldsetGroup
      v-if="isDisplayedTurnover"
      ref="fieldset-turnover"
    >
      <template v-slot:legend>
        <h3>{{ t('general.what_is_your_turnover') }} *</h3>
      </template>
      <template
        v-if="isErrorTurnover && isFormSubmitted"
        v-slot:error
      >
        {{ t('error.empty_turnover') }}
      </template>
      <InputRadio
        name="turnover"
        value="over250m"
        required
        v-model="turnoverValue"
        >{{ t('general.over_250m') }}</InputRadio
      >
      <InputRadio
        name="turnover"
        value="over2m"
        required
        v-model="turnoverValue"
        >{{ t('general.over_2m') }}</InputRadio
      >
      <InputRadio
        name="turnover"
        value="below2m"
        required
        v-model="turnoverValue"
        >{{ t('general.below_2m') }}</InputRadio
      >
    </FieldsetGroup>

    <!-- Nombre d'employés -->
    <FieldsetGroup
      v-if="isDisplayedEmployees"
      ref="fieldset-employees"
    >
      <template v-slot:legend>
        <h3>{{ t('general.how_many_employees') }} *</h3>
      </template>
      <template
        v-if="isErrorEmployees && isFormSubmitted"
        v-slot:error
      >
        {{ t('error.empty_employees') }}
      </template>
      <InputRadio
        name="employeeLimit"
        value="true"
        required
        v-model="exceedEmployeeLimitValue"
        >{{ t('general.over_10') }}</InputRadio
      >
      <InputRadio
        name="employeeLimit"
        value="false"
        required
        v-model="exceedEmployeeLimitValue"
        >{{ t('general.below_10') }}</InputRadio
      >
    </FieldsetGroup>

    <!-- Service -->
    <FieldsetGroup
      v-if="isDisplayedService"
      ref="fieldset-service"
    >
      <template v-slot:legend>
        <h3>{{ t('general.do_you_provide_service') }} *</h3>
      </template>
      <template
        v-if="isErrorService && isFormSubmitted"
        v-slot:error
      >
        {{ t('error.empty_service') }}
      </template>
      <template v-slot:hint>
        <span v-html="t('html.hint_service_content')"></span>
      </template>
      <InputRadio
        name="service"
        value="true"
        required
        v-model="provideServiceValue"
        >{{ t('general.yes') }}</InputRadio
      >
      <InputRadio
        name="service"
        value="false"
        required
        v-model="provideServiceValue"
        >{{ t('general.no') }}</InputRadio
      >
    </FieldsetGroup>

    <p>{{ t('general.form_collect_no_data') }}</p>
    <button type="submit">Valider les informations</button>
  </form>

  <ObligationsInfos
    v-if="isDisplayedResults && entityValue !== ''"
    :entity="entityValue"
    :turnover="turnoverValue !== '' ? turnoverValue : undefined"
    :exceedEmployeeLimit="exceedEmployeeLimitValue !== '' ? exceedEmployeeLimitValue : undefined"
    :provideService="provideServiceValue !== '' ? provideServiceValue : undefined"
  />
</template>

<script setup lang="ts">
import FieldsetGroup from '@/components/form/FieldsetGroup.vue'
import InputRadio from '@/components/form/InputRadio.vue'
import ObligationsInfos from '@/components/ObligationsInfos.vue'

import { ref, computed, useTemplateRef, provide } from 'vue'
import { createI18n } from 'vue-i18n'
import { messages } from '@/i18n/i18n-vue'

import type { Entity, Turnover, StringBoolean } from '@/assets/types/global'

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
})
const { t } = i18n.global
provide('t', t)

/**
 * Données du formulaire
 */
/** Valeur des radios "Entité" */
const entityValue = ref<Entity | ''>('')
/** Valeur des radios "Chiffre d'affaire" */
const turnoverValue = ref<Turnover | ''>('')
/** Valeur des radios "Nombre d'employés" */
const exceedEmployeeLimitValue = ref<StringBoolean | ''>('')
/** Valeur des radios "Fournit un service" */
const provideServiceValue = ref<StringBoolean | ''>('')
/** Etat validé ou non du formulaire */
const isFormSubmitted = ref(false)

/**
 * Etat d'affichage des différents groupes de questions
 */
const isDisplayedTurnover = computed(() => entityValue.value === 'private')
const isDisplayedEmployees = computed(() => {
  return isDisplayedTurnover.value && ['over2m', 'below2m'].includes(turnoverValue.value)
})

const isDisplayedService = computed(() => {
  return (
    isDisplayedTurnover.value &&
    (turnoverValue.value === 'over250m' ||
      turnoverValue.value === 'over2m' ||
      exceedEmployeeLimitValue.value === 'true')
  )
})

const isDisplayedResults = computed(() => {
  return (
    isFormSubmitted.value &&
    !isErrorEntity.value &&
    !isErrorTurnover.value &&
    !isErrorEmployees.value &&
    !isErrorService.value
  )
})

/**
 * Etat complété des différents groupes
 */
const isErrorEntity = computed(() => entityValue.value === '')
const isErrorTurnover = computed(() => isDisplayedTurnover.value && turnoverValue.value === '')
const isErrorEmployees = computed(
  () => isDisplayedEmployees.value && exceedEmployeeLimitValue.value === ''
)
const isErrorService = computed(() => isDisplayedService.value && provideServiceValue.value === '')

const fieldsetEntityElem = useTemplateRef('fieldset-entity')
const fieldsetTurnoverElem = useTemplateRef('fieldset-turnover')
const fieldsetEmployeesElem = useTemplateRef('fieldset-employees')
const fieldsetServiceElem = useTemplateRef('fieldset-service')

/**
 * Efface les données enregristrées pour les questions non affichées
 * à chaque interaction avec des éléments de formulaire
 *
 * @param evt : évènement change natif placé sur l'élément <form>
 */
function handleFormChange(evt: Event) {
  const target = evt.target as HTMLInputElement
  const name: string = target.name

  isFormSubmitted.value = false
  if (['entity'].includes(name)) turnoverValue.value = ''
  if (['entity', 'turnover'].includes(name)) exceedEmployeeLimitValue.value = ''
  if (['entity', 'turnover', 'employeeLimit'].includes(name)) provideServiceValue.value = ''
}

function handleFormSubmit() {
  if (isErrorEntity.value) {
    fieldsetEntityElem.value?.fieldsetRef?.focus()
  } else if (isErrorTurnover.value) {
    fieldsetTurnoverElem.value?.fieldsetRef?.focus()
  } else if (isErrorEmployees.value) {
    fieldsetEmployeesElem.value?.fieldsetRef?.focus()
  } else if (isErrorService.value) {
    fieldsetServiceElem.value?.fieldsetRef?.focus()
  }

  isFormSubmitted.value = true
}
</script>

<style>
.wrapper-form {
  display: grid;
  row-gap: var(--size-20);
}
</style>
