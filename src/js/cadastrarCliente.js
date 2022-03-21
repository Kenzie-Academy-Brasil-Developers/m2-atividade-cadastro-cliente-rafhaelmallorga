import { Api } from "./Api.js";

const botaoCadastrar = document.getElementById('botaoCadastrar')

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

botaoCadastrar.addEventListener('click', ( event ) => {
    event.preventDefault()

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

    Api.cadastrarCliente(data)
})