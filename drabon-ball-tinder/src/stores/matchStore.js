import { reactive } from 'vue'

// 1. leemos una sola vez al arrancar
const list = reactive(JSON.parse(localStorage.getItem('matches') || '[]'))

export const matchStore = {
  list, // <-- este es el array REACTIVO

  add(character) {
    if (!list.find(c => c.id === character.id)) {
      list.push(character)
      localStorage.setItem('matches', JSON.stringify(list))
    }
  },

  getAll() {
    return list // <-- devolvemos el array reactivo, no un nuevo JSON.parse
  },
  remove(id) {
  const idx = list.findIndex(c => c.id === id)
  if (idx !== -1) list.splice(idx, 1)
  localStorage.setItem('matches', JSON.stringify(list))
}
}