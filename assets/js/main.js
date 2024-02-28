//creiamo una griglia di prato fiorito con all'interno dei quadrati con all'interno dei numeri progressivi da 1 a 100

//dichiariamo quante celle vogliamo

let diffLevel = document.getElementById('difficulty').value;
console.log(diffLevel);

function selectFunction(diffLevel) {

    diffLevel = document.getElementById('difficulty').value;
    console.log(diffLevel);

    if (diffLevel === '1') {
        maxCellNumber = 49
        console.log(maxCellNumber);
        return maxCellNumber;

    } else if (diffLevel === '2') {
        maxCellNumber = 81
        console.log(maxCellNumber);
        return maxCellNumber;

    } else if (diffLevel === '3'){
        maxCellNumber = 100
        console.log(maxCellNumber);
        return maxCellNumber;

    } else {
        document.getElementById('come_on').insertAdjacentHTML('beforeend','PLEASE SELECT A DIFFICULTY')
    }

}

maxCellNumber = selectFunction()


console.log(maxCellNumber);


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

//EASY PEASY LEMON SQUEEZY 🤩


// BONUS



