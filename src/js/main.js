let seconds = settings.maxTime;
let love = false;
let js = true;
let startGame = true;

document.documentElement.classList.add('js-enabled')

for (let i = 0; i < 9; i++) {
    document.getElementById('app').insertAdjacentHTML('beforeend', `<li class="grid__item"></li>`)
}

const p1 = new Player('Steph');
const p2 = new Player('Steph 2');

document.querySelector('.timer').textContent = `00:${seconds}`;

settings.turn.classList.add('js')

document.querySelectorAll('li.grid__item').forEach((item) => {
    item.addEventListener('click', () => {
        if (startGame === true) {
            setInterval(() => {
                if (seconds === 0) {
                    seconds = settings.maxTime
                    document.querySelectorAll('li.grid__item').forEach(item => {
                        item.classList.remove('grid__item--love')
                        item.classList.remove('grid__item--js')
                    })
                }
                document.querySelector('.timer').textContent = `00:${seconds--}`;
            }, 1000)
            startGame = false
        }
        if (js === true) {
            item.classList.add('grid__item--js')
            p1.score++
            document.querySelector('li.result_item--js').textContent = `Joueur 1 : ${p1.score}`
            js = false
            love = true
            settings.turn.classList.add('love')
        } else if (js !== true) {
            item.classList.add('grid__item--love')
            p2.score++
            document.querySelector('li.result_item--love').textContent = `Joueur 2 : ${p2.score}`
            js = true
            love = false
            settings.turn.classList.remove('love')
            settings.turn.classList.add('js')
        }
    })
})

