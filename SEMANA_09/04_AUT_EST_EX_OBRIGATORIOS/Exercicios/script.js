function Exs1() {
let number = +document.getElementById('numberEx1').value;
let digito = String(number)[0];
let answer = (digito % 2);

if (answer == 0) {
    document.getElementById('ex1').innerHTML = `Seu número é par`;
    console.log(answer)
}
else if (answer == !0) {
    document.getElementById('ex1').innerHTML = `Seu número é impar`;
    console.log(answer)
}
}

function Exs2() {
    let number = document.getElementById('numberEx2').value;
    let answer = 0

    for (var i = 0; i < number.length; i++){
        answer += Number(number[i])
        console.log('Answer ', answer)
    }

    document.getElementById('ex2').innerHTML = `Sua soma de números é ${answer}.`
}

function Exs3() {
    let nome1 = document.getElementById('PriNome').value;
    let nome2 = document.getElementById('SegNome').value;
    let nome3 = document.getElementById('TerNome').value;
    let nomes = []
    nomes.push(nome1, nome2, nome3);
    console.log(nomes);
    nomes.sort();
    console.log(nomes);

    document.getElementById('ex3').innerHTML = `Seus nomes organizados: <br> ${nomes}`

}

function Exs4() {
    let Termo = document.getElementById('termo').value;
    let numero1 = 0
    let numero2 = 1
    let numero3 = 0
    document.getElementById('ex4').innerHTML = `A sequência até o termo ${Termo} é:<br>`
    for (let i = 0; i < Termo; i++) {
        numero3 = numero1 + numero2
        console.log('Prox Termo ', numero3);
        numero1 = numero2
        console.log('Numero 1: ', numero1)
        numero2 = numero3
        console.log('Numero 2: ', numero2)
        
    document.getElementById('ex4').innerHTML += `${numero3}, `
    }
}

function Exs5() {
    let PriNumero = document.getElementById('PriNumero').value;
    let SegNumero = document.getElementById('SegNumero').value;
        document.getElementById('ex5').innerHTML = (`Os números primos entre ${PriNumero} e ${SegNumero} são:<br>`)
    for (let i = PriNumero; i <= SegNumero; i++) {
        let divisivel = 0

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                divisivel = 1;
                break
            }
        }
        if (i > 1 && divisivel == 0) {
            document.getElementById('ex5').innerHTML += (`${i}, `)
        }
    }
}