let conteudo = document.getElementById("título");
conteudo.textContent = "Olá, Mundo!";
conteudo.style.color = "blue";

let paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => {
    p.style.fontSize = "20px";
    p.style.color = "green";
});

for(let i = 0; i < paragrafos.length; i++){
    paragrafos[i].style.fontSize = "20px";
    paragrafos[i].style.color = "green";
}

paragrafos[1].style.color = "red";

let primeiroTitulo = document.querySelector(".texto");
primeiroTitulo.style.fontWeight = "bold";
primeiroTitulo.style.textDecoration = "underline";

let outroSite = document.createElement("a");
outroSite.textContent = "Acesse o google";
outroSite.href = "https://www.google.com";
outroSite.target = "_blank";
paragrafos[1].appendChild(outroSite);

let divClicavel = document.getElementById("clicavel");
divClicavel.addEventListener("click", function(){
    alert("AAAAAATTTTCHIIIIIIIIIIIIIIINNNNNNNNNNNNN");
});