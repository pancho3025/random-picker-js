const opcionesText = document.querySelector('.opc');
const botOpciones = document.querySelector('.opciones')

let array = [opcionesText.value]
let xd = array.join(',')
let final = xd.split(',')
console.log(final[0])

opcionesText.addEventListener('keyup',(e)=>{
    createElements(e.target.value)
    if(e.key === 'Enter'){
        pickRandom()
    }
})

function createElements (texto){
    const elementos = texto.split(',')

    botOpciones.innerHTML = '';

    elementos.forEach(el=>{
        const tagEl = document.createElement('span')
        tagEl.classList.add('ot');
        tagEl.innerText = el;
        botOpciones.appendChild(tagEl)
    })
}



function random (){
    const opciones = document.querySelectorAll('.ot');
    return opciones[Math.floor(Math.random()*opciones.length)]
}

function pickRandom(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = random()
	
	if (randomTag !== undefined) {
        brillar(randomTag)

        setTimeout(() => {
            quitarBrillo(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = random()

            brillar(randomTag)
        }, 100)

    }, times * 100)
}





function brillar(el){
    el.classList.add('brillar')
}
function quitarBrillo(el){
    el.classList.remove('brillar')
}

