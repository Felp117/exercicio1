function piadas() {
    var url = 'https://api.chucknorris.io/jokes/random';
    
    fetch(`${url}`)
        .then((response) => response.json())
        .then((repasse) => {
            document.querySelector("#value").innerHTML = 'Piada: ' + repasse.value;
        })
        .catch((error) => alert(`Houve um erro na requisição!: ${error}`));
    }   