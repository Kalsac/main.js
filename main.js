let nome = "pedro"; //Variável que pode mudar
const idade = 25; // Variável constante
var cidade = "São Paulo" // Método antigo de declarar variáveis

let a = 10;
let b = 5;

let soma = a+b;
let subtracao = a-b;
let multuplicacao = a*b;
let divisao = a/b;
let resto = a%b;
let potencia = a**b;
let incremento = ++a;
let decremento = --b;

let igual = (a==b);
let diferente = (a!=b);
let maior = (a>b);
let menor = (a<b);
let maiorOuIgual = (a>=b);
let menorOuIgual = (a<=b);

let eLogico = (a > 5 &&b <10);
let ouLogico = (a>5 ||b>10);
let naoLogico = !(a>5);

let c = 10;
c +=5;//c=c+5
c-=3;//c=c-3
c*=2;//c=c*2
c/=4;//c=c/4
c%=3;//c=c%3
c**=2;//c=c**2

let mensagem= "Olá, meu nome é" +nome+",tenho"+idade+"anos e moro em" +cidade+".";

console.log("Soma:"+ soma);
console.log("Subtração:" + subtracao);
console.log("Multiplicação:" + multuplicacao);
console.log("Divisão:"+ divisao);
console.log("Resto da divisão:"+ resto);
console.log("Potência:"+ potencia);
console.log("Incremento de a:"+ incremento);
console.log("Decremento de b:" + decremento);
console.log("Igualdade:"+igual);
console.log("Diferença:"+diferente);
console.log("Maior que:"+maior);
console.log("Menor que:"+menor);
console.log("Maior ou igual:"+maiorOuIgual);
console.log("Menor ou igual:"+menorOuIgual);
console.log("E lógico:"+eLogico);
console.log("Ou lógico:"+ouLogico);
console.log("Negação lógica:"+naoLogico);
console.log("Valor de c após atribuições:"+c);
console.log(mensagem);