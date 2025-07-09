function init() {
    const gridElm = document.querySelector('.grid');
    score_disp=document.querySelector("#score_disp")
    const cells = [];
    const gridWidth = 10;
    const numOfCells = gridWidth * gridWidth;
    let duckPosition = 0; 
    let score=0
    let count
    audio=document.querySelector(".audio")
    function addDuck() {
        if (cells[duckPosition]) { 
            cells[duckPosition].classList.add("duck"); 
            count++
        }
    }
    
    function removeDuck() {
        if (cells[duckPosition]) { 
            cells[duckPosition].classList.remove("duck");
        }
    }
    function endgame(){
        alert('game ended'+score)
        score=0
        count=0
    }
    function play() {
        setInterval(() => {
            if(count<10){
            removeDuck();
            duckPosition = Math.floor(Math.random() * numOfCells); 
          addDuck();}else{ endgame() 
            }
        }, 2000); 
    }
    
    function createGrid() {
        gridElm.style.display = 'grid';
        gridElm.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`; 
        
        for (let i = 0; i < numOfCells; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell'); 
            cell.textContent = i;
            cell.addEventListener('click',handelClick)
            cells.push(cell);
            gridElm.appendChild(cell);
        }
    }
    
    function handelClick(){
        if(event.target.classList.contains('duck')){
            audio.pause()
            audio.currentTime=0
            score+=100
            score_disp.textContent=`Your Score is ${score}`
            audio.play()
            removeDuck()
        }
    }
    createGrid();
    duckPosition = Math.floor(Math.random() * numOfCells); 
    addDuck();
    play();

}

document.addEventListener("DOMContentLoaded", init);