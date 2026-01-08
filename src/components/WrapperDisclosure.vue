<template>
  <div class="ice-disclosure">
    <!-- Si wrapper nécessaire autour du bouton -->
    <component
      v-if="buttonWrapperElem"
      :is="buttonWrapperElem"
      :class="buttonWrapperClass"
    >
      <button
        type="button"
        class="ice-disclosure-heading"
        :aria-expanded="isDisplayed"
        v-on:click="isDisplayed = !isDisplayed"
      >
        <slot name="button" />
      </button>
    </component>
    <!-- Si pas de wrapper autour du bouton -->
    <button
      v-else
      type="button"
      class="ice-disclosure-heading"
      :aria-expanded="isDisplayed"
      v-on:click="isDisplayed = !isDisplayed"
    >
      <slot name="button" />
    </button>
    <div
      class="ice-disclosure-panel with-typo-styles"
      v-show="isDisplayed"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDisplayed = ref(false)

defineProps<{
  /** Élément HTML qui structure le bouton */
  buttonWrapperElem?: string
  /** Classes de l'élément HTML qui structure le bouton */
  buttonWrapperClass?: string
}>()

/** Liste des slots */
defineSlots<{
  button: unknown
  default: unknown
}>()
</script>
