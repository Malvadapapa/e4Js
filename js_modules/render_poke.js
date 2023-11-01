import container from "../main";

const POKE_TYPES_WRAPER = (types) => {
    let avaibleTypes = []
    types.forEach(item => {
        avaibleTypes.push(item.type.name)
    });
    return avaibleTypes
}

const FOOT_TO_METERS = (height)=>{
    const valorPies = 0.3048
const finalHeight = Math.ceil(height*valorPies)
return finalHeight
}

const RENDER_POKEMON = ({ name, weight, sprites, types, height }) => {

    return container.innerHTML = `
  <div class="card">
  <h2>${name.toUpperCase()}</h2>
  <img src="${sprites.other.dream_world.front_default || sprites.front_default}" alt="">
  <div class="ClassContainer">
  <p>Tipos:</p>
  ${POKE_TYPES_WRAPER(types).join(', ')}
   </div>
   <p>Altura = ${FOOT_TO_METERS(height)} mts</p>
  <p>Peso = ${weight} kg</p>
  </div>`

}

export default RENDER_POKEMON 