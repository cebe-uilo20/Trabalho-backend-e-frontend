
const api = "http://localhost:3000/avisos";
console.log("JS front carregou");


async function carregarAvisos() {
    try {
        const resposta = await fetch(api);
        const avisos = await resposta.json();
        
        const lista = document.getElementById("listaAvisos");
        lista.innerHTML = "";

        avisos.forEach(aviso => {
            const li = document.createElement("li");
            li.textContent = aviso.texto;
            lista.appendChild(li);
        });
    } catch (erro) {
        console.error("Erro ao carregar avisos:", erro);
    }
}

async function criarAviso() {
    const input = document.getElementById("avisoInput");
    console.log("Botão funcionou");

    if (input.value.trim() === "") {
        alert("Digite um aviso!");
        return;
    }


try {
    await fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            texto: input.value
        })
    });

    input.value ="";
    carregarAvisos();

} catch (erro) {
    console.error("Erro ao criar aviso:", erro);
    }
}
carregarAvisos();