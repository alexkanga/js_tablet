currentBotton = null;
function setBottom(event){
    let bottom = document.querySelector("#screen div.active");
    if (bottom){
        console.log("true");
        bottom.classList.remove("active");
    }
    
   // console.log(event);
    event.target.classList.add('active');
    currentBotton = event.target;
    couleur.value = event.target.getAttribute("backgroundColor") || "";
    contenu.value = event.target.textContent;
    
    
}

let couleur = document.querySelector(".color");
couleur.addEventListener("input",function(e){
    // couleur.style.backgroundColorcolor = couleur.value;
    currentBotton.style.backgroundColor = couleur.value;
    currentBotton.setAttribute("backgroundColor", couleur.value) ;

});

let contenu = document.querySelector(".contenu");
contenu.addEventListener("input", function(e){
    
    currentBotton.textContent = contenu.value;
}
);