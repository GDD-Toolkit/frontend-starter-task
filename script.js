let redCount = 0;
let yellowCount = 0;
let greenCount = 0;
let blueCount = 0;

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    if (color === '#f55345') {
        redCount++;
        document.getElementById('red-count').innerText = redCount;
    } else if (color === '#f6cf59') { 
        yellowCount++;
        document.getElementById('yellow-count').innerText = yellowCount;
    } else if (color === '#7cea9b') { 
        greenCount++;
        document.getElementById('green-count').innerText = greenCount;
    } else if (color === '#3274de') { 
        blueCount++;
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
    changeBackgroundColor('#f28b82');
});

document.getElementById('yellow-btn').addEventListener('click', function() {
    changeBackgroundColor('#fdd663');
});

document.getElementById('green-btn').addEventListener('click', function() {
    changeBackgroundColor('#81c995');
});

document.getElementById('blue-btn').addEventListener('click', function() {
    changeBackgroundColor('#82b1ff');
});

document.getElementById('clear-btn').addEventListener('click', clearBoard);
