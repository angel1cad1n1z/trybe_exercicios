// o document guarda toda estrutura da página html. Ele é quem dá o acessoao DOM.

const paragraph = document.getElementById("paragraph");
     paragraph.style.color = "red";
        console.log('ola');

let titulo = document.getElementById("page-title").innerText = "Maldita Sorte";
        console.log (titulo);

let segundoParagrafo = document.getElementById("second-paragraph"). innerText = "Amaldiçoado desde a infância, o dentista Charlie Kagan não consegue encontrar a mulher certa. Pior ainda, ele descobre que cada uma de suas ex-namoradas encontra o verdadeiro amor com o homem que ela conhece depois que seu relacionamento com Charlie termina. Ao ouvir sobre a reputação de Charlie, mulheres formam fila para um encontro rápido. Porém quando Charlie conhece a mulslher de seus sonhos, ele procura uma maneira de quebrar a maldição para não perdê-la para o próximo homem que aparecer. (fonte: Google)";
    console.log(segundoParagrafo)

let subtitulo = document.getElementById("subtitle"). innerText = "Melhor filme de comédia romântica"

let paragrafosUmEdois = document.getElementsByClassName("paragraphOneAndTwo");
paragrafosUmEdois[0].style.color = "black";

subtitulo = document.getElementsByTagName("h4")[0];
subtitulo.style.color = "green";

