function calcularMedia() {

    let numeros = prompt("Digite os números separados por vírgula:").split(',');

    numeros = numeros.map(num => parseFloat(num.trim()));

    let soma = numeros.reduce((acc, num) => acc + num, 0);

    let media = soma / numeros.length;

    alert("A média dos números é: " + media);
}

calcularMedia();