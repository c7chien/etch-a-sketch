
for (let rows = 0; rows <8; rows++){
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("grid","row",`row${rows}`);
    //rowDiv.textContent = "grid.row:" + rows;
    for (let columns = 0; columns<8; columns++){
        const colDiv = document.createElement("div");
        colDiv.classList.add("grid","column",`col${columns}`);
        colDiv.textContent = `grid.${rows}.${columns}`;
        rowDiv.appendChild(colDiv);
    }
document.body.appendChild(rowDiv);
}


const allDiv = Array.from(document.querySelectorAll("div"));

console.dir(allDiv);

