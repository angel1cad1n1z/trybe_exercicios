// Objeto
    // entidade independente com propriedades e tipos
        //  propriedade: associação entre chave e valor
    // Também é possível armazenar um objeto dentro de outro, ou até mesmo dentro de um array.
    let car = {
        type: 'Fiat',
        model: '500',
        color: 'white',
      };


    // Para acessar as chaves dentro de um objeto usa-se ponto ou colchetes.
    // Objeto dentro de um array
      // é acessado através do índice
      // Após pegar o objeto que você deseja, para acessar suas propriedades basta usar a notação de  colchetes ou a notação de ponto . O mesmo vale para acessar objetos dentro de objetos.
      // As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, como 0 , por exemplo, só é possível usando a notação de colchetes . Se você usar a notação de ponto , ocorre um erro. Ao usar a notação de colchetes também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.

    let diasDaSemana = {
        1 : 'domingo',
        2 : 'segunda',
        3 : 'terça',
        4 : 'quarta',
        5 : 'quinta',
        6 : 'sexta',
        7 : 'sábado',
    };
        
    // console.log (diasDaSemana.1); // SyntaxError: Unexpected number
    // console.log(diasDaSemana['1']); // domingo
    // No código acima, ocorre um erro por usar notação de ponto ao invés de notação de colchetes com uma propriedade nomeada com número.
        
        // Agora veja este exemplo:
        let conta = {
            agencia: '0000',
            banco: {
              cod: '012',
              id: 4,
              nome: 'TrybeBank',
            },
          };
          
          let infoDoBanco = 'banco';
         // console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
         // console.log(conta[infoDoBanco]['nome']); // TrybeBank
          
         // console.log(conta.agencia); // 0000
         // console.log(conta['agencia']); // 0000
          
         // console.log(conta.banco.cod); // 012
         // console.log(conta['banco']['id']); // 4

        // Neste exemplo, a chave banco do objeto conta , guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.

        // Neste outro exemplo, veja como vamos adicionar as informações de forma encadeada:
        let usuario = {
            id: 99,
            email: 'jakeperalta@gmail.com',
            infoPessoal: {
              nome: 'Jake',
              sobrenome: 'Peralta',
              endereco: {
                rua: 'Smith Street',
                bairro: 'Brooklyn',
                cidade: 'Nova Iorque',
                estado: 'Nova Iorque',
              },
            },
          };
          
         // console.log(usuario['id']); // 99
         // console.log(usuario.email); // jakeperalta@gmail.com
          
         // console.log(usuario.infoPessoal.endereco.rua); // Smith Street
         // console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova 
         
        // O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco , que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele.
        
        // Agora, e se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto? Veja este exemplo: 
        let moradores = [
            {
              nome: 'Luiza',
              sobrenome: 'Guimarães',
              andar: 10,
              apartamento: 1005,
            },
            {
              nome: 'William',
              sobrenome: 'Albuquerque',
              andar: 5,
              apartamento: 502,
            },
            {
              nome: 'Murilo',
              sobrenome: 'Ferraz',
              andar: 8,
              apartamento: 804,
            },
            {
              nome: 'Zoey',
              sobrenome: 'Brooks',
              andar: 1,
              apartamento: 101,
            },
          ];
          
          let primeiroMorador = moradores[0];
         // console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
         // console.log(primeiroMorador['andar']); // 10
          
          let ultimoMorador = moradores[moradores.length - 1];
         // console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
         // console.log(ultimoMorador.nome); // Zoey

        // Esse último bloco de código é um exemplo de um array composto por objetos. Os objetos desejados foram acessados através dos seus índices e armazenados dentro de variáveis para facilitar a compreensão.
    
    // Para fixar
        // Crie um objeto player contendo as variáveis listadas abaixo.

        let player = {
            name: 'Marta',
            lastName: 'Silva',
            age: 34,
            medals: { 
                golden: 2, 
                silver: 3 
            }
        }
        // console.log (player.name);

        // Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
        // console.log (`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`)

        // Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
        
        player = {
            name: 'Marta',
            lastName: 'Silva',
            age: 34,
            medals: { 
                golden: 2, 
                silver: 3, 
            },
            bestInTheWorld: [
                2006, 2007, 2008, 2009, 2010, 2018
            ]
        }

       // Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
       // console.log (`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`)
    
// For/in
    // marcas de carros presentes em um array
    let cars = ['Saab', 'Volvo', 'BMW'];

    for (let index in cars) {
    // console.log(cars[index]); // retorna todas as marcas de carros contidas no array
    }

    // iteração nas chaves de um objeto
    let carro = {
        type: 'Fiat',
        model: '500',
        color: 'white',
    };
    
    for (let index in carro) {
    // console.log(index, carro[index]); // retorna o índice e o valor -> type fiat
          // model 500
          // color white
  }

    // o For/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades. Por exemplo, se tivermos um array com três strings dentro:
    let food = ['hamburguer', 'bife', 'acarajé'];

    // As propriedades dos elementos do array serão os índices de cada posição, começando por zero. É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.

    for (let position in food) {
    // console.log(position); //retorna os índices do array -> resultado: 0, 1, 2;
    };
    

    // Se percorrermos um objeto, também teremos o mesmo resultado. O For/in irá percorrer a propriedade declarada, e não o seu valor em si.
    // Já o For/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in . Vejamos o exemplo:

    food = ['hamburguer', 'bife', 'acarajé'];
    for (let value of food) {
    // console.log(value); //retorna os itens do array -> resultado: hamburguer, bife, acarajé;
    };

    // Para Fixar
        // Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
        let names = {
            person1: 'João',
            person2: 'Maria',
            person3: 'Jorge' 
          };

          for (let index in names) {
             // console.log (`Olá ${index, names[index]}`)
          }

        // Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
        let carroAudi = {
            model: 'A3 Sedan',
            manufacturer: 'Audi',
            year: 2020
          };

        for (let i in car) {
              console.log (i, car[i])
        }

// Funções
    // conjunto de instruções que executa uma tarefa ou calcula um valor.
    // com ela conseguimos dividir o código em blocos lógicos, diminuir o tamanho do código, acabar com a repetição e ser mais fácil a leitura e entendimento deixando-os mais organizados.

    // é possível criar funções que recebem ou não parâmetros. E, para decidir se a sua função precisa ou não deles, você deve pensar em sua lógica.
    // Por exemplo, se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: "Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.
    // Veja o exemplo abaixo:

    // Sem função
    let nome = 'João';

    console.log('Bom dia, ' + nome);


    // Com função
    function bomDiaTryber(nome) {
    console.log('Bom dia, ' + nome);
    }

    bomDiaTryber('João'); // Bom dia, João
    bomDiaTryber('Julia'); // Bom dia, Julia
    bomDiaTryber('Marcelo'); // Bom dia, Marcelo