//creiamo una griglia di prato fiorito con all'interno dei quadrati con all'interno dei numeri progressivi da 1 a 100

//dichiariamo quante celle vogliamo
const maxCellNumber = 100

//iteriamo attraverso il ciclo for le caselle all/interno del DOM
for (let i = 0; i < maxCellNumber; i++) {

    // nella stessa iterazione inseriamo sia i quadrati che i numeri all'interno
    const markup = '<div class="box">' + [i + 1] + '</div>'
    markupElement = document.getElementById('container').insertAdjacentHTML('beforeend', markup);
}

const box = document.getElementsByClassName('box')
// console.log(box);

box.addEventListener('click', function() {
    box.classList.add('clicked')
    console.log('clicked');
})




