// PARTE 1 - VARIÁVEIS

// 1 - Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).

    /* const myName = "Angélica"; */

// 2 - Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.

    /* const birthCity = "Cabo de Santo Agostinho"; */

// 3 - Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.

    /* let birthYear = 1991; */

// 4 - Utilize o console.log() para imprimir as constantes e variáveis que você criou.

    /* console.log (myName);
    console.log (birthCity);
    console.log (birthYear); */

// 5 - Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!

    /* birthYear = 2030;
    console.log (birthYear); */

// 6 - Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? */

    /* birthCity = "Recife";
    console.log (birthCity); */    

//...............................................................................................................................//

// PARTE 2 -  TIPOS PRIMITIVOS, TIPAGEM DINÃMICA E OPERAÇÕES ARITIMÉTICAS

// Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . 
// Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .

/*     let patientId = 50;
    let isEnrolled = true;
    const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
    };
    const patientEmail = 'ana@email.com';

    console.log(typeof patientId);
    console.log(typeof isEnrolled)
    console.log(typeof patientInfo);
    console.log(typeof patientEmail);
    console.log(typeof patientAge); // não existe! Não foi declarada uma variável patientAge
 */
// Experimente também trocar o valor de patientId = 50 para patientId = '50' . Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.

/*     patientId = '50'
    console.log(typeof patientId); */

// Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

// Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.

/*     const base = 5;
    let heigth = 8; */

// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!

/*     const area = base * heigth;
    console.log (area);
 */
// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

/*     const perimeter = area + area;
    console.log (perimeter); */

//...............................................................................................................................//

// PARTE 3 - CONDIÇÕES IF E ELSE

// Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. Então vamos praticar o que aprendemos no vídeo?

// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

    // const nota = 10

// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
    // Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
    // Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
    // Se a nota for menor que 60, imprima "Você foi reprovada(o)"

/*     if (nota >= 80) {
    console.log ("Parabéns, você foi aprovada(o)!");
    }
    else if (nota < 60) {
        console.log ("Você foi reprovada(o)");
    }
    else if (nota < 80) {
        console.log ("Você está na nossa lista de espera");
    } */

// Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

// Altere o valor da nota para verificar se as condições que você implementou funcionam;

//...............................................................................................................................//

// PARTE 4 - OPERADORES LÓGICOS

