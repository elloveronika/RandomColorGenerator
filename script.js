
document.querySelector('button').addEventListener('click', newColor)
const h1= document.querySelector('h1')

function newColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const thisColor = `rgb(${r},${g},${b})`

    document.body.style.backgroundColor = thisColor;

    h1.innerText = thisColor

}
