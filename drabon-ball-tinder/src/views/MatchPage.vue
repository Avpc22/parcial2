<template>
  <h2 class="text-center mt-4">Tus personajes favoritos ❤️</h2>
  <div class="d-flex flex-wrap justify-content-center gap-3 p-3">
    <div
      v-for="c in matchStore.list"
      :key="c.id"
    >
     <MatchCard v-if="c && c.id" :key="c.id" :character="c" @remove="matchStore.remove"
/>
    </div>
  </div>
</template>

<script setup>
import MatchCard from '@/components/MatchCard.vue';
import { matchStore } from '@/stores/matchStore.js';
</script>