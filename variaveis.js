//Introdução
//hellooooooooooooooooooooooooooooooooooo
//tudo que é dinamico precisa de linguagens de códio... linguagens de programação são mais "complicadas de compreender"
//A linguagem de programação executa um comando.
//toda a linguagem de programação precisa de um servidor. Node é um servidor.
//principio da programação = Variavel. A linguagem de programação executa uma tarefa. Para executar qualquer tarefa é preciso guardar essa tarefa.
//A variavel cria um espaço.

var numero1 = 2;
var numero2 = 8;

//Nome da variável
// número1 ou número2 RECEBE ou ATRIBUI um Numero. Nome de váriavel é sempre iniciada com letra minuscula. Não se usa espaço ou ífem. ex: meuNome (Camel Case).
//Letra maiúscula no começo cria uma "Classe"
// número = um rótulo da variável, ou seja, o nome da variável. = é atribuição.

//Praticamente todas as linguagens possuem variáveis. Única coisa que muda é o nome dos comandos.

var resultado = numero1 * numero2;

// Math.pow (3,2) 3 = base. 2 = expoente. Ou 3^2

var resultado2 = Math.pow(numero1,numero2);

console.log ('Daniel', 'você tem', resultado2, 'anos de idade', 'você está velho')

//variaveis de dois nomes iguais:
// 3 formas de formar uma variável no Javascrips. "var" "let" "const". Em 2015 foi criado o let e o const e o var foi deixado de ser usado....


var exemploNomeIgual = 8
var exemploNomeIgual = 10

console.log (exemploNomeIgual)

// Ele acaba por mostrar a segunda variável, como se a variável declarou a mesma variável 2 vezes.

var exemploNomeIgual1 = 30
var exemploNomeIgual2 = 20

console.log (exemploNomeIgual1,exemploNomeIgual2)

//Vamos usar o let

let exemploNomeIguaLlet = 12
exemploNomeIgualLet = 8

console.log (exemploNomeIgualLet)

//O let permite que o valor da variável seja modificado... Enquanto o const faz o contrário

const variavelConst = 10
variavelConst = 20

// Ele acaba por dar erro. Ele não deixa que o valor seja reatribuido

