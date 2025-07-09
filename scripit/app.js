function init(){
    const gridElm = document.querySelector('.grid')
function createGrid() {
    
    for (let i = 0; i < 100; i++) {
        const cell =document.createElement('div')
        cell.textContent=i
        gridElm.appendChild(cell)
    }
}

createGrid()


}
document.addEventListener("DOMContentLoaded",init)
