function piadas() {
    var url = 'https://api.chucknorris.io/jokes/random';
    var chuck = document.querySelector("#");

    fetch(`${url}/json/`)
        .then((response) => response.json())
        .then((repasse) => {
            
        })
}