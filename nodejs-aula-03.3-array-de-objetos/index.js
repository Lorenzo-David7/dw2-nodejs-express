// O arquivo index.js é o arquivo principal do projeto

const express = require("express");

const app = express();

// configurando o ejs
app.set('view engine', 'ejs')

// rota principal
app.get("/", function(req, res) {
    res.render("index")
})

// rota perfil
app.get("/perfil", function(req, res) {
    res.render("perfil")
})

// rota clientes sem parâmetro
app.get("/clientes", function(req, res) {
  const clientes = ""
  const listaClientes = ['Maria', 'Eduarda', 'Joana','Gabi','Pamela'];

    res.render("clientes", {
      clientes : clientes,
      listaClientes : listaClientes
    })
})
// rota clientes com parâmetro
app.get("/clientes/:cli", function(req, res) {
  const clientes = req.params.cli
    res.render("detalhesClientes", {
      clientes:clientes
    })
})

// rota de serviços
app.get("/servicos", function (req,res){

  // array de objetos
  const servicos = [
    {servicos: "Desenvolvimento Web", descricao:"Criação de sites com Node.js e interação a banco de dados", preco:3500},
    {servicos: "Auditoria de UX/UI", descricao:"Avaliação da usabilidade de sistemas com sugestão de melhoria", preco:1800},
    {servicos: "Infraestrutura em Nuvem", descricao:"Configuração de servidores e hospedagem de aplicações", preco:2900},
    {servicos: "Chatbot com IA", descricao:"Desenvolvimento de chatbot para atendimento automático", preco:2750},
  ]
  res.render("servicos",{
    servicos : servicos
  });
});

// rota produto sem parâmetro

app.get("/produtos", function(req, res) {
  const mercadoria = "", produto = ""
  const listaProdutos = ['Computador','Celular', 'Tablet', 'Notebook'];
      
  res.render("produtos", {
    mercadoria : produto,
        listaMercadorias : listaProdutos
      })
})

// rota produtos com pârametro
app.get("/produtos/:prod", function(req, res) {
  const produto = req.params.prod
    res.render("detalhesProdutos",{
      mercadoria: produto
    });
});

app.get("/servicos", function(req, res) {
    res.render("servicos")
})

// iniciando servidor
const port = 8080
app.listen(port, function(error) {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!")
  } else {
    console.log(`Servidor iniciado com sucesso: http://localhost:${port}`)
  }
})