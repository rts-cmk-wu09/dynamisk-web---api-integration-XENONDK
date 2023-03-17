let params = new URLSearchParams(document.location.search)
let identifier = params.get("name")

document.querySelector("title").innerHTML = identifier


let pokeDetail = document.querySelector("#details")
console.log(pokeDetail)

fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`)
.then((Response) => Response.json())
 .then((pokemonStats) =>  

//  console.log(pokemonStats)

 pokeDetail.innerHTML = `   
    <h1>${pokemonStats.name}</h1>
    <p class="exp"> Base experience: ${pokemonStats.base_experience}</p>
    <p class="ability"> Ability: ${pokemonStats.abilities[0].ability.name} </p>
    <p class="rank"> national dex ranking: ${pokemonStats.id} </p>   
    <p class="height"> Height: ${pokemonStats.height} </p>
    <p class="weight"> weight: ${pokemonStats.weight} </p>
    <img src="${pokemonStats.sprites.front_default}">
    

`
 )

 