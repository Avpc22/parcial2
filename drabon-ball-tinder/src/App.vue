
<template>
  <router-view />
</template>
<script setup>
import { onMounted } from 'vue'
import { loadCharacters} from '@/services/CharacterService.js'

onMounted(async () => {
  await loadCharacters()
})
</script>