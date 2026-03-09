//Questão 1
function showMessage(){
    const message = "<h2>1- <br> Lorenzo David <br> 19 <br> Registro</h2>";
    document.write(message);
}

showMessage();


//Questão 2

const n1 = 10;
const n2 = 2;
function sum(n1,n2){

    let result = n1 / n2;
    document.write(`<h2> 2- <br> A divisão de ${n1} com ${n2} é igual ${result} </h2>`);

}

sum(n1,n2);

//Questão 3

const num1 = 10;
const num2 = 2;
const num3= 5;

function multi(num1, num2, num3){
    return num1 * num2 * num3;
}

document.write(`<h2> 3- <br> O resultado é ${multi(num1,num2,num3)}</h2>`);

//Questão 4

document.write("Função com mais de um retorno <br>4 – Crie uma função que receba uma idade como parâmetro.<br> Se a idade for >= 18, a função deve retornar o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console.");

function maioridade(x){
  return (x>=18)? "Maior de idade" : "Menor de idade";
}
const idade1=17, idade2=20;
document.write(`<p>Se a idade da pessoa for ${idade1} anos entao ela sera ${maioridade(idade1)}. <br>E se a idade da pessoa for ${idade2} anos entao ela sera ${maioridade(idade2)}.</p><br><hr>`);

//Questão 5 
document.write("Função anônima<br>5 – Crie uma função anônima que receba duas notas como parâmetro. <br>Se a média dessas notas for <=5, a função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”.<br>O resultado deve ser exibido no console.<br>Considere média = (nota1 + nota2) / 2.");

const aprovacao = function (x, y){
  return ((x+y)/2 <= 5) ? "Reprovado" : "Aprovado";
};
const nota1=10, nota2=2, nota3=7, nota4=3;
document.write(`<p>O aluno que apresenta as nota ${nota1} e a nota ${nota2} esta ${aprovacao(nota1,nota2)}.<br>E o aluno que apresenta as nota ${nota3} e a nota ${nota4} esta ${aprovacao(nota3,nota4)}. </p><br><hr>`);
//Questão 6
document.write("Arrow function com parâmetro único <br>6 – Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O triplo do número é...”)");

const triplo = (x)=>{return x*3;};
let valor=10;
document.write(`<p>O resultado do triplo de ${valor} é ${triplo(valor)}.</p><br><hr>`);
//Questão 7
document.write("Arrow function com mais de um parâmetro<br>7 – Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses números. <br>O resultado deve ser impresso no console.")
const somar = (x,y,z,r) =>{return x+y+z+r;}
let number1=1,number2=2,number3=3,number4=4;
document.write(`<p>${number1}+${number2}+${number3}+${number4}=${somar(n1,n2,n3,n4)}</p>`);

