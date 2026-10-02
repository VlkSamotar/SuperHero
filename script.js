let jmeno_postavy = document.querySelector('#jmeno-postavy')
jmeno_postavy.innerHTML = 'Clint Eastwood'

let karta = document.querySelector('#karta')
karta.style.background = '#822435'

let foto = document.querySelector('#foto')
foto.src = 'https://plus.unsplash.com/premium_photo-1679440414265-336dfccc72f1?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
foto.style.objectFit = 'cover'
foto.style.objectPosition = 'top'

let btn_superschopnost = document.querySelector('#btn-schopnost')
let status_zprava = document.querySelector('#status-zprava')
btn_superschopnost.addEventListener('click', () => {
    foto.style.borderColor = '#82247A'
    status_zprava.innerHTML = 'Schopnost aktivována!'
})

foto.addEventListener('mouseover', () => {
    foto.style.transform = 'scale(1.1)'
})

foto.addEventListener('mouseout', () => {
    foto.style.transform = 'scale(1)'
})

let inventar = ['Revolver', 'Nůž', 'Klobouk', 'Doutník']
let seznam_predmetu = document.querySelector('#seznam-predmetu')

for (let i = 0; i < inventar.length; i++) {
    seznam_predmetu.innerHTML += `<li> ${inventar[i]} </li>`
}