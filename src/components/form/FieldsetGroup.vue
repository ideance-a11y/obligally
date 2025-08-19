<template>
  <fieldset
    class="ice-question"
    :class="[
      {
        'has-error': $slots.error
      },
    ]"
    :aria-describedby="getDescribedbyAttr()"
    ref="fieldset"
    tabindex="-1"
  >
    <legend class="ice-question-legend">
      <slot name="legend" />
    </legend>
    <p
      v-if="$slots.hint"
      :id="`hint-${uid}`"
      class="input-hint"
    >
      <slot name="hint" />
    </p>
    <p
      v-if="$slots.error"
      :id="`error-${uid}`"
      class="ice-block is-red no-margin-top"
    >
      <slot name="error" />
    </p>
    <div class="ice-question-options">
      <slot />
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { useId, useTemplateRef } from 'vue'

/** Id unique pour lier les éléments */
const uid = useId()

/** Liste des slots */
const slots = defineSlots<{
  default: unknown
  legend: unknown
  hint: unknown
  error: unknown
}>()

/** Ref de l'élément <fieldset> */
const fieldsetRef = useTemplateRef('fieldset')

/** Exposition de l'élément <fieldset> pour placer le focus */
defineExpose({ fieldsetRef })

/** Liste des ids des passage de textes à lier avec l'attr `aria-describedby` */
function getDescribedbyAttr() {
  const describedbyAttrs = [
    ...(slots.hint !== undefined ? [`hint-${uid}`] : []),
    ...(slots.error !== undefined ? [`error-${uid}`] : []),
  ]

  return describedbyAttrs.length > 0 ? describedbyAttrs.toString().replace(',', ' ') : undefined
}
</script>

<style>
  fieldset,
  legend {
    border: none;
    padding: 0;
  }
</style>
