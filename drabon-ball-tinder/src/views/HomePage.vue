<template>
        <TinderCard :character=demo />
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { loadCharacters, getAll } from '@/services/CharacterService.js'
import TinderCard from '@/components/TinderCard.vue'

const demo = ref({})

onMounted(async () => {
  await loadCharacters()
  demo.value = getAll()[18]
})
</script>