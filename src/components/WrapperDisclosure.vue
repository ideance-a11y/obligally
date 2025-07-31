<template>
  <button
    type="button"
    :aria-expanded="isDisplayed"
    v-on:click="isDisplayed = !isDisplayed"
  >
    <slot name="button" />
  </button>
  <div v-show="isDisplayed">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDisplayed = ref(false)

/** Liste des slots */
defineSlots<{
  button(): unknown
  default(): unknown
}>()
</script>
