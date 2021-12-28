// JavaScript - Array e loop For

    // Arrays (listas)
        // .push (adiciona um item no final da lista)
        // .length (mostra o total de itens da lista)
        // .sort (coloca em ordem alfabética ou de números)
        // .unshift (adiciona um item no início da lista)
        // .pop (remove o último item da lista)
        // .shift (remove o primeiro item da lista)
        // indexOf (procura o índice de um item no Array)

        let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

        // console.log(tasksList.length); // retorna o total de itens da lista - 3.

        let searchForFirstTask = tasksList[0];
        // console.log(searchForFirstTask); // retorna o item da posição 0 - Tomar café

        let searchForLastTask = tasksList[tasksList.length - 1];
        // console.log(searchForLastTask); // retorna o último item da lista - Brincar com o cachorro

        tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa à lista
        // console.log(tasksList);

        tasksList.pop();  // remove a última tarefa da lista
        // console.log(tasksList);

        let indexOfTask = tasksList.indexOf('Reunião');
        // console.log(indexOfTask); // retorna o indice onde reunião está

            // Exercicios
            // Obtenha o valor "Serviços" do array menu :
                let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
                let menuServices = menu[1]; //retorna 'serviços'

                // console.log(menuServices);

            // Procure o índice do valor "Portfólio" do array menu :
                // let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
                let indexOfPortfolio = menu.indexOf('Portfólio');
                
                // console.log(indexOfPortfolio);
            
            // Adicione o valor "Contato" no final do array menu :
                menu.push('Contato')

                // console.log(menu);

    // For
        // a primeira coisa dentro do parêntese vai ser a declaração de uma variável que terá o objetivo de contar as repetições
        // na mesma linha define até quando queremos que o código se repita
        // por último definimos como a variável vai ser atualizada a cada repetição
        // na estrutura do for {precisamos definir qual é o código que queremos repetir dentro das chaves}
        // em resumo: declara a variavel, se a condição for verdadeira, executa o bloco do código e incrementa...fim do código.

        let cars = ['Saab', 'Volvo', 'BMW'];
        for (let index = 0; index < cars.length; index += 1) {
            // console.log(cars[index]);
          }

            // Exercício
            // Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
                
                let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

                for (let i = 0; i < groceryList.length; i +=1) {
                    // console.log(groceryList[i]);
                }
    
    // For/of
        // permite criar loops em objetos iteráveis como strings, arrays, entre outros
        // Objetos iteráveis são objetos ou uma estrutura de dados que permite acessar o seu conteúdo com um for.

        let numeros = [1,2,3,4,5];
        for(let numero of numeros) { // permite iterar os valores das propriedades, nos retornando os números dentro do array numeros
        // console.log(numero); // retorna 1 2 3 4 5
        }

        let word = 'Hello';
        for (let letter of word) {
        // console.log(letter); // retorna H e l l o

        }

        let arrOfNumbers = [10, 20, 30];
        for (let sum of arrOfNumbers) { 
        sum += 1; // soma um valor a cada elemento do array
        // console.log(sum);// retorna: 11 21 31 
        }

        // console.log(arrOfNumbers); // Resultado: [10, 20, 30] - trazer apenas os valores que estão dentro do array

            // Exercício
            // Utilize o for/of para imprimir os elementos da lista names com o console.log() :
                
                let names = ['João', 'Maria', 'Antônio', 'Margarida'];
                for (let nome of names) {
                   // console.log (nome);
                }
// Prática
    // Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
        let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    // Percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

        for (let i = 0; i < numbers.length; i += 1) {
            // console.log (numbers[i]);
        }

    // Some todos os valores contidos no array e imprima o resultado;

        for (let soma of numbers) {
          soma += 1;
          // console.log (soma);
        }

    // Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
        // A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
        let soma = 0;
        for (let i in numbers) {
            soma += numbers[i];
        }
       // console.log (soma / numbers.length);

    // Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
        let valorFinal = soma/numbers.length;
        if (valorFinal > 20) {
           // console.log ("valor maior que 20");
        } else {
           // console.log ("valor menor que 20");
        }
        

    // Utilizando for , descubra qual o maior valor contido no array e imprima-o;

        var maiorValor = 0;

        for (let i =0; i < numbers.length; i += 1) {
            if (numbers[i] > maiorValor) {
                maiorValor = numbers[i]
            }
        }
        // console.log (maiorValor);
    
    // Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

        var numeroImpar = 0;
        for (let i =0; i < numbers.length; i += 1) {
            if (numbers[i] % 2 !== 0) {
                numeroImpar ++;   
            }   
        }
       // console.log (numeroImpar);

    // Utilizando for , descubra qual o menor valor contido no array e imprima-o;

    var menorValor = numbers[0];

    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] < menorValor) {
            menorValor = numbers[i]
        }
    }
    // console.log (menorValor);

    // Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

        let array = [];
        for (let i = 1; i <= 25; i += 1) {
            array.push (i)
            //console.log (i); 
        }
        // console.log (array);

    // Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

    var numero = 2;
    for (let i = 1; i <= 25; i += 1) {
       // console.log (i/numero);
    }

    // Bônus

    /*         for (let index = 1; index < array.length; index += 1) {
                for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
                if (array[index] < array[secondIndex]) {
                    let position = array[index];
                    array[index] = array[secondIndex];
                    array[secondIndex] = position;
                }
                }
            } */

    // Ordene o array numbers em ordem crescente e imprima seus valores;

        numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
        lista = numbers.sort((a, b) => a - b);
        // console.log (lista);

    // Ordene o array numbers em ordem decrescente e imprima seus valores;

        numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
        lista = numbers.sort((a, b) => b - a);
        // console.log (lista);

    // Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
    // [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

        numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
        let numbersMult = [];
        for (let i = 0; i < numbers.length; i += 1){ 
            if (numbers [i + 1]) {
                numbersMult.push(numbers[i] * numbers [i + 1]);
            } else {
                numbersMult.push(numbers[i] * 2);
            }
        }
        console.log (numbersMult);