fetch("https://pokeapi.co/api/v2/pokemon")
.then(function (response) {
    if (response.status !== 200) {
        throw new Error("tjaaaaa")
    }
    return response.json()
})
.then(function (data){
    data.results.forEach(Pokemon => {
        let container = document.createElement("div")
        let link = document.createElement("a")
        container.innerHTML = Pokemon.name
        link.href = `details.html?name=${Pokemon.name}`
        link.innerHTML = "view more"
        container.append(link)
        document.querySelector(".main").append(container)
});
})