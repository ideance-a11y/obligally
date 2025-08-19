<template>
  <div
    v-bind="wrapperAttrs"
  >
    <input
      :id="uid"
      v-model="model"
      type="radio"
      class="radio"
      v-bind="$attrs"
    />
    <label
      :for="uid"
      class="ice-question-option"
    >
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'
import type { HTMLAttributes } from 'vue'

defineProps<{
  wrapperAttrs?: HTMLAttributes
}>()

const model = defineModel<string | number>()

/** Id unique pour lier les éléments */
const uid = useId()
</script>
