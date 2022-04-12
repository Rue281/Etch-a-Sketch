let container = document.querySelector(".container");

/*window.addEventListener("click",function(event){
    console.log(event.target);
    let btn = this.document.querySelector(".spectrum");
    console.log(btn);
})*/

let spectrumButton = document.querySelector(".spectrum");


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
            columnDiv.addEventListener("mouseover",function(){
                columnDiv.style.background = colorWell.value;
            });

            columnDiv.addEventListener("mousedown",function(){
                columnDiv.style.background = colorWell.value;
            });

            /**********WEIIIIIRd */

            spectrumButton.addEventListener("click",function(){

                columnDiv.addEventListener("mouseover",function(){
                    columnDiv.style.backgroundColor = "#" +generatingRColor();
                });

                columnDiv.addEventListener("mousedown",function(){
                    columnDiv.style.backgroundColor = "#" +generatingRColor();
                });
            });

            colorWell.addEventListener("input", function(){
                        columnDiv.addEventListener("mouseover",function(){
                            columnDiv.style.backgroundColor = colorWell.value;
                        });
        
                        columnDiv.addEventListener("mousedown",function(){
                            columnDiv.style.backgroundColor = colorWell.value;
                        });
                    });

                    colorWell.addEventListener("change", function(){
                        columnDiv.addEventListener("mouseover",function(){
                            columnDiv.style.backgroundColor = colorWell.value;
                        });
        
                        columnDiv.addEventListener("mousedown",function(){
                            columnDiv.style.backgroundColor = colorWell.value;
                        });
                    });
            /**********WEIIIIIRd */
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
    valueContainer.style.display = "none";
}

//update slider value
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let valueContainer = document.querySelector(".value");
output.innerHTML = slider.value;

slider.oninput = function() {
    
    if(slider.value === 0 || slider.value  %2 === 0){
        clearGrid();
        valueContainer.style.display = "block";
        createGrid(slider.value);
        output.innerHTML = slider.value;
    }
}

//single color brush
//function startup() {
    colorLabel = document.querySelector(".colorPicker");
    colorWell = document.querySelector("#colorWell");
    colorWell.value = colorWell.defaultValue;
    colorLabel.style.background = colorWell.value;
    
    colorWell.addEventListener("input", update, false);
    colorWell.addEventListener("change", update, false);
    colorWell.select();
  //}

  function update(){
    colorLabel.style.background = colorWell.value;
  }

//spectrum brush
spectrumButton.addEventListener("click",generatingRColor);
//generate random color
function generatingRColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    //console.log("#"+randomColor);
    return randomColor
}



