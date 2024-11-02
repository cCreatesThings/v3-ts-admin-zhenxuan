<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  prefix: {
    type: String,
    default: '#icon-'
  },
  color: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '16px'
  },
  height: {
    type: String,
    default: '16px'
  }
})
</script>

<template>
  <svg :style="{ width, height }">
    <use :fill="color" :xlink:href="`${prefix}${name}`"></use>
  </svg>
</template>
