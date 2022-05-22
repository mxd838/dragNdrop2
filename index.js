// Elements
const boxes = document.querySelectorAll('.box')
const movingDivOne = document.querySelector('#dragMe1')
const movingDivTwo = document.querySelector('#dragMe2')


// Functions
const moveDivOne = (e) => {
    // console.log(e)
    e.dataTransfer.setData(movingDivOne, e.target.id)
}

const moveDivTwo = (e) => {
    // console.log(e)
    e.dataTransfer.setData(movingDivTwo, e.target.id)
}

const dragOver = (e) => {
    // console.log(e)
    e.preventDefault()
}

const drop = (e) => {
    // console.log(e.dataTransfer.getData(moveDivOne))
    // console.log(e.dataTransfer.getData(moveDivTwo))

    const movingDivData = e.dataTransfer.getData(movingDivTwo)
    const movedDiv = document.getElementById(movingDivData)
    e.target.appendChild(movedDiv)
}



// Event listeners
movingDivOne.addEventListener('dragstart', moveDivOne)
movingDivTwo.addEventListener('dragstart', moveDivTwo)
boxes.forEach(box => {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('drop', drop)
})