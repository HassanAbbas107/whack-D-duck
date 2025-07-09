function init(){
    const gridElm = document.querySelector('.grid')
    const cells=[]
    const girdWidth=10
    const numOfCells=10*girdWidth
function createGrid() {
    
    for (let i = 0; i < 100; i++) {
        const cell =document.createElement('div')
        cell.textContent=i
        cell.classList.add('duck')
        cells.push(cell)
        gridElm.appendChild(cell)
    }
    console.log(cells)
}

createGrid()


}
document.addEventListener("DOMContentLoaded",init)
