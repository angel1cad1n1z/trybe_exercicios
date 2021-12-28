// Lógica de Programação
    // Gabriel precisa ir ao supermercado trazer 1 leite e 6 ovos.
    /*         gabriel.abrirPorta (); // ele abre a porta de casa

            let enderecoSupermercado = procurarEndereçoSupermercado (); // encontra o endereço do supermercado
            gabriel.irParaOmercado (enderecoSupermercado); // uma vez que tem o endereço do supermercado ele vai até lá que está naquele endereço.

            if (milks.length >= 1) // se tiver 1 ou mais leites
            gabriel.getMilk (1); // ele pega 1 leite

            if (eggs.length >= 6) { // se tiver 6 ou mais ovos
                gabriel.getEgg (6); // ele pega os 6 ovos
            } */

// Algorítimos
    // uma série de comandos encadeados de forma lógica, que busca resolver algum problema.
        // Preparar um leite com achocolatado: uma opção seria...
        /**
         * 1. Pegar um copo
         * 2. Colocar o copo em cima da mesa
         * 3. Abrir a porta da geladeira
         * 4. Pegar o leite
         * 5. Fechar a porta da geladeira
         * 6. Colocar determinada quantidade de leite no copo
         * 7. Abrir o armário
         * 8. Pegar o achocolatado
         * 9. Fechar a porta do armário
         * 10. Colocar determinada quantidade de achocolatado no copo
         * 11. Pegar uma colher
         * 12. Mexer no copo com a colher */

         // Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

            // devemos utilizar o array fruits ;
            let fruits = [3, 4, 10, 1, 12];

            // " somando todos os valores " mostra que devemos ter uma variável que guarda o valor da soma dos valores;
            // Criar uma variável com valor 0;
            let soma = 0;

           // o termo " percorra " indica uma estrutura de repetição, ou loop;
           // Criar um loop que percorre o array;
            for (let i = 0; i < fruits.length; i += 1) {
                // Incrementar a variável com o valor correspondente a cada loop;
                soma += fruits[i]
            }

            // o termo " caso " indica uma estrutura condicional, ou if ;
            // Criar um if com a condição da váriavel ser maior que 15;
            if (soma > 15) {
                // Caso a varíavel obedeça a condição: Imprimir a varíavel;
               // console.log (soma);
            } else {
                // Caso não obedeça a condição: Imprimir a mensagem “valor menor que 16”;
               // console.log ("valor menor que 16")
            }
            // " imprima o valor final " indica um console.log ;

    // Complexidade de Código
        // Para medir a complexidade de um código, existe a complexidade ciclomática , que é uma métrica de software que considera os caminhos independentes que o algoritmo pode tomar. E, quanto maior for a complexidade ciclomática , mais difícil é fazer o acompanhamento do código, sua manutenção e testagem.

    // Exercícios

        //O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
        // O fatorial é representado pelo sinal !
        // 4! = 4 x 3 x 2 x 1 = 24
        // Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

            const num = 10;
            let fatorial = 1;
            for ( let i = num; i > 0; i --) {
            fatorial *= i
            }
            // console.log (fatorial);

        // Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

            let word = 'tryber';
            let invertida = '';
            // word.length - 1 porque o length mostra a quantidade total de caracteres mas como o indice inicia do 0 vai dar erro se não colocar o .length -1. Outra opção seria 
            for ( let i = word.length -1; i >= 0; i --) {
            invertida += word[i];
            }
            // console.log(invertida);

        // Considere o array de strings abaixo:
            let array = ['java', 'javascript', 'python', 'html', 'css'];
        
        // Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
            let maiorPalavra = '';
            for (let i = 0; i < array.length; i += 1) {
                if (array[i].length > maiorPalavra.length) {
                    maiorPalavra = array[i];
                }
            }
            // console.log (maiorPalavra);

            let menorPalavra = array[0];
            for (let i = 0; i < array.length; i += 1) {
                if (array[i].length < menorPalavra.length) {
                    menorPalavra = array[i];
                }
            }
            // console.log (menorPalavra);

        // Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

        let maiorPrimo = 2; // guardar o maior numero primo
        let quantidadeDeDivisores = 0; // conta quantos divisores tem
        for (let dividendo = 3; dividendo <= 50; dividendo += 1) {
        quantidadeDeDivisores = 0
        for (let divisor = 1; divisor <= 50; divisor += 1) {
            if(dividendo % divisor === 0) {
            quantidadeDeDivisores ++;
            }

            // se a quantidade de divisores for maior que 2 ele para e sai do deste for.
            if (quantidadeDeDivisores > 2) break
        }

        if(quantidadeDeDivisores === 2) {
            // se a quantidade de divisores for igual a dois o numero primo passará a ser o dividendo e a quantidade dedivisores é zerado para uma nova iteração do primeiro for.
            maiorPrimo = dividendo
        }
        }
        // console.log(maiorPrimo);

    // Bônus

        // Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
        
        /* 
        n = 5
        *****
        *****
        *****
        *****
        *****
         */

        var n = 5;
        var aux = ""; // para guardar os asterísticos
        for (var linha = 1; linha <= n; linha++) { // o primeiro for percorre as linhas
            for (var coluna = 1; coluna <= n; coluna++) { // o segundo for percorre as colunas
            aux += "*"; // a cada coluna formada ele acrescenta um asterístico.
        }
        // console.log(aux);
        aux = ""; // para limpar o aux que está cheio de asterísticos
        }

    
        // Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

        /* 
        n = 5
        *
        **
        ***
        ****
        *****
        */

            var n = 5;
            var aux = '';
            for (var linha = 1; linha <= n; linha ++) {
                for(var coluna = 1; coluna <= n; coluna ++) {
                    if (coluna == linha) {
                        aux += '*'
                    }
                }
            // console.log(aux) 
            }


        // Agora inverta o lado do triângulo. Por exemplo:

        /* 
        n = 5
            *
           **
          ***
         ****
        *****
        */
           
        // Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

        numero = 5;
        var aux = '';
        for (let i = 0; i < numero; i += 1) {
            aux += ' ';
        }
        for (var linha = 1; linha <= numero; linha ++) {
            for(var coluna = 1; coluna <= numero; coluna ++) {
                if (coluna === linha) {
                aux += '*'
                }
            }
            console.log(aux)
            if (aux[0] === ' ') {
                // auxiliar vai ser o mesmo auxiliar removendo o espaço do índice 0. O replace troca os caracteres.
                aux = aux.replace(aux[0] , '');
            }
        }

        // Depois, faça uma pirâmide com n asteriscos de base:

        /* 
        n = 5
          *
         ***
        *****
        */

        


        // Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
        // Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

        /* 
        n = 7
           *
          * *
         *   *
        *******
        */




        // Faça um programa que diz se um número definido numa variável é primo ou não.
            // Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
            // Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.


   
  
 


  
 


