<template>
  <form
    class="wrapper-form"
    action=""
    novalidate
    v-on:submit.prevent="handleFormSubmit"
    v-on:change="handleFormChange"
  >
    <p class="text-center">{{ t('general.form_mandatory_fields_legend') }}</p>

    <!-- 0 : Type d'entité -->
    <FieldsetGroup
      v-if="isDisplayedEntity"
      ref="fieldset-entity"
    >
      <template v-slot:legend>
        <h3>{{ t('general.what_entity_are_you') }}</h3>
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

    <!-- 1 : Chiffre d'affaire -->
    <FieldsetGroup
      v-if="isDisplayedTurnover"
      ref="fieldset-turnover"
    >
      <template v-slot:legend>
        <h3>{{ t('general.what_is_your_turnover') }}</h3>
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

    <!-- 2 : Service -->
    <FieldsetGroup
      v-if="isDisplayedService"
      ref="fieldset-service"
    >
      <template v-slot:legend>
        <h3>{{ t('general.do_you_provide_service') }}</h3>
      </template>
      <template
        v-if="isErrorService && isFormSubmitted"
        v-slot:error
      >
        {{ t('error.empty_service') }}
      </template>
      <WrapperDisclosure>
        <template v-slot:button>
          {{ t('general.what_is_a_service') }}
        </template>
        <p>{{ t('general.a_service_is') }}</p>
        <ul>
          <li v-for="service in digitalServices">
            {{ t(service.name) }}
          </li>
        </ul>
        <span v-html="t('html.service_source_content')"></span>
      </WrapperDisclosure>
      <InputRadio
        name="service"
        value="true"
        required
        v-model="provideServiceValue"
        >{{ t('general.service_yes') }}</InputRadio
      >
      <InputRadio
        name="service"
        value="false"
        required
        v-model="provideServiceValue"
        >{{ t('general.service_no') }}</InputRadio
      >
    </FieldsetGroup>

    <!-- 3 : Nombre d'employés -->
    <FieldsetGroup
      v-if="isDisplayedEmployees"
      ref="fieldset-employees"
    >
      <template v-slot:legend>
        <h3>{{ t('general.how_many_employees') }}</h3>
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

    <button
      v-if="isDisplayedPreviousBtn"
      type="button"
      v-on:click="handleFormPrevious"
    >
      {{ t('general.previous') }}
    </button>
    <button
      v-if="isDisplayedNextBtn"
      type="submit"
    >
      <template v-if="nextStep === 10">
        {{ t('general.validate') }}
      </template>
      <template v-else>
        {{ t('general.next') }}
      </template>
    </button>

    <button
      v-if="isDisplayedResetBtn"
      v-on:click="handleReset"
    >
      {{ t('general.reset') }}
    </button>
  </form>

  <FormSummary
    v-if="currentStep > 0"
    :currentStep
    :entity="entityValue"
    :turnover="turnoverValue !== '' ? turnoverValue : undefined"
    :exceedEmployeeLimit="exceedEmployeeLimitValue !== '' ? exceedEmployeeLimitValue : undefined"
    :provideService="provideServiceValue !== '' ? provideServiceValue : undefined"
  />

  <!-- Obligations légales selon données complétées -->
  <ObligationsInfos
    v-if="isDisplayedResults && entityValue"
    ref="obligations-title"
    :entity="entityValue"
    :turnover="turnoverValue !== '' ? turnoverValue : undefined"
    :exceedEmployeeLimit="exceedEmployeeLimitValue !== '' ? exceedEmployeeLimitValue : undefined"
    :provideService="provideServiceValue !== '' ? provideServiceValue : undefined"
  />
</template>

<script setup lang="ts">
import FieldsetGroup from '@/components/form/FieldsetGroup.vue'
import FormSummary from './FormSummary.vue'
import InputRadio from '@/components/form/InputRadio.vue'
import ObligationsInfos from '@/components/ObligationsInfos.vue'
import WrapperDisclosure from './WrapperDisclosure.vue'

import { ref, computed, useTemplateRef, provide, nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import { messages } from '@/i18n/i18n-vue'

import type { Entity, Turnover, StringBoolean } from '@/assets/types/global'

/** Instanciation de i18n */
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
/** Valeur des radios "Fournit un service" */
const provideServiceValue = ref<StringBoolean | ''>('')
/** Valeur des radios "Nombre d'employés" */
const exceedEmployeeLimitValue = ref<StringBoolean | ''>('')

/** Etat validé ou non du formulaire */
const isFormSubmitted = ref(false)

/**
 * Etape courante du formulaire:
 * - 0 : Entité
 * - 1 : Chiffre d'affaire
 * - 2 : Service ou non
 * - 3 : Nombre d'employés
 * - 10 : Résultats
 */
type Step = 0 | 1 | 2 | 3 | 10
const currentStep = ref<Step>(0)

/** Etape précédente calculée selon les options sélectionnées */
const previousStep = computed<Step | null>(() => {
  switch (currentStep.value) {
    case 1:
      return 0
    case 2:
      return 1
    case 3:
      return 2
    case 10:
      return 0
    default:
      return null
  }
})

/** Etape suivante calculée selon les options sélectionnées */
const nextStep = computed<Step | null>(() => {
  switch (currentStep.value) {
    case 0:
      if (entityValue.value === 'public') return 10
      if (entityValue.value === 'private') return 1
    case 1:
      return 2
    case 2:
      if (provideServiceValue.value === 'false') return 10
      if (turnoverValue.value !== 'over2m' && provideServiceValue.value === 'true') return 10
      if (turnoverValue.value !== 'below2m' && provideServiceValue.value === 'true') return 3
    case 3:
      return 10
    case 10:
      return null
    default:
      return null
  }
})

/**
 * Etat d'affichage des différents composants
 */
const isDisplayedEntity = computed(() => currentStep.value === 0)
const isDisplayedTurnover = computed(() => currentStep.value === 1)
const isDisplayedService = computed(() => currentStep.value === 2)
const isDisplayedEmployees = computed(() => currentStep.value === 3)
const isDisplayedResults = computed(() => currentStep.value === 10)
const isDisplayedPreviousBtn = computed(() => ![0, 10].includes(currentStep.value))
const isDisplayedNextBtn = computed(() => ![10].includes(currentStep.value))
const isDisplayedResetBtn = computed(() => [10].includes(currentStep.value))

/**
 * Etat de completion des différents groupes
 */
const isErrorEntity = computed(() => currentStep.value === 0 && entityValue.value === '')
const isErrorTurnover = computed(() => currentStep.value === 1 && turnoverValue.value === '')
const isErrorService = computed(() => currentStep.value === 2 && provideServiceValue.value === '')
const isErrorEmployees = computed(
  () => currentStep.value === 3 && exceedEmployeeLimitValue.value === ''
)
const isError = computed(
  () =>
    isErrorEntity.value || isErrorTurnover.value || isErrorService.value || isErrorEmployees.value
)

/**
 * Références des différents composants qui recevront le focus clavier
 */
const fieldsetEntityElem = useTemplateRef('fieldset-entity')
const fieldsetTurnoverElem = useTemplateRef('fieldset-turnover')
const fieldsetServiceElem = useTemplateRef('fieldset-service')
const fieldsetEmployeesElem = useTemplateRef('fieldset-employees')
const obligationsTitleElem = useTemplateRef('obligations-title')

/** Étape de formulaire précédente */
function handleFormPrevious() {
  previousStep.value !== null && setCurrentStep(previousStep.value)
}

/** Soumission du formulaire à chaque étape */
function handleFormSubmit() {
  isFormSubmitted.value = true

  // En cas d'erreur, remplacement du focus sur le fieldset correspondant
  if (isError.value === true) handleFocus()
  // Sinon et s'il y a une prochaine étape, on avance
  else if (nextStep.value !== null) setCurrentStep(nextStep.value)
}

/** Réinitialisation du formulaire */
function handleReset() {
  entityValue.value =
    turnoverValue.value =
    provideServiceValue.value =
    exceedEmployeeLimitValue.value =
      ''
  setCurrentStep(0)
}

/**
 * Efface les données enregistrées pour les questions non affichées
 * à chaque interaction avec des éléments de formulaire
 *
 * @param evt : évènement change natif placé sur l'élément <form>
 */
function handleFormChange(evt: Event) {
  const target = evt.target as HTMLInputElement
  const name: string = target.name

  isFormSubmitted.value = false

  // Si modification d'une valeur "précédente", reset des valeurs des étapes suivantes
  if (['entity'].includes(name)) turnoverValue.value = ''
  if (['entity', 'turnover'].includes(name)) provideServiceValue.value = ''
  if (['entity', 'turnover', 'service'].includes(name)) exceedEmployeeLimitValue.value = ''
}

/**
 * Modifie l'étape en cours et replace le focus clavier
 */
async function setCurrentStep(step: Step) {
  isFormSubmitted.value = false
  currentStep.value = step
  // Attente de la prochaine maj de DOM avant déplacement du focus
  await nextTick()
  handleFocus()
}

/**
 * Replace le focus clavier selon l'étape en cours
 * Appelé automatiquement lors d'un changement d'étape avec SetCurrentStep
 * Appelé en cas d'erreur
 */
function handleFocus() {
  switch (currentStep.value) {
    case 0:
      fieldsetEntityElem.value?.fieldsetRef?.focus()
    case 1:
      fieldsetTurnoverElem.value?.fieldsetRef?.focus()
    case 2:
      fieldsetServiceElem.value?.fieldsetRef?.focus()
    case 3:
      fieldsetEmployeesElem.value?.fieldsetRef?.focus()
    case 10:
      obligationsTitleElem.value?.titleRef?.focus()
  }
}

/**
 * Récupération des services numériques appliquables
 * dans le cadre de la directive européene
 */
import { services, type Service } from '@/datas/services'
import { applicationFields } from '@/datas/application-fields'

const digitalServices = applicationFields
  .find((app) => app.id === 'digital-services')
  ?.servicesId.map((item) => services.find((serv) => serv.id === item)) as Service[]
</script>

<style>
q .wrapper-form {
  display: grid;
  row-gap: var(--size-20);
}
</style>
