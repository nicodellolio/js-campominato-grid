//creiamo una griglia di prato fiorito con all'interno dei quadrati con all'interno dei numeri progressivi da 1 a 100

//dichiariamo quante celle vogliamo

const playButton = document.getElementById('playButton')
let diffLevel = document.getElementById('difficulty').value;

playButton.addEventListener ('click', function (e) {

    e.preventDefault()

    const setSize = document.getElementById('container')
    diffLevel = document.getElementById('difficulty').value;
    // console.log(diffLevel);

    if (diffLevel === '1') {
        maxCellNumber = 49
        console.log(maxCellNumber);
        setSize.classList.add('easy-size');

    } else if (diffLevel === '2') {
        maxCellNumber = 81
        console.log(maxCellNumber);
        setSize.classList.add('medium-size');

    } else if (diffLevel === '3') {
        maxCellNumber = 100
        console.log(maxCellNumber);
        setSize.classList.add('hard-size');

    } else if (diffLevel === 'none') {
        console.log('invalid');
        setSize.classList.add('hard-size');
        document.getElementById('container').insertAdjacentHTML('beforeend','<div class="fs-2 fw-bolder w-100">AGGIORNA LA PAGINA E SELEZIONA UNA DIFFICOLTÀ  😅</div>')
    }

    const getPlay = document.querySelector('.play')
    getPlay.classList.add('play-none');

    //iteriamo attraverso il ciclo for le caselle all/interno del DOM

    for (let i = 0; i < maxCellNumber; i++) {

        // nella stessa iterazione inseriamo sia i quadrati che i numeri all'interno
        const markup = '<div class="box" >' + [i + 1] + '</div>'
        markupElement = document.getElementById('container').insertAdjacentHTML('beforeend', markup);
        
    }

    let boxes = document.getElementsByClassName('box');

    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];

        box.addEventListener('click', function () {
            box.classList.add('clicked');
            console.log(`Box selected: ` + [i + 1]);
        })
    }
})


function generateMush (){
    const mushArray = []
    
    while (mushArray.length < 16) {
        const mushroom = Math.floor(Math.random(1) * 100);

        if (!mushArray.includes(mushroom)) {
            mushArray.push(mushroom);
            console.log(mushroom);
        }
        
    } 
    return mushArray
}

const mushList = generateMush();
console.log(mushList);