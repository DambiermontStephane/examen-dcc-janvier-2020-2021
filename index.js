// Nom    :
// Prénom :
// Groupe :

const settings = {
    jsEnable: 'js-enabled'
}

document.documentElement.classList.add(settings.jsEnable)

for (let i = 0; i < 9; i++) {
    document.getElementById('app').insertAdjacentHTML('beforeend', `<li class='grid__item'></li>`)
}