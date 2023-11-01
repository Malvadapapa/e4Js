import container from "../main";

const POKE_TYPES_WRAPER = (types) => {
    let avaibleTypes = []
    types.forEach(item => {
        avaibleTypes.push(item.type.name)
    });
    return avaibleTypes
}



const RENDER_POKEMON = ({ name, weight, sprites, types }) => {

    return container.innerHTML = `
  <div class="card">
  <h2>${name.toUpperCase()}</h2>
  <img src="${sprites.other.dream_world.front_default || sprites.front_default}" alt="">
  <div class="ClassContainer">
  <p>Tipos:</p>
  ${POKE_TYPES_WRAPER(types).join(', ')}
   </div>
  
  <p>Peso = ${weight} kg</p>
  </div>`

}

export default RENDER_POKEMON 