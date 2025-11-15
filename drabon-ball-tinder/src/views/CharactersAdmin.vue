<template>

    <HeaderBar></HeaderBar>
    <SidebarLeft></SidebarLeft>
  <div class="container py-4">

    <h2 class="mb-4">Administrar Personajes</h2>

    <!-- FORMULARIO -->
    <div class="card mb-4 p-4 shadow-sm">
      <h5 class="mb-3">{{ editing ? "Editar Personaje" : "Crear Personaje" }}</h5>

      <form @submit.prevent="save">
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input v-model="form.name" type="text" class="form-control" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Género</label>
          <select v-model="form.gender" class="form-select" required>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Imagen (URL)</label>
          <input v-model="form.image" type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <img v-if="form.image" :src="form.image" class="img-thumbnail" style="max-width: 150px;" />
        </div>

        <button type="submit" class="btn btn-primary">
          {{ editing ? "Guardar Cambios" : "Crear Personaje" }}
        </button>

        <button v-if="editing" type="button" class="btn btn-secondary ms-2" @click="resetForm">
          Cancelar
        </button>
      </form>
    </div>

    <!-- TABLA DE PERSONAJES -->
    <div class="card shadow-sm p-3">
      <h5 class="mb-3">Personajes Creados</h5>

      <table class="table table-bordered table-hover">
        <thead class="table-light">
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Género</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in characterStore.characters" :key="c.id">
            <td>
              <img :src="c.image" class="img-thumbnail" style="max-width: 80px;" />
            </td>
            <td>{{ c.name }}</td>
            <td>{{ c.gender }}</td>
            <td>
              <button class="btn btn-sm btn-warning me-2" @click="startEdit(c)">Editar</button>
              <button class="btn btn-sm btn-danger" @click="remove(c.id)">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-if="characterStore.characters.length === 0" class="text-muted">
        No hay personajes creados todavía.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { characterStore, loadCharacters, createCharacter, editCharacter, deleteCharacter } from '@/services/CharacterService.js'
import HeaderBar from '@/components/HeaderBar.vue'
import SidebarLeft from '@/components/SidebarLeft.vue'

const form = ref({ id: null, name: '', gender: 'Male', image: '' })
const editing = ref(false)

// Cargar API + locales al montar
onMounted(async () => {
  await loadCharacters()
})

// Crear o editar
function save() {
  if (editing.value) {
    editCharacter(form.value)
  } else {
    createCharacter(form.value)
  }
  resetForm()
}

// Editar
function startEdit(c) {
  editing.value = true
  form.value = { ...c }
}

// Borrar
function remove(id) {
  deleteCharacter(id)
}

// Reset formulario
function resetForm() {
  editing.value = false
  form.value = { id: null, name: '', gender: 'Male', image: '' }
}
</script>

<style scoped>
.container {
  max-width: 900px;
}

.card {
  border-radius: 8px;
}

.table img {
  border-radius: 6px;
}
</style>
