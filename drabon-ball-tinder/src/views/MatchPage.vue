<template>
  <SidebarLeft></SidebarLeft>
  
  <div class="content-wrapper">
    <HeaderBar></HeaderBar>
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
  </div>
</template>

<script setup>
import MatchCard from '@/components/MatchCard.vue';
import { matchStore } from '@/stores/matchStore.js';
import SidebarLeft from '@/components/SidebarLeft.vue';
import HeaderBar from '@/components/HeaderBar.vue';
</script>
<style>
/* El ancho de tu sidebar es 260px */
.content-wrapper {
  margin-left: 260px; 
}
</style>