
// Build 16x16 grid
function createGrid(size){
    const fullGrid = document.createElement("div");
    fullGrid.setAttribute("id","fullGrid");
    for (let rows = 0; rows <size; rows++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("grid","row",`row${rows}`);
        //rowDiv.textContent = "grid.row:" + rows;
        for (let columns = 0; columns<size; columns++){
            const colDiv = document.createElement("div");
            colDiv.classList.add("grid","pixel","column",`coor-${rows}-${columns}`);
            //colDiv.textContent = `${rows}.${columns}`;
            rowDiv.appendChild(colDiv);
        }
    fullGrid.appendChild(rowDiv);
    }    
    document.body.appendChild(fullGrid);
}

function deleteGrid(){
    const fullGrid = document.querySelector("#fullGrid");
    console.log("delete grid");
    console.log(fullGrid);
    fullGrid.remove();

}

function changeColor(){
    // console.dir(this);
    this.classList.toggle("hover");
}

const allDiv = Array.from(document.querySelectorAll(".pixel"));

// Initiate grid
createGrid(16);

allDiv.forEach(grid => grid.addEventListener("mouseover",changeColor));

function changeGridSize(){
    // cap gridSize to 100 for performance
    gridSize = Math.min(100,parseInt(prompt("Set a grid size: ","10")));
    deleteGrid();
    createGrid(gridSize);
}

const gridButton = document.querySelector(".gridbutton");
gridButton.addEventListener("click",changeGridSize);



