//1. Criar array de objetos
let listaClientes = [
    {nome: "Ana", endereco: "Rua A", cpf: "11111111111"},
    {nome: "Carlos", endereco: "Rua B", cpf: "22222222222"},
    {nome: "Marina", endereco: "Rua C", cpf: "33333333333"}
];

document.write("<h3>Lista inicial</h3>");

//2. Mostrar clientes usando forEach
listaClientes.forEach(function(cliente){
    document.write("Nome: " + cliente.nome +
                   " | Endereço: " + cliente.endereco +
                   " | CPF: " + cliente.cpf +
                   "<br>");
});

//3. Adicionar cliente no FINAL
listaClientes.push({
    nome: "Pedro",
    endereco: "Rua D",
    cpf: "44444444444"
});

document.write("<h3>Após adicionar no final</h3>");

listaClientes.forEach(function(cliente){
    document.write("Nome: " + cliente.nome +
                   " | Endereço: " + cliente.endereco +
                   " | CPF: " + cliente.cpf +
                   "<br>");
});

//4. Adicionar cliente no INÍCIO
listaClientes.unshift({
    nome: "Julia",
    endereco: "Rua E",
    cpf: "55555555555"
});

document.write("<h3>Após adicionar no início</h3>");

listaClientes.forEach(function(cliente){
    document.write("Nome: " + cliente.nome +
                   " | Endereço: " + cliente.endereco +
                   " | CPF: " + cliente.cpf +
                   "<br>");
});

//5. Mostrar quantidade de clientes
document.write("<h3>Total de clientes: " + listaClientes.length + "</h3>");