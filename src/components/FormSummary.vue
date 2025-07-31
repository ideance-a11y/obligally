<template>
  <div
    role="region"
    aria-labelledby="summary-title"
  >
    <h2 id="summary-title">{{ t('general.summary') }}</h2>
    <p>
      <template v-if="entity === 'public'">{{ t('summary.public') }}</template>
      <template v-if="entity === 'private'">{{ t('summary.private') }}</template>
    </p>
    <p v-if="currentStep > 1">
      <template v-if="turnover === 'over250m'">{{ t('summary.over250m') }}</template>
      <template v-if="turnover === 'over2m'">{{ t('summary.over2m') }}</template>
      <template v-if="turnover === 'below2m'">{{ t('summary.below2m') }}</template>
    </p>
    <p v-if="currentStep > 2">
      <template v-if="provideService === 'true'">{{ t('summary.provide_service') }}</template>
      <template v-if="provideService === 'false'">{{ t('summary.no_service') }}</template>
    </p>
    <p v-if="currentStep > 3">
      <template v-if="exceedEmployeeLimit === 'true'">{{
        t('summary.over_employee_limit', { count: 10 })
      }}</template>
      <template v-if="exceedEmployeeLimit === 'false'">{{
        t('summary.below_employee_limit', { count: 10 })
      }}</template>
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import type { Entity, Turnover, StringBoolean } from '@/assets/types/global'

defineProps<{
  currentStep: number
  entity?: Entity | ''
  turnover?: Turnover | ''
  provideService?: StringBoolean
  exceedEmployeeLimit?: StringBoolean
}>()

defineSlots<{
  default: unknown
}>()

const t = inject<(key: string, number?: number | { count: number }) => string>('t')
if (!t) throw Error('I18n non fourni')
</script>
