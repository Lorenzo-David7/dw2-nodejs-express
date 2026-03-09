let listaClientes = [
    {
        nome:"Roberto",
        endereco:"Rua Alfredo",
        cpf:11122233344,
    },
    {
        nome:"Rodolfo",
        endereco:"Marques",
        cpf:55566677788,
    },
    {
        nome:"Robson",
        endereco:"Rua Aguiar",
        cpf:88899900011,
    },
]

listaClientes.forEach((clientes)=>{
    document.write(`<p>${clientes}</p>`);
});