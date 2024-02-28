

const maxCellNumber = 100

for (let i = 0; i < maxCellNumber; i++) {
    const markup = '<div class="box">' + [i + 1] + '</div>'
    markupElement = document.getElementById('container').insertAdjacentHTML('beforeend',markup);
}


