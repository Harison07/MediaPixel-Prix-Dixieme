function calculate() {
    var inputNumber = document.getElementById('inputNumber').value.trim();
    if (inputNumber === '') {
        alert("Veuillez entrer un nombre.");
        return;
    }
    var number = parseFloat(inputNumber);
    if (isNaN(number)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }
    var resultNumeric = number * 0.8;
    var resultLetter = convertToLetter(resultNumeric);
    document.getElementById('resultNumeric').innerText = "80% de " + number + " est : " + resultNumeric;
    document.getElementById('resultLetter').innerText = "En lettres : " + resultLetter;
}

function convertToLetter(num) {
    const units = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    const teens = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
    const tens = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];

    if (num === 0) {
        return 'zéro';
    }

    let result = '';

    if (num < 0) {
        result += 'moins ';
        num = Math.abs(num);
    }

    if (num >= 1000) {
        result += convertToLetter(Math.floor(num / 1000)) + ' mille ';
        num %= 1000;
    }

    if (num >= 100) {
        result += units[Math.floor(num / 100)] + ' cent ';
        num %= 100;
    }

    if (num >= 20) {
        result += tens[Math.floor(num / 10)];
        if (num % 10 !== 0) {
            result += '-' + units[num % 10];
        }
    } else if (num >= 10) {
        result += teens[num - 10];
    } else if (num > 0) {
        result += units[num];
    }

    return result.trim();
}

