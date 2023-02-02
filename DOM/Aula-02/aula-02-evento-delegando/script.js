const container = document.getElementById('container');
container.addEventListener('click', trocarCor);

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function trocarCor(e) {
    var rndCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCor;
}