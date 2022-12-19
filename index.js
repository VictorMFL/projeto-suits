let menuLista = document.querySelector('div.menu')
let menu = document.querySelector('img#menu-hamburguer')
let iconeFechar = document.querySelector('img#fechar-menu')


function abrirMenu() {
    menuLista.style.display = 'block'
    menu.style.display = 'none'
    iconeFechar.style.display = 'block'
}

function fecharMenu() {
    menuLista.style.display = 'none'
    menu.style.display = 'block'
}