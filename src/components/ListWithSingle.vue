<template>
  <component
    v-if="length === 1"
    :is="singleElement"
  >
    <slot :index="0" />
  </component>

  <component
    v-else-if="length > 1"
    :is="listElement"
  >
    <li
      v-for="(_, index) in Array(length)"
      :key="`${uid}-${index}`"
    >
      <slot :index />
    </li>
  </component>
</template>

<script setup lang="ts">
import { useId } from 'vue'

withDefaults(
  defineProps<{
    length: number
    singleElement?: Element['tagName']
    listElement?: Element['tagName']
  }>(),
  {
    singleElement: 'P',
    listElement: 'UL'
  }
)

/** Liste des slots */
defineSlots<{
  default(props: { index: number }): unknown
}>()


/** Id unique */
const uid = useId()
</script>
