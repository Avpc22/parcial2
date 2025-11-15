import { reactive } from 'vue'

//Store reactivo
export const characterStore = reactive({
  characters: []   // personajes combinados (API + locales)
})

// Cargar personajes desde API y combinar con locales
export async function loadCharacters() {
  // Traemos solo los locales desde localStorage
  const local = JSON.parse(localStorage.getItem('customCharacters') || '[]')
  characterStore.characters = local
}

//Obtener todos los personajes
export function getAll() {
  return characterStore.characters
}

//Obtener por género
export function getByGender(gender) {
  return characterStore.characters.filter(c => c.gender === gender)
}

//Crear personaje local
export function createCharacter(character) {
  const newCharacter = { ...character, id: Date.now() }
  // guardamos en el store reactivo
  characterStore.characters.push(newCharacter)

  // guardamos en localStorage
  saveLocalCharacter(newCharacter)
}

// Editar personaje local
export function editCharacter(character) {
  const i = characterStore.characters.findIndex(c => c.id === character.id)
  if (i !== -1) {
    characterStore.characters[i] = { ...character }
    saveAllLocalCharacters()
  }
}

// Borrar personaje local
export function deleteCharacter(id) {
  characterStore.characters = characterStore.characters.filter(c => c.id !== id)
  saveAllLocalCharacters()
}

// =====================
// Funciones de persistencia local
// =====================

// Guardar un personaje nuevo
function saveLocalCharacter(character) {
  const local = JSON.parse(localStorage.getItem('customCharacters') || '[]')
  local.push(character)
  localStorage.setItem('customCharacters', JSON.stringify(local))
}

// Guardar todos los locales (editar o borrar)
function saveAllLocalCharacters() {
  const locals = characterStore.characters.filter(c => c.id && c.id > 0)
  localStorage.setItem('customCharacters', JSON.stringify(locals))
}
