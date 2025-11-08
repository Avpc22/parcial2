import { Character } from '@/models/Character.js';


let characters = [];

export async function loadCharacters() {
  const res = await fetch('https://dragonball-api.com/api/characters?limit=100')
  const data = await res.json();
  characters = data.items.map(p => new Character(p));
}
export function getAll() {
    return characters;
}

export function getByGender(gender) {
  return characters.filter(c => c.gender === gender);
}
