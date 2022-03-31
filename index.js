let container = document.querySelector(".container");

let mouseDown = false;
container.onmousedown = () => (mouseDown = true)
container.onmouseup = () => (mouseDown = false)

createGrid();
function createGrid(size = 2){
    for(let i = 0; i<size; i++){
        let flexChild = document.createElement("div");
        flexChild.className="flexChild";
        
        for(let i = 0; i<size; i++){
            let columnDiv = document.createElement("div");
            columnDiv.className = "col";

            flexChild.appendChild(columnDiv);

            columnDiv.addEventListener("mouseover",function(){columnDiv.classList.add("inked")})
            columnDiv.addEventListener("mousedown",function(){columnDiv.classList.add("inked")})
        } 
        container.appendChild(flexChild);
    }
}

//clear grid
let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click",clearGrid);

function clearGrid(){

    //remove all chlidren of container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//update slider value
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    
    if(slider.value === 0 || slider.value  %2 === 0){
        clearGrid();
        output.innerHTML = slider.value;
        createGrid(slider.value);
        output.innerHTML = slider.value;
    }
}



