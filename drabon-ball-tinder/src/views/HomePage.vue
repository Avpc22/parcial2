<template>
        <TinderCard v-if="demo && demo.name" :character="demo" @decide="decide" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadCharacters, getAll } from '@/services/CharacterService.js'
import TinderCard from '@/components/TinderCard.vue'
import { matchStore } from '@/matches/matchStore'

const demo = ref({})
const index = ref(0)
onMounted(async () => {
  await loadCharacters()
  demo.value = getAll()[index.value]
})

function decide(like) {
 console.log('📥 decide recibido:', like)
  if (like) {
    console.log('💚 like es TRUE')
    console.log('🧍 personaje actual:', demo.value.name)
    matchStore.add(demo.value)
  }
  next()
}

function next() {
  const total = getAll().length
  index.value = (index.value + 1) % total // si llega al final, vuelve al principio
  demo.value = getAll()[index.value]
}
</script>