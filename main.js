const form = document.querySelector('.form')
const input = document.getElementById('selectedNumber')
const errContainer = document.getElementById('errContainer')
const container = document.querySelector('.pokeContainer')

import HAS_NOT_ERROR from "./js_modules/error_check"
import FETCH_POKEMON from "./js_modules/fetch_poke"
import RENDER_POKEMON from "./js_modules/render_poke"

const SELECT_POKEMON = async (e) => {
  e.preventDefault()
  let selectPokemon = input.value
  container.innerHTML = ""
  const errInContainer = '<span>No es posible mostrar un pokemon porque se encontro un error</span>'

  if (!HAS_NOT_ERROR(selectPokemon)) {
    return container.innerHTML = errInContainer
  }

  const data = await FETCH_POKEMON(selectPokemon)

  if (data == null || data == undefined) {
    return container.innerHTML = errInContainer
  }
  RENDER_POKEMON(data)
  return
}

const init = () => {
  form.addEventListener("submit", SELECT_POKEMON)
}
init()

export default container