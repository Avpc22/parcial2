<template>
  <div>
    <HeaderBar></HeaderBar>
  </div>
  <TinderCard v-if="demo && demo.name" :character="demo" @decide="decide" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {getAll } from '@/services/CharacterService.js'
import TinderCard from '@/components/TinderCard.vue'
import { matchStore } from '@/stores/matchStore'
import { usuarioActual } from '@/stores/sessionStore'
import HeaderBar from '@/components/HeaderBar.vue'

const filtrados = ref([])
const demo = ref({})
const index = ref(0)
onMounted(async () => {
  const todos = getAll()
  const filtro = usuarioActual.value === 'daniel' ? 'Female' : 'Male'
  filtrados.value = todos.filter(c => c.gender === filtro)
  demo.value = filtrados.value[index.value] || null
})

function decide(like) {
  if (like) {
    matchStore.add(demo.value)
  }
  next()
}

function next() {
  const total = filtrados.value.length
  index.value = (index.value + 1) % total
  demo.value = filtrados.value[index.value] || null
}
</script>