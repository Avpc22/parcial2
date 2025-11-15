<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">

    <div class="card p-4 shadow-lg" style="width: 100%; max-width: 400px;">
      <h3 class="card-title text-center mb-4">Iniciar Sesión</h3>

      <form @submit.prevent="login">
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input v-model="usuario" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input v-model="contrasena" type="password" class="form-control" required>
        </div>
        <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-danger">Entrar</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usuarioActual } from '@/stores/sessionStore'

const router = useRouter()

const usuarios = [
  { user: 'daniel', pass: '1234' },
  { user: 'ana', pass: '1234' }
]

const usuario = ref('')
const contrasena = ref('')
const error = ref('')

function login() {
  const ok = usuarios.some(u => u.user === usuario.value && u.pass === contrasena.value)
  if (ok) {
    usuarioActual.value = usuario.value
    router.push('/home')
  } else {
    error.value = 'Usuario o contraseña incorrectos'
  }
}
</script>
