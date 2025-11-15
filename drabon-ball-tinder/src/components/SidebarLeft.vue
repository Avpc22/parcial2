<template>
  <aside class="sidebar" :class="{ open: isOpen }">
    <div class="sidebar-content">
      <h5 class="mb-4">Menú</h5>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/matches">Matches</router-link>
        </li>
        <li class="nav-item">
          <button class="btn btn-sm btn-outline-danger" @click="cerrarSesion">
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function cerrarSesion() {
  localStorage.removeItem('matches')
  router.push('/login')
}
</script>

<style scoped>
.sidebar {
  position: fixed; /* ¡Fijo! */
  top: 0;
  left: 0;
  width: 260px; /* Ancho que usaremos para empujar */
  height: 100vh;
  background: #fff;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.08);
  /* 🔴 ELIMINAR: transform: translateX(-100%); */
  /* 🔴 ELIMINAR: transition: transform 0.3s ease; */
  z-index: 1030;
}
.sidebar.open {
  transform: translateX(0);
}
.sidebar-content {
  padding: 1.5rem;
}
.nav-link {
  color: #333;
  font-weight: 500;
}
.nav-link:hover {
  color: #ff4458;
}
</style>