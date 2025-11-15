# 🐉 Dragon Ball Tinder — Aplicación Web con Vue 3 + Vite

Esta aplicación es un proyecto académico que simula un “Tinder” de personajes de Dragon Ball.  
Los usuarios pueden visualizar personajes, ver su información (raza, ki, imagen) y decidir si dar “like” o “rechazar”.  
El proyecto está construido con **Vue 3**, **Vite**, **Bootstrap**, componentes modulares y consumo de API externa.

---

## 1. Descripción general del negocio

La aplicación tiene como objetivo ofrecer una experiencia dinámica tipo “swipe” donde los usuarios pueden:

- Ver cartas (cards) individuales de personajes.
- Conocer sus habilidades, raza y nivel de ki.
- Aceptar o rechazar personajes (simulación de un sistema de match).
- Navegar mediante un layout completo (Header, Sidebar, Footer).

La idea del “negocio” es que en una futura versión los usuarios puedan crear cuentas, guardar favoritos y generar estadísticas de afinidad.

---

## 2. Modularización del proyecto

El proyecto utiliza una arquitectura **modular** basada en:

### 🧱 **Componentes**
En la carpeta `src/components/` se encuentran componentes reutilizables, como:

- `Header.vue`
- `Sidebar.vue`
- `Footer.vue`
- `CharacterCard.vue` → muestra la card tipo Tinder
- `BaseButton.vue` (opcional)

Cada componente cumple una única responsabilidad.

---

### **Vistas (Views)**
Las pantallas principales se agrupan en `src/views/`, por ejemplo:

- `HomeView.vue`
- `CharacterView.vue`

Cada vista se utiliza desde el router para renderizar pantallas completas.

---

### **Rutas (Router)**
El proyecto utiliza Vue Router.  
Ejemplo de configuración:

```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/personajes', name: 'personajes', component: () => import('../views/CharacterView.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

API PUBLICA UTILIZAD;https://dragonball-api.com/api/characters?limit=100
