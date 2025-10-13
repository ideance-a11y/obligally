<template>
  <div class="ice-disclosure">
    <button
      type="button"
      class="ice-disclosure-heading"
      :aria-expanded="isDisplayed"
      v-on:click="isDisplayed = !isDisplayed"
    >
      <slot name="button" />
      <span
        v-if="iconClass"
        :class="[`ice-icon`, iconClass]"
        aria-hidden="true"
      ></span>
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
  iconClass?: string
}>()

/** Liste des slots */
defineSlots<{
  button: unknown
  default: unknown
}>()
</script>
