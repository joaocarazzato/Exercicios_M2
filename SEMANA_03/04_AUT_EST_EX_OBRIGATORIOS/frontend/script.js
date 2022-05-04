/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "calc";

/* 
=======================
Event Listener
=======================
*/

/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var x0 = 10;
        var y0 = 20;
        // Alternativa equivalente: var x0 = 10, y0 = 20;
        CalcAddAndShow(x0, y0);
  }
}

document.getElementById("Checar").onclick = calculo;
/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAddAndShow(x, y){
    var op = "+";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
}


/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(x, y, op){
    var result;
    if (op == "+") {
        result = x + y;
    };
    return result;
}

function GetNome(){
    nome = document.getElementById("nome").value;
    alert(nome);
    console.log(nome);
}

function calculo() {
    var g = 10;
    var V0 = document.getElementById("nome").value;
    hmax = (V0 * V0)/(2*g)
    tempo = V0/g
    var pe = document.getElementById("result").innerHTML += `Altura: ${hmax}m | Tempo: ${tempo}s<br>`
}

/*function calcKwh() {
    console.log("Aqui")
    var Kwh = document.getElementById("Valor").value;
    var UnitKwh = document.getElementById("ValorUnit").value;
    if (Kwh < 100) {
        UnitKwh = UnitKwh
    }
    else if (Kwh >= 100 && Kwh <= 200) {
        UnitKwh = UnitKwh*1.25
    }
    else if (Kwh >= 200) {
        UnitKwh = UnitKwh*1.50
    }
    var valor = Kwh*UnitKwh
    alert(valor)
    var pe = document.getElementById("pe").innerHTML += `${valor}<br>`
}

/* Função que mostra a operação realizada */
function ShowOp(x, y, op){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${x} ${op} ${y} = `;
    //Alternativa: .. += "<br />" + x + " " + op + " " + y + " = "
}

/* Função que mostra o resultado obtido */
function ShowResult(res){
    document.getElementById(calcResDiv).innerHTML += res;
    document.querySelector('main').disabled = true;
}
