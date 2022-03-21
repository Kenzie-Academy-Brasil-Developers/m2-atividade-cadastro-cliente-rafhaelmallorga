import { Api } from "./Api.js";

const listaClientes = document.querySelector('.clienteInfo')
const clientes = await Api.listarClientes()

console.log(clientes)


clientes.forEach(element => {
    
    const itemLista = document.createElement('li')

    itemLista.innerHTML = `
    
        <p><strong>Nome</strong>: ${element.nome}</p>
        <p><strong>Idade</strong>: ${element.idade}</p>
        <p><strong>CPF</strong>: ${element.cpf}</p>
        <p><strong>Data de nascimento</strong>: ${element.data_nasc}</p>
        <p><strong>Sexo</strong>: ${element.sexo}</p>
        <p><strong>E-mail</strong>: ${element.email}</p>
        <p><strong>Telefone</strong>: ${element.telefone_fixo}</p>

        <h3>Endereço:</h3>
        <p><strong>CEP</strong>: ${element.endereco.cep}</p>
        <p><strong>Rua</strong>: ${element.endereco.rua}</p>
        <p><strong>Numero</strong>: ${element.endereco.numero}</p>
        <p><strong>Bairro</strong>: ${element.endereco.bairro}</p>
        <p><strong>Cidade</strong>: ${element.endereco.cidade}</p>
        <p><strong>Estado</strong>: ${element.endereco.estado}</p>

    `
    listaClientes.appendChild(itemLista)

});

