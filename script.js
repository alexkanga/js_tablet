let inputColor = document.querySelector("#color");
let inputTexte = document.querySelector("#texte");
let screen = document.querySelector('#screen');



screen.addEventListener("click", function(e){
    console.log(e.target);
    inputTexte.value = "";
    inputColor.value = "";
    let screenButton = e.target;
    //console.log("scren button clicked");
    inputColor.addEventListener("change", function(e) {
        console.log("input color");
        let inputColorValue = e.target.value;
        screenButton.style.backgroundColor = inputColorValue;
    })
    
    inputTexte.addEventListener("input", function(e) {
        console.log("input texte");
        let  inputTexteValue = e.target.value;
        //console.log(inputTexteValue);
        console.log("texte value: " + inputTexteValue);
        screenButton.textcontent = inputTexteValue;
    })
});






