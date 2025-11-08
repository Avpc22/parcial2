
<template>
  <router-view />
</template>
<script setup>
import { onMounted } from 'vue'
import { loadCharacters} from '@/services/characterService.js'

onMounted(async () => {
  await loadCharacters()
})
</script>