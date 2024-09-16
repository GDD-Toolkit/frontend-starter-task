let redCount = 0;
let yellowCount = 0;
let greenCount = 0;
let blueCount = 0;

const red = document.querySelector(".redCount");
const yellow = document.querySelector(".yellowCount");
const green = document.querySelector(".greenCount");
const blue = document.querySelector(".blueCount");

function changeBackgroundColor(color){
    if(color=='red'){
        document.body.style.background = 'rgb(221, 84, 113)';
        redCount = redCount + 1;
        red.textContent = redCount;    
    }
    else if(color=='yellow'){
        document.body.style.background = 'rgb(248, 211, 119)';
        yellowCount = yellowCount + 1;
        yellow.textContent = yellowCount;    
    }
    else if(color=='green'){
        document.body.style.background = 'rgb(98, 211, 163)';
        greenCount = greenCount + 1;
        green.textContent = greenCount;    
    }
    else if(color=='blue'){
        document.body.style.background = 'rgb(63, 136, 174)';
        blueCount = blueCount + 1;
        blue.textContent = blueCount;    
    }
    //based on color add one to count
}

function clearBoard(){
    document.body.style.background = 'rgb(206, 205, 203)';
    redCount = 0;
    red.textContent = redCount;

    yellowCount = 0;
    yellow.textContent = yellowCount;

    greenCount = 0;
    green.textContent = greenCount;

    blueCount = 0;
    blue.textContent = blueCount;

    // reset count
}