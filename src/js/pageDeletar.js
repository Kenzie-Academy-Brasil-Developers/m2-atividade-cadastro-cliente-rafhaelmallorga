import { Api } from "./Api.js";

const opcoesClientes = document.getElementById('buscarCliente')
const botaoDeletar = document.getElementById('botaoDeletar')

const clientes = await Api.listarClientes()

clientes.forEach(element => {
    
    const opcao = document.createElement('option')
    opcao.value = element.id

    opcao.innerText = element.nome

    opcoesClientes.appendChild(opcao)
});

botaoDeletar.addEventListener('click', ( event ) => {
    event.preventDefault()
    
    Api.deletarCliente(opcoesClientes.value)
})