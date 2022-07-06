const input = document.getElementById("input");
const texto = document.getElementById("texto");
const button = document.getElementById("button");

function showValue (){
    texto.innerHTML = input.value;
    texto.style.color = "red";
}