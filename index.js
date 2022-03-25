let container = document.querySelector(".container");

let cloumnDivs = document.querySelectorAll(".col");

createGrid();

//create grids
function createGrid(){
    for(let i = 0; i<16; i++){
        let flexChild = document.createElement("div");
        flexChild.className="flexChild";
    
        
        //create 16 div inside flexChild
        for(let i = 0; i<16; i++){
            //let button = document.createElement("button");
            let cloumnDiv = document.createElement("div");
            cloumnDiv.className = "col";
    
            
    
            flexChild.appendChild(cloumnDiv);
        }
    
        container.appendChild(flexChild);
    }
}
