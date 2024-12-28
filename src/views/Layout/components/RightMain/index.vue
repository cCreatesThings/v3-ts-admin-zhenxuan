<script setup lang="ts">
// Setup logic here
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in" name="fade">
        <Suspense>
          <!-- 主要内容 -->
          <component :is="Component"></component>
          <!-- 加载中状态 -->
          <template #fallback> 正在加载... </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
