<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { createI18n } from 'vue-i18n'
import { messages } from '@/i18n/i18n-vue'

const i18n = createI18n({
  // legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
})

provide('i18n', i18n.global)
</script>
