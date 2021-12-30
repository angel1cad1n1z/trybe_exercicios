// Acesse o elemento elementoOndeVoceEsta .

console.log (document.getElementById("elementoOndeVoceEsta"));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

console.log(document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "#ff0000");

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

console.log (document.getElementById("primeiroFilhoDoFilho").innerText = "Primeiro filho do FILHO!");

// Acesse o primeiroFilho a partir de pai .

console.log (document.getElementById("pai").firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

console.log (document.getElementById("elementoOndeVoceEsta").previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

console.log (document.getElementById("elementoOndeVoceEsta").nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

console.log (document.getElementById("elementoOndeVoceEsta").nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai .

console.log (document.getElementById("pai").lastElementChild.previousElementSibling);

//Para Praticar 2:

// Crie um irmão para elementoOndeVoceEsta.

    let elementoPai = document.getElementById("pai");
    let novoElemento = document.createElement("section");
    novoElemento.id = "irmaoELementoOndeVoceEsta";
    elementoPai.appendChild(novoElemento);

// Crie um filho para elementoOndeVoceEsta.

    let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
    let novoElementoFilho = document.createElement("section");
    novoElementoFilho.id = "filhoELementoOndeVoceEsta";
    elementoOndeVoceEsta.appendChild(novoElementoFilho);

// Crie um filho para primeiroFilhoDoFilho.

    let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
    let novoElementoFilhoDoFilho = document.createElement("section");
    novoElementoFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
    primeiroFilhoDoFilho.appendChild(novoElementoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

console.log (document.getElementById("filhoPrimeiroFilhoDoFilho").parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling);

// Para praticar - Parte III
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .


let sections = document.getElementsByTagName("section")
console.log (sections)

//sections[0].removeChild(sections[8])


for (let chave of sections) {

    if (chave.id === "primeiroFilho" || chave.id === "terceiroFilho" || chave.id === "quartoEUltimoFilho" || chave.id === "irmaoELementoOndeVoceEsta" || chave.id === "segundoEUltimoFilhoDoFilho" || chave.id === "filhoELementoOndeVoceEsta") {
        chave.remove()
     }
    
}

console.log(sections)
 // imprime com erro em filhoElementoOndeVoceEsta* e quartoEUltimoFilho*