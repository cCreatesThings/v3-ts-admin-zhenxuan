<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/es/locale/lang/en'
import { shallowRef } from 'vue'
const lang = shallowRef(zhCn)
</script>
<template>
  <ElConfigProvider :locale="lang">
    <RouterView />
  </ElConfigProvider>
</template>

