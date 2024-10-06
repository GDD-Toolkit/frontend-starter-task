let redCount = 0;
let yellowCount = 0;
let greenCount = 0;
let blueCount = 0;

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    if (color === '#f55345') {
        redCount = redCount + 1;
        document.getElementById('red-count').innerText = redCount;
    } else if (color === '#f6cf59') { 
        yellowCount = yellowCount + 1;
        document.getElementById('yellow-count').innerText = yellowCount;
    } else if (color === '#7cea9b') { 
        greenCount = greenCount + 1;
        document.getElementById('green-count').innerText = greenCount;
    } else if (color === '#3274de') { 
        blueCount = blueCount + 1;
        document.getElementById('blue-count').innerText = blueCount;
    }
}

function clearBoard() {
    document.body.style.backgroundColor = 'rgb(207, 205, 205)';

    redCount = 0;
    yellowCount = 0;
    greenCount = 0;
    blueCount = 0;

    document.getElementById('red-count').innerText = redCount;
    document.getElementById('yellow-count').innerText = yellowCount;
    document.getElementById('green-count').innerText = greenCount;
    document.getElementById('blue-count').innerText = blueCount;
}

document.getElementById('red-btn').addEventListener('click', function() {
    changeBackgroundColor('#f55345');
});

document.getElementById('yellow-btn').addEventListener('click', function() {
    changeBackgroundColor('#f6cf59');
});

document.getElementById('green-btn').addEventListener('click', function() {
    changeBackgroundColor('#7cea9b');
});

document.getElementById('blue-btn').addEventListener('click', function() {
    changeBackgroundColor('#3274de');
});

document.getElementById('clear-btn').addEventListener('click', clearBoard);
