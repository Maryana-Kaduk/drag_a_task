const item = document.querySelector('.item');
const places = document.querySelectorAll('.place');
console.log(places);

item.addEventListener('dragstart', fnDragStart)
item.addEventListener('dragend', fnDragEnd)

function fnDragStart(e) {
    // console.log(e)
    // console.log('початок')
    e.target.classList.add('hold')
}

function fnDragEnd(e) {
    // console.log(e);
    // console.log('кінець')
    e.target.className = 'item'
}

for(const place of places) {
    place.addEventListener('dragenter', fnDragEnter)
    place.addEventListener('dragover', fnDragOver)
    place.addEventListener('drop', fnDragDrop)
    place.addEventListener('dragleave', fnDragLeave)
}

function fnDragEnter(e) {
    // console.log('перетин межі');
    e.target.classList.add('hovered')
}

function fnDragOver(e) {
    // console.log('перебуванння над елементом');
    e.preventDefault()
}

function fnDragDrop(e) {
    // console.log('відпустили');
    e.target.classList.remove('hovered')
    e.target.append(item)
}

function fnDragLeave(e) {
    // console.log('вийшли');
    e.target.classList.remove('hovered')
}