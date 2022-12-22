const mainTxt = document.getElementById('mainTxt');
const img = document.getElementById('img');
let moment = 0;

changeMain = (txt) => {
    mainTxt.textContent = txt;
}

document.addEventListener("keydown", (e) => {
    if (e.key === 'z') {
        switch(moment){
            case 0: changeMain("Foi 1!"); break;
            case 1: changeMain("Foi 2!"); break;
            case 2: changeMain("Foi 3!"); break;
            default: changeMain("Foi 4!"); break;
        }
        setTimeout(moment++,5000);
    } 
    //img.style.display = 'inline';
});