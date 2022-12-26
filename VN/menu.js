let timer = 0;
let color = "";
let x = 1;

function select () {
    const op = document.getElementById('op' + x);
    switch(timer){
        case 0: color = "#000000"; break;
        case 1: color = "#444444"; break;
        case 2: color = "#5b5b5b"; break;
        case 3: color = "#999999"; break;
        case 4: color = "#bcbcbc"; break;
        case 5: color = "#eeeeee"; break;
        case 6: color = "#f3f6f4"; break;
        default: color = "#ffffff"; break;
    }
    if (timer < 8) timer++;
    else timer = 0; 
    op.style.color = color;
}

function move(direction) {
    const op = document.getElementById('op' + x);
    op.style.color = "#ffffff";
    x += direction;
    if (x > 3) x = 1;
    else if(x < 1) x = 3;
}

function choice(){
    if (x == 1) window.location.href = 'index.html';
    return false;
}

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp": move(-1); break;
        case "ArrowDown": move(1); break;
        case "z": choice(); break;
        default: break;
    }
});

window.onload = function () {
    setInterval(select, 200);
};