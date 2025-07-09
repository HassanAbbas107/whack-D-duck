function init(){
    const gridElm = document.querySelector('.grid')
    const cells=[]
    const gridWidth=10
    const numOfCells=gridWidth*gridWidth
    let duckPosition=0;
    
    function addDuck() {
        cells[duckPosition].classList.add("Duck")
    }
    
    function removeDuck(){
        cells[duckPosition].classList.remove("Duck")
    }
    
    function play(){
        setInterval(() => {
            removeDuck()
            duckPosition = Math.floor(Math.random() * cells.length)
            addDuck()
        }, 3000)
    }
    
    function createGrid(){
        for (let i = 0; i < numOfCells; i++) {
            const cell = document.createElement('div')
            cell.textContent = i
            cells.push(cell)
            gridElm.appendChild(cell)
        }
        console.log(cells)
    }
    
    createGrid()
    addDuck()
    play()
}

document.addEventListener("DOMContentLoaded", init)