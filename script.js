function generate() {
    function randomNumber(minNum, maxNum) {
        return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    }

    const minNum = parseInt(document.getElementById('minNum').value);
    const maxNum = parseInt(document.getElementById('maxNum').value);

    var raqam = randomNumber(minNum, maxNum);
    document.getElementById('output').innerHTML = raqam;
}