function buscarCep() {
    //https://viacep.com.br/ws/01001000/json/
    var url = 'https://viacep.com.br/ws/';
    
    var cep = document.querySelector("#inputCep");
    if(inputCep.value != '' ) {
        fetch(`${url}${inputCep.value}/json/`)
        .then((response) => response.json())
        .then((dados) => {
            document.querySelector("#cep").innerHTML = 'CEP: ' + dados.cep;
            document.querySelector("#logradouro").innerHTML = 'Logradouro: ' + dados.logradouro;
            document.querySelector("#bairro").innerHTML = 'Bairro: ' + dados.bairro;
            document.querySelector("#localidade").innerHTML = 'Localidade: ' + dados.localidade;
            document.querySelector("#uf").innerHTML = 'UF: ' + dados.uf;
            document.querySelector("#estado").innerHTML = 'Estado: ' + dados.estado;
            document.querySelector("#ddd").innerHTML = 'DDD: ' + dados.ddd;
            document.querySelector("#regiao").innerHTML = 'Região: ' + dados.regiao;
            document.querySelector("#ibge").innerHTML = 'IBGE: ' + dados.ibge;
            document.querySelector("#siafi").innerHTML = 'SIAFI: ' + dados.siafi;
            document.querySelector("#numero").innerHTML = 'Número: ' + dados.numero;
            document.querySelector("#complemento").innerHTML = 'Complemento: ' + dados.complemento;
        })
        .catch((error) => alert(`Houve um erro na requisição!: ${error}`));
    } else {
        alert('Digite um CEP');
    }
}