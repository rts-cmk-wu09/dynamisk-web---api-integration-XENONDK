let params = new URLSearchParams(document.location.search)
let identifier = params.get("name")

document.querySelector("title").innerHTML = identifier


let pokeDetail = document.querySelector("#details")
console.log(pokeDetail)

fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`)
.then((Response) => Response.json())
 .then((pokemonStats) =>  

 pokeDetail.innerHTML = `   
 <h1>${pokemonStats.name}</h1>
    <p> Base experience: ${pokemonStats.base_experience}</p>
     <p> ${pokemonStats.abilities[0].ability.name} </p>
`

 )