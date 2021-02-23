let turnOn = document.getElementById('turnOn')
let turnOff = document.getElementById('turnOff')
let lamp = document.getElementById('lamp')


// This code turnOn 
turnOn.addEventListener('click', () =>{
    lamp.src = 'img/ligada.jpg'
})

turnOff.addEventListener('click', () =>{
    lamp.src = 'img/desligada.jpg'
})

lamp.addEventListener('dblclick', () =>{
    lamp.src = 'img/quebrada.jpg'
})