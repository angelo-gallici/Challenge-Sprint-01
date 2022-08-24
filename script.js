const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
var a = 0;

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    a=1;
}

function encriptar(textoAencriptar){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoAencriptar = textoAencriptar.toLowerCase();

    for(let i=0;i<matriz.length;i++){
        if(textoAencriptar.includes(matriz[i][0])){
            textoAencriptar=textoAencriptar.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return textoAencriptar;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensaje.value);
    inputTexto.value = textoDesencriptado;
    inputTexto.style.backgroundImage = "none";
    mensaje.value = "";
    a=0;
}

function desencriptar(textoAdesencriptar){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoAdesencriptar = textoAdesencriptar.toLowerCase();

    for(let i=0;i<matriz.length;i++){
        if(textoAdesencriptar.includes(matriz[i][1])){
            textoAdesencriptar=textoAdesencriptar.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return textoAdesencriptar;
}

function copiar(){
    if(a==1){
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value);
        mensaje.value = "";
        alert("Mensaje encriptado copiado");
    }else{
        inputTexto.select();
        navigator.clipboard.writeText(inputTexto.value);
        inputTexto.value="";
        alert("Mensaje desencriptado copiado");
    }

}