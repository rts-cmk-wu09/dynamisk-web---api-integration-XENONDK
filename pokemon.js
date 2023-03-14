let params = new URLSearchParams(document.location.search)
let identifier = params.get("name")

document.querySelector("title").innerHTML = identifier

fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`)