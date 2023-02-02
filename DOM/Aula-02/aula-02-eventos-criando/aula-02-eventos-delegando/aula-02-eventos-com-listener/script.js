const container = document.getElementById('container');
container.addEventListener('click', trocarCor);

const btn = document.querySelector('button');
btn.addEventListener('click', adicionar);

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function trocarCor(e) {
    var rndCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCor;
}

function adicionar() {
    var div = document.createElement("div");
    div.className = 'quadrado';
    div.style.backgroundColor = "rbg(100,100,100)";
    container.appendChild(div);
}