<template>
  <div
    class="card-wrapper d-flex align-items-center justify-content-center"
  >
    <div class="tinder-card card text-center">
      <!-- Imagen real del personaje -->
      <img
        :src="character.image"
        @error="
          $event.target.src =
            'https://placehold.co/360x380/34d399/ffffff?text=Sin+Foto'
        "
        class="card-img-top"
        :alt="character.name"
      />

      <!-- Cuerpo -->
      <div class="card-body">
        <!-- Nombre real -->
        <h5 class="card-title mb-1">{{ character.name }}</h5>

        <!-- Raza y Ki reales -->
        <p class="card-text text-muted">
          Raza: {{ character.race }}<br />
          Ki: {{ character.ki }}
        </p>

        <!-- Botones -->
        <div class="d-flex justify-content-center gap-3 mt-3">
          <button class="btn btn-outline-danger btn-round">
            <i class="bi bi-x-lg"></i>
          </button>
          <button class="btn btn-outline-success btn-round">
            <i class="bi bi-heart-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
/* eslint-disable no-undef */
defineProps({
  character: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.tinder-card {
  width: 100%;
  max-width: 360px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.tinder-card img {
  height: 380px;
  object-fit: cover;
  object-position: top;
}


.card-body h5 {
  font-weight: 600;
}

.btn-round {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
</style>
