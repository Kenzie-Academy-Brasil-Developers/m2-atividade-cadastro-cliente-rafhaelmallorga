import { Api } from "./Api.js";

const opcoesClientes = document.getElementById('buscarCliente')
const botaoBuscarCliente = document.getElementById('botaoBuscar')
const botaoEditar = document.getElementById('editar')


const nomeInput = document.getElementsByName('nome')[0]
const nascimentoInput = document.getElementsByName('data_nasc')[0]
const sexoInput = document.getElementsByName('sexo')[0]
const emailInput = document.getElementsByName('email')[0]

const cepInput = document.getElementsByName('cep')[0]
const ruaInput = document.getElementsByName('rua')[0]
const numeroInput = document.getElementsByName('numero')[0]
const bairroInput = document.getElementsByName('bairro')[0]
const cidadeInput = document.getElementsByName('cidade')[0]
const estadoInput = document.getElementsByName('estado')[0]

const telefone_fixoInput = document.getElementsByName('telefone_fixo')[0]


const clientes = await Api.listarClientes()

clientes.forEach(element => {
    
    const opcao = document.createElement('option')
    opcao.value = element.id

    opcao.innerText = element.nome

    opcoesClientes.appendChild(opcao)
});

botaoBuscarCliente.addEventListener('click', ( event ) => {
    event.preventDefault()

    if ( opcoesClientes.value === 'none' ) {
        nomeInput.value = ''
        nascimentoInput.value = ''
        sexoInput.value = ''
        emailInput.value = ''

        cepInput.value = ''
        ruaInput.value = ''
        numeroInput.value = ''
        bairroInput.value = ''
        cidadeInput.value = ''
        estadoInput.value = ''

        telefone_fixoInput.value = ''

    } else {

        const cliente = clientes.filter( element => element.id == opcoesClientes.value )
    
        console.log(cliente)

        const { nome, data_nasc, sexo, email, endereco, telefone_fixo } = cliente[0]
        const { cep, rua,  numero, bairro, cidade, estado } = endereco

        nomeInput.value = nome
        nascimentoInput.value = data_nasc.split('/').reverse().join('-')
        sexoInput.value = sexo
        emailInput.value = email

        cepInput.value = cep
        ruaInput.value = rua
        numeroInput.value = numero
        bairroInput.value = bairro
        cidadeInput.value = cidade
        estadoInput.value = estado

        telefone_fixoInput.value = telefone_fixo

    }


    

})

botaoEditar.addEventListener('click', ( event ) => {
    event.preventDefault()

    const cliente = clientes.filter( element => element.email == emailInput.value )

    const data = {
        nome: nomeInput.value,
        data_nasc: nascimentoInput.value,
        sexo: sexoInput.value,
        email: emailInput.value,
        endereco: {
            cep: cepInput.value,
            rua: ruaInput.value,
            numero: numeroInput.value,
            bairro: bairroInput.value,
            cidade: cidadeInput.value,
            estado: estadoInput.value
        },
        telefone_fixo: telefone_fixoInput.value
    }

    Api.editarCliente( cliente[0].id, data)

    
})

