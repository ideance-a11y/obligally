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
/**
 * Rend une liste non ordonnée ou un paragraphe selon la valeur de `length`
 * <p> et <ul> rendus par défaut mais modifiables via les propriétés `singleElement` et `listElement`
 */
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
