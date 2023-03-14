fetch("https://pokeapi.co/api/v2/pokemon")
.then(function (response) {
    if (response.status !== 200) {
        throw new Error("tjaaaaa")
    }
    return response.json()
})
.then(function (data){
    data.results.forEach(Pokemon => {
        
        let link = document.createElement("a")
        let container = document.createElement("div")
        let image = document.createElement("img")
        let h2 = document.createElement("h2")
        
        link.href = `details.html?name=${Pokemon.name}`
        
        h2.innerHTML = Pokemon.name
        
        
        fetch(Pokemon.url)
        .then((response) => response.json())
        .then((pokemonDetails) => 
            image.src = pokemonDetails.sprites.front_default 
            
            )
            
            
            container.append(image)
        container.append(h2)
        link.append(container)
        document.querySelector(".main").append(link)

        

});
})