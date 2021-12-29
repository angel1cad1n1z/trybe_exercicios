function corDeFundo (elementos, cor) {
    document.querySelector(elementos)
    .style
    .background = cor;
}
corDeFundo (".emergency-tasks","#ffb6c1");
corDeFundo (".no-emergency-tasks","#FFFF00");
corDeFundo ("h1", "#228B22");
corDeFundo ("#footer-container", "#006400");

function CorDeFundoH3 (elementos, cores) {
    //alert(`"${clazz[0]} h3", "${cor}"`)
    document.querySelectorAll(elementos[0], cores[0])[0].style.background = cores[0];
    document.querySelectorAll(elementos[0], cores[0])[1].style.background = cores[0];
    document.querySelectorAll(elementos[1], cores[1])[0].style.background = cores[1];
    document.querySelectorAll(elementos[1], cores[1])[1].style.background = cores[1];
}
CorDeFundoH3([".emergency-tasks h3", ".no-emergency-tasks h3"], ["#c8a2c8", "#000000"])




