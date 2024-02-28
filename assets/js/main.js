//creiamo una griglia di prato fiorito con all'interno dei quadrati con all'interno dei numeri progressivi da 1 a 100

//dichiariamo quante celle vogliamo

let diffLevel = document.getElementById('difficulty').value;

function selectFunction() {
    const setSize = document.getElementById('container')
    diffLevel = document.getElementById('difficulty').value;
    console.log(diffLevel);

    if (diffLevel === '1') {
        maxCellNumber = 49
        console.log(maxCellNumber);
        setSize.classList.add('easy-size');


    } else if (diffLevel === '2') {
        maxCellNumber = 81
        console.log(maxCellNumber);
        setSize.classList.add('medium-size');

    } else if (diffLevel === '3'){
        maxCellNumber = 100
        console.log(maxCellNumber);
        setSize.classList.add('hard-size');
    }

    return maxCellNumber.value;
}

maxCellNumber = selectFunction()
console.log(maxCellNumber);



function generateGrid() {
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

    box.addEventListener('click', function (){
        box.classList.add('clicked');
        console.log(`Box selected: ` + [i + 1]);
    })
}

}




//EASY PEASY LEMON SQUEEZY 🤩


// BONUS



