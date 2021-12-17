// PARTE 1 - VARIÁVEIS

// 1 - Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).

    const myName = "Angélica";

// 2 - Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.

    const birthCity = "Cabo de Santo Agostinho";

// 3 - Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.

    let birthYear = 1991;

// 4 - Utilize o console.log() para imprimir as constantes e variáveis que você criou.

    /* console.log (myName);
    console.log (birthCity);
    console.log (birthYear); */

// 5 - Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!

    birthYear = 2030;
    // console.log (birthYear);

// 6 - Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? */

    // birthCity = "Recife";
    // console.log (birthCity); 


//...............................................................................................................................//


// PARTE 2 -  TIPOS PRIMITIVOS, TIPAGEM DINÃMICA E OPERAÇÕES ARITIMÉTICAS

// Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . 
// Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .

    let patientId = 50;
    let isEnrolled = true;
    const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
    };
    const patientEmail = 'ana@email.com';

    /* console.log(typeof patientId);
    console.log(typeof isEnrolled)
    console.log(typeof patientInfo);
    console.log(typeof patientEmail);
    console.log(typeof patientAge); // não existe! Não foi declarada uma variável patientAge
     */
// Experimente também trocar o valor de patientId = 50 para patientId = '50' . Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.

    patientId = '50'
    // console.log(typeof patientId);

// Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

// Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.

    const base = 5;
    let heigth = 8;

// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!

    const area = base * heigth;
    // console.log (area);

// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

    const perimeter = area + area;
    // console.log (perimeter);


//...............................................................................................................................//


// PARTE 3 - CONDIÇÕES IF E ELSE

// Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. Então vamos praticar o que aprendemos no vídeo?

// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

    const nota = 10

// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
    // Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
    // Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
    // Se a nota for menor que 60, imprima "Você foi reprovada(o)"

    if (nota >= 80) {
        // console.log ("Parabéns, você foi aprovada(o)!");
    }
    else if (nota < 60) {
       // console.log ("Você foi reprovada(o)");
    }
    else if (nota < 80) {
       // console.log ("Você está na nossa lista de espera");
    }

// Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

// Altere o valor da nota para verificar se as condições que você implementou funcionam;


//...............................................................................................................................//


// PARTE 4 - OPERADORES LÓGICOS

// A principal funcionalidade desses operadores é determinar a lógica entre dois valores ou variáveis.


// AND = &&: - Operador binário - precisa de dois elementos para funcionar corretamente. Ele só vai retornar true se as duas operações que estão em volta dele forem consideradas verdadeiras.

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  //console.log('Muito obrigado pela refeição :)');
} else {
  //console.log('Acho que houve um engano com meu pedido');
}

//.........................................................//

const conditionOne = true;
  const conditionTwo = false;

  // console.log(conditionOne && conditionTwo); // retorna false pois uma das condições é falsa.

//.........................................................//

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao; // A ordem que a operação vai obedecer, será da esquerda para a direita; cenouras e leite =true; true e arroz = true; true e feijão = true.

// Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

const currentHour = 20;

// Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
    // Implemente condicionais para que:
        // Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
        // Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
        // Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
        // Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
        // Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
    
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
    
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
    
}
else if (11 > currentHour < 14) {
    message = "Hora do almoço!!!";
   
}
else if (4 > currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
    
}
// Agora imprima a variável message fora das suas condições.

    //console.log (message);


// OR  = ||: precisamos apenas que uma das condições sejam verdadeiras: isso ou aquilo. Precisamos de dois elementos em torno dele para que funcione corretamente.

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  //console.log("Obrigado por me atender :D")
} else {
  //console.log("Ei, eu não pedi isso!");
}

/* console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false */

// Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

let weekDay = "quarta-feira";

    // Implemente condicionais para que:
        // Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
        // Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
   // console.log ("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
   // console.log ("FINALMENTE, descanso merecido UwU");

}

// Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

    // a variável foi trocada por sábado e retornou o else.

// NOT = !: Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false .


    // console.log((2 + 2) === 4); // retorna true. Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira.

    // console.log(!(2 + 2) === 4); // o valor impresso é o oposto do anterior

    // Strings...
const squirtle = "melhor pokemon inicial";

    // console.log(!squirtle); // false

    // Números...

        // console.log(!42); // false 

        // console.log(!0); // true. O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

    // Valores nulos...
        
        // console.log(!null); // true. O null tem o valor "falsy" no javascript. Logo, seu oposto é true.

    // Valores indefinidos..

        // console.log(!undefined); // true. O underfined tem o valor "falsy" no javascript. Logo, seu oposto é true.


//...............................................................................................................................//


// PARTE 5 - SWITCH E CASE
    // outra forma de criarmos estruturas 
    // A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default .

// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;

let status;

// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

 switch (status) {
    case "aprovada":
       // console.log ('Parabens, você foi APROVADA!');
        break;

    case "lista":
       // console.log ('Aguarde, você está na lista de espera.');
        break;

    case "reprovada":
       // console.log ('Infelizmente vocẽ não passou no processo seletivo :(');
        break;

    default:
      // console.log ('não se aplica');

 }


 //...............................................................................................................................//


 // PRÁTICA

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. 

    const a = 30;

    const b = 20;

    // Faça programas para:

    // Adição (a + b)

        // console.log (a + b);

    // Subtração (a - b)

        // console.log (a - b);

    // Multiplicação (a * b)

        //  console.log(a * b);

    // Divisão (a / b)

         //  console.log(a / b);

    // Módulo (a % b)

        //  console.log (a % b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

    const x = 30;
    const y = 70;

    if(x > y) {
       // console.log(x);
    }
    else {
       // console.log(y);
    }

    // ou


        // console.log (Math.max(x, y));


// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

    const c = 20;
    const d = 40;
    const e = 60;

    if (c > d && c > e){
       // console.log (c);
    }
    else if (d > c && d > e){
      //  console.log (d);
    }
    else if (e > c && e > d){
      //  console.log (e);
    }

    // ou
    
        // console.log (Math.max(c, d, e));


// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = 0;

if ( valor > 0) {
   // console.log("positive");
}
else if (valor < 0) {
   // console.log("negative");
}
else {
   // console.log("zero");
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
    // Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
    // Um ângulo será considerado inválido se não tiver um valor positivo.

const anguloA = 80;
const anguloB = 50;
const anguloC = 50;
let somaAngulos = anguloA + anguloB + anguloC;

if (somaAngulos === 180) {
   // console.log (true);
}
else if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
   // console.log("ERRO!");
}
else if (0 < somaAngulos < 180) {
   // console.log (false);
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = "BISPO";
pecaXadrez = pecaXadrez.toLowerCase()


switch (pecaXadrez) {
    case "peao":
       // console.log ("Ele ataca (ou captura) uma casa na diagonal, para a esquerda ou direita.");
        break;
    case "bispo":
       // console.log ("Pode se mover na diagonal quantas casas quiser, desde que não seja bloqueado por suas próprias peças ou por uma peça inimiga.");
        break;
    case "cavalo":
       // console.log ("se move em L.");
        break;
    case "torre":
       // console.log ("se move como um sinal de +.");
        break;
    case "dama":
       // console.log ("se move como uma torre e um bispo juntos.");
        break;
    case "rei":
       // console.log ("pode se mover (ou capturar) uma casa em qualquer direção.");
        break;
    default:
       // console.log("ERRO!")
    }

    // Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
       // Porcentagem >= 90 -> A
       // Porcentagem >= 80 -> B
       // Porcentagem >= 70 -> C
       // Porcentagem >= 60 -> D
       // Porcentagem >= 50 -> E
       // Porcentagem < 50 -> F
    // O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

    let notaPercentual = 101;
    
    if (notaPercentual < 0 || notaPercentual > 100) {
       // console.log("ERRO!");
    }
    else if (notaPercentual >= 90) {
       // console.log ("A");
    }
    else if (notaPercentual >= 80) {
       // console.log ("B");
    }
    else if (notaPercentual >= 70) {
       // console.log ("C");
    }
    else if (notaPercentual >= 60) {
       // console.log ("D");
    }
    else if (notaPercentual >= 50) {
       // console.log ("E");
    }
    else if (notaPercentual < 50) {
       // console.log ("F")
    }
    
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
    // Bonus: use somente um if .
const numero1 = 15;
const numero2 = 25;
const numero3 = 25;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
   // console.log (true);
} else {
   // console.log (false);
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
    // Bonus: use somente um if .

const numero01 = 15;
const numero02 = 25;
const numero03 = 25;

if (numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0) {
  // console.log (true);
} else {
  // console.log (false);
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
  // Atente que, sobre o custo do produto, incide um imposto de 20%.
  // Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
  // O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    // valorCustoTotal = valorCusto + impostoSobreOCusto
    // lucro = valorVenda - valorCustoTotal (lucro de um produto)

    const custo = 10;
    const valorVenda = 50;
    const custoTotal = custo + (custo * (20/100));
    const lucro = valorVenda - custoTotal;
   // console.log (custoTotal, lucro);
    
if (custo < 0 || valorVenda < 0) {
   // console.log ("ERRO! - Informe um valor acima de 0.")
} else {
   // console.log (`Lucro de: R$ ${(lucro * 1000)}`)
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 1100;
let calculoInss = 0;

if (salarioBruto <= 1556.94) {
  calculoInss = salarioBruto * (8/100);
  // console.log (calculoInss);
} else if (salarioBruto > 1556.94 && salarioBruto < 2594.93) {
  calculoInss = salarioBruto * (9/100);
  // console.log (calculoInss);
} else if (salarioBruto > 2594.92 && salarioBruto < 5189.83) {
  calculoInss = salarioBruto * (11/100);
  // console.log (calculoInss);
} else if (salarioBruto > 5189.82) {
  calculoInss = 570.88;
  // console.log (calculoInss);
}
salarioBase = salarioBruto - calculoInss;
// console.log(salarioBase);

let calculoIR = 0;

if (salarioBase > 1903.98 && salarioBase < 2826.66) {
  calculoIR = salarioBase * (7.5/100) - 142.80;
  // console.log (calculoIR);
} else if (salarioBase > 2826.65 && salarioBase < 3751.06) {
  calculoIR = salarioBase * (15/100) - 354.80;
  // console.log (calculoIR);
} else if (salarioBase > 3751.05 && salarioBase < 4664.69) {
  calculoIR = salarioBase * (22.5 / 100) - 636.13;
  // console.log(calculoIR);
} else if (salarioBase > 4664.68) {
  calculoIR = salarioBase * (27.5 / 100) - 869.36;
  // console.log(calculoIR);
}else {
  // console.log("isento de imposto de renda.");
}
let salarioLiquido = salarioBase - calculoIR;
    // console.log(`Salário líquido: R$ ${salarioLiquido}`);

