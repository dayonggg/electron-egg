<template>
  <div>is work.</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const loadingElement = document.getElementById('loadingPage')
  if (loadingElement) {
    (loadingElement as HTMLElement).remove()
  }
})
</script>
<style></style>
