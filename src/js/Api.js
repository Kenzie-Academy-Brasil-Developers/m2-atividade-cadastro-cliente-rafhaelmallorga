class Api {

    static async listarClientes(){

        const response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
        const data     = await response.json()

        return data

    }

    static async cadastrarCliente(data){

        let response = await fetch ( "https://atividade-api-clientes.herokuapp.com/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ( data )
        })

        await location.reload();
    }

    static async editarCliente(id, data){
        let response = await fetch ( `https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( data )
        })
        await location.reload();
    }

    static async deletarCliente(id){

        let response = await fetch ( `https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "DELETE"
        })
        await location.reload();
    }

}

export {Api}