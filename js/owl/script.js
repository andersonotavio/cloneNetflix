const btnMenu = document.querySelector('[data-menu="button"]')
const listMenu = document.querySelector('[data-menu="list"]')

function abrirMenu(event){
  listMenu.classList.toggle('active')
  console.log("ok")
}

btnMenu.addEventListener('click', abrirMenu)