let redCount = 0;
let yellowCount = 0;
let greenCount = 0;
let blueCount = 0;

const red = document.querySelector(".redCount");
const yellow = document.querySelector(".yellowCount");
const green = document.querySelector(".greenCount");
const blue = document.querySelector(".blueCount");

function changeBackgroundColor(color){
    document.body.style.background = color;
    if(color=='red'){
        redCount = redCount + 1;
        red.textContent = redCount;    
    }
    else if(color=='yellow'){
        yellowCount = yellowCount + 1;
        yellow.textContent = yellowCount;    
    }
    else if(color=='green'){
        greenCount = greenCount + 1;
        green.textContent = greenCount;    
    }
    else if(color=='blue'){
        blueCount = blueCount + 1;
        blue.textContent = blueCount;    
    }
    //based on color add one to count
}

function clearBoard(){
    document.body.style.background = 'lightgrey';
    red.textContent = 0;
    yellow.textContent = 0;
    green.textContent = 0;
    blue.textContent = 0;

    // reset count
}