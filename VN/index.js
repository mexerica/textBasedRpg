const mainTxt = document.getElementById('mainTxt');
const img = document.getElementById('img');
let moment = 0;

changeMain = (txt, who) => {
    if (who === undefined) who = "";
    mainTxt.textContent = who + txt;
}

document.addEventListener("keydown", (e) => {
    if (e.key === 'z') {
        switch(moment){
            case 0: changeMain("Aquela imensidão vazia era familiar para ele, não importa em qual direção se olhasse, tudo que se via era a cor preta. Não havia nada, nem ninguém naquele lugar, a não ser ele. Era sempre assim, toda noite ele tinha esse mesmo sonho, então ficou fácil de saber quando não estava desperto."); break;
            case 1: changeMain("Ele conhecia outras formas de fazer essa verificação, como se olhar em um espelho (o que não era possível na situação) e olhar seu relógio de pulso. Um velho relógio digital ganhou a alguns anos. Por alguma razão os sonhos têm alergia em relação a ver as horas."); break;
            case 2: changeMain("Ao olhá-lo, ele marcava dez horas e sessenta e um minutos. Além de que a cor estava errada, seu relógio era amarelo e o que estava em seu pulso era vermelho. Ele ao confirmar sua idéia, uma dúvida imediatamente havia vindo em sua mente:"); break;
            case 3: changeMain("Quando eu dormi? Eu não lembro de ter ido me deitar, na realidade eu não me lembro de muita coisa.", "Você: "); break;
            case 4: changeMain();
        }
        setTimeout(moment++,5000);
    } 
    //img.style.display = 'inline';
});