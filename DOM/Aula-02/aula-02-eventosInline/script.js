function random(number) {
    return Math.floor(Math.random() * (number + 1))
}

function trocarCor() {
    var rndCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCor;
}