const menu = document.querySelector(".menu-hamburguer")


function abrirMenu(event){

console.log(event.currentTarget.classList.toggle("ativo"))

console.log(event.currentTarget.previousElementSibling.classList.toggle("ativo"))

}

menu.addEventListener("click" , abrirMenu)