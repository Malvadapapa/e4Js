const FETCH_POKEMON = async (selectedpokemon) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    try {
        const response = await fetch(url + selectedpokemon)
        const data = await response.json()
        return data
    } catch (error) {
        errContainer.innerHTML = `El pokemon ${selectedpokemon} no existe en nuestra base de datos`

        return
    }

}

export default FETCH_POKEMON