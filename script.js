
var textInp = document.getElementById('textInput');
var textOut = document.getElementById('textOutput');

var textOutputMuñeco = document.querySelector(".Muñeco");
var textOutputVoid = document.querySelector(".text-output-void");

var textOutputFull = document.querySelector(".text-output-full");
textOutputFull.style.display = 'none';
var campo_btncopy = document.querySelector(".btn-copiar");
campo_btncopy.style.display = 'none';

const bonton1 = document.getElementById("btnEncriptar");
const bonton2 = document.getElementById("btnDesencriptar");
const bonton3 = document.getElementById("btn-copiar");
const check = /[A-Z\áéíóú\ÁÉÍÓÚ]/;

bonton1.addEventListener("click", encriptar);
bonton2.addEventListener("click", decencriptar);
bonton3.addEventListener("click", Copiar)


function validar() {
    if (check.test(textInp.value)) {
        textInp.value = ""
        textAreaVoid();
        return alert("El texto contiene caracteres no validos \ningrese el texto nuevamente");
    } else if (textInp.value == "") {
        textAreaVoid();
    } else {
        textAreaFull();
    }

}

function textAreaFull() {
    textOutputMuñeco.style.display = 'none';
    textOutputVoid.style.display = 'none';
    textOutputFull.style.display = 'block';
    campo_btncopy.style.display = 'block';

}

function textAreaVoid() {
    textOutputMuñeco.style.display = 'block';
    textOutputVoid.style.display = 'block';
    textOutputFull.style.display = 'none';
    campo_btncopy.style.display = 'none';

}

function encriptar() {
    var textEnc = "";
    validar();
    for (var i = 0; i < textInp.value.length; i++) {
        switch (textInp.value[i]) {
            case 'a':
                textEnc += "ai";
                break;
            case 'e':
                textEnc += 'enter';
                break;
            case 'i':
                textEnc += 'imes';
                break;
            case 'o':
                textEnc += 'ober';
                break;
            case 'u':
                textEnc += 'ufat';
                break;
            default:
                textEnc += textInp.value[i];
                break;
        }
    }
    textOut.value = textEnc;
}

function decencriptar() {
    var textDesEnc = "";
    validar();
    for (var i = 0; i < textInp.value.length; i++) {
        switch (textInp.value[i]) {
            case 'a':
                textDesEnc += textInp.value[i];
                i++;
                break;
            case 'e':
                textDesEnc += textInp.value[i];
                i += 4;
                break;
            case 'i':
                textDesEnc += textInp.value[i];
                i += 3;
                break;
            case 'o':
                textDesEnc += textInp.value[i];
                i += 3;
                break;
            case 'u':
                textDesEnc += textInp.value[i];
                i += 3;
                break;
            default:
                textDesEnc += textInp.value[i];
                break;
        }
    }
    textOut.value = textDesEnc;
}

function Copiar() {
    let copyText = document.querySelector(".text-output-result").value;
    navigator.clipboard.writeText(copyText);
    window.alert("El mensaje fue copiado");
}
