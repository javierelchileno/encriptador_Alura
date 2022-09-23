var textingresado = document.querySelector("#str1");
textingresado.focus();
var textresultado = document.querySelector("#str2");

function encriptado(){
    var textingresado = document.querySelector("#str1").value;
    var textresultado = document.querySelector("#str2");
    var arreglingr = textingresado.split("");
    var arreglres = textingresado.split("");
    for (var i = 0; i < arreglingr.length; i++) {
        let text = textingresado;
        arreglres[i] = text.charCodeAt(i);
    }
    for (var i = 0; i < arreglres.length; i++) {
        let t = arreglres[i];
        arreglres[i] = String.fromCodePoint(t+2);
    }
    var texto_resultado = arreglres.join("");
    textresultado.value = texto_resultado;

    console.log(arreglres);
};

function desencriptado() {
    var textingresado = document.querySelector("#str1").value;
    var textresultado = document.querySelector("#str2");
 
    var arreglingr = textingresado.split("");
    var arreglres = textingresado.split("");
    
    for (var i = 0; i < arreglingr.length; i++) {
        let text = textingresado;
        arreglres[i] = text.charCodeAt(i);
    }
    for (var i = 0; i < arreglres.length; i++) {
        let t = arreglres[i];
        arreglres[i] = String.fromCodePoint(t - 2);
    }
    var texto_resultado = arreglres.join("");
    textresultado.value = texto_resultado;
    
    console.log(arreglres);
};

function copiar(){
    var textresultado = document.querySelector("#str2");
    textresultado.select();
    document.execCommand("copy");
};

var botonEncriptar = document.querySelector("#btnEncrip");
botonEncriptar.onclick = encriptado;

var botonDesencriptar = document.querySelector("#btnInvEncrip");
botonDesencriptar.onclick = desencriptado;

var botonCopiar = document.querySelector("#btncopiar");
botonCopiar.onclick = copiar;