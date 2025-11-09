<template>
    <h1>Login</h1>
    <h2>Listos para iniciar</h2>
    <TinderCard :character=demo />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadCharacters, getAll } from '@/services/characterService.js'
import TinderCard from '@/components/TinderCard.vue'

const demo = ref({})

onMounted(async () => {
  await loadCharacters()
  demo.value = getAll()[36]
})
</script>
