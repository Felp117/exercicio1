function mudarTexto() {
    document.getElementById("texto").innerHTML = "Texto alterado!";
}

function validarForm () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(!name || !email) {
        alert('Preencha todos os campos');
        return false;
    }
    return false;
}




function addTarefa() {
    const input = document.getElementById("input");
    const list = document.getElementById("list");
    const text = input.value.trim();

    if(text !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${text} <span class="remove-btn" onclick="removerTarefa(this)">X</span>`;
        list.appendChild(listItem);
        input.value= "";
    } else {
        alert("Digite a tarefa!");
    }
}

function removerTarefa(TarefaElemento) {
    TarefaElemento.parentElement.remove();
}