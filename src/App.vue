<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/es/locale/lang/en'
import { shallowRef } from 'vue'
const lang = shallowRef(zhCn)
</script>
<template>
  <el-button type="primary">按钮</el-button>
  <ElConfigProvider :locale="lang">
    <RouterView />
  </ElConfigProvider>
</template>
