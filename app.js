var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickhandler() {
    outputDiv.innerText = "ajajajjajssjjs" + txtInput.value;
};
btnTranslate.addEventListener("click", clickhandler)



