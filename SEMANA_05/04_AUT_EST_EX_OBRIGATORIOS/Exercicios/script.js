function soma() {
    var NUM1 = parseInt($("#NUM1").val())
    var NUM2 = parseInt($("#NUM2").val())
    var Result = 0
    Result = NUM1 + NUM2
    console.log(NUM1,'+', NUM2)
    console.log(Result)
    $("#resultado").append(`A <b>soma</b> entre ${NUM1} e ${NUM2} é ${Result}<br>`);
}

function menos() {
    var NUM1 = parseInt($("#NUM1").val())
    var NUM2 = parseInt($("#NUM2").val())
    var Result = 0
    Result = NUM1 - NUM2
    console.log(NUM1,'-', NUM2)
    console.log(Result)
    $("#resultado").append(`A <b>subtração</b> entre ${NUM1} e ${NUM2} é ${Result}<br>`);
}

function vezes() {
    var NUM1 = parseInt($("#NUM1").val())
    var NUM2 = parseInt($("#NUM2").val())
    var Result = 0
    Result = NUM1 * NUM2
    console.log(NUM1,'*', NUM2)
    console.log(Result)
    $("#resultado").append(`A <b>multiplicação</b> entre ${NUM1} e ${NUM2} é ${Result}<br>`);
}

function dividir() {
    var NUM1 = parseInt($("#NUM1").val())
    var NUM2 = parseInt($("#NUM2").val())
    var Result = 0
    Result = NUM1/NUM2
    console.log(NUM1,'/', NUM2)
    console.log(Result)
    $("#resultado").append(`A <b>divisão</b> entre ${NUM1} e ${NUM2} é ${Result}<br>`);
}

function dividircompleto() {    
    var NUM1 = parseInt($("#NUM1").val())
    var NUM2 = parseInt($("#NUM2").val())
    var sobra = NUM1%NUM2
    var quociente = ((NUM1 - sobra)/NUM2)
    $("#resultado").append(`A <b>divisão</b> completa entre ${NUM1} e ${NUM2} tem de ${sobra} de Sobra e ${quociente} de Quociente<br>`)
}

function modulo() {
    var NUM1 = parseInt($("#NUM1").val())
    var NUM2 = parseInt($("#NUM2").val())
    var Result = 0
    Result = NUM1 % NUM2
    console.log(NUM1,'%', NUM2)
    console.log(Result)
    $("#resultado").append(`O <b>módulo</b> entre ${NUM1} e ${NUM2} é ${Result}<br>`);
}

function precovalor() {
    var preco = parseInt($("#preco").val())
    console.log(preco)
    var cem = 0
    var cinquenta = 0
    var vinte = 0
    var dez = 0
    var cinco = 0
    var dois = 0
    var um = 0

    while (preco > 0) {
        if (preco >= 100) {
        cem = parseInt(preco/100)
        preco = preco - (cem * 100)
            console.log("Notas de cem: ", cem)
            console.log(preco)        
        }
        if (preco >= 50) {
        cinquenta = parseInt(preco/50)
        preco = preco - (cinquenta * 50)
        console.log("Notas de cinquenta: ", cinquenta)
            console.log(preco)
        }
        if (preco >= 20) {
            vinte = parseInt(preco/20)
            preco = preco - (vinte * 20)
            console.log("Notas de vinte: ", vinte)
                console.log(preco)
        }
        if (preco >= 10) {
        dez = parseInt(preco/10)
        preco = preco - (dez * 10)
        console.log("Notas de dez: ", dez)
            console.log(preco)
        }
        if (preco >= 5) {
        cinco = parseInt(preco/5)
        preco = preco - (cinco * 5)
        console.log("Notas de cinco: ", cinco)
            console.log(preco)
        }
        if (preco >= 2) {
        dois = parseInt(preco/2)
        preco = preco - (dois * 2)
        console.log("Notas de dois: ", dois)
            console.log(preco)
        }
        if (preco >= 1) {
        um = parseInt(preco/1)
        preco = preco - (um * 1)
        console.log("Notas de um: ", um)
        console.log(preco)
        }
        }
    console.log(preco)
    $("#resultadodesafio2").append(`<b>Você irá precisar de...</b><br> 
    ${cem} Notas de 100<br> 
    ${cinquenta} Notas de 50<br> 
    ${vinte} Notas de 20<br>
    ${dez} Notas de 10<br>
    ${cinco} Notas de 5<br>
    ${dois} Notas de 2<br>
    ${um} Notas de 1`)
    }

function descobrirarray() {
    var numeros = $("#string").val()
    var foco = $("#foco").val()
    var resposta = 0

    console.log(numeros)
    numeros = numeros.split(",")
    console.log(numeros)
    numeros = numeros.sort(function(a, b){return a-b})
    console.log(numeros)
    resposta = (numeros.indexOf(foco) + 1)
    console.log(resposta)

    $("#respostadesafio3").append(`<b>Ordem crescente dos números:</b><br> ${numeros}<br><br><b>Posição do seu número foco:</b><br>${resposta}<br>`)
}