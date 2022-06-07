function somaex1() {
    var test = +document.getElementById('numex1').value;
    console.log('teste', test)
    var number = 0;
    number = test += 1;
    console.log(number)
    document.getElementById('numex1').value = number;
}

function subtrex1() {
    let test = +document.getElementById('numex1').value
    let number = 0
    number = test - 1
    document.getElementById('numex1').value = number
}

function ex2trocar() {
    let num1 = document.getElementById('excase1').value
    let num2 = document.getElementById('excase2').value
    document.getElementById('excase1').value = num2
    document.getElementById('excase2').value = num1
}

function Numerocelular() {
    var numeroString = document.getElementById('celular').value
    var cleaned = ('' + numeroString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      document.getElementById('result').innerHTML = '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    else if (!match) {
        document.getElementById('result').innerHTML = 'Número não encontrado.'
    }
    return null;
  }

function contaviagem() {
    var diurno = document.getElementById('diurno');
    var noturno = document.getElementById('noturno');
    var pessoas = document.getElementById('pessoas').value;
    var preco = 0
    if (diurno.checked == true && (pessoas => 1)) {
      if (1 <= pessoas && pessoas <= 50) {
      preco = pessoas * 200
      console.log(preco)
      document.getElementById('resultadoconta').innerHTML = `Sua conta diurna de ${pessoas} pessoas é de R$${preco}`
      }
      else if (1 <= pessoas && pessoas > 50) {
      preco = pessoas * (200 * 0.6)
      console.log(preco)
      document.getElementById('resultadoconta').innerHTML = `Sua conta diurna de ${pessoas} pessoas é de R$${preco}`
      }
    }
    else if (noturno.checked == true && (pessoas => 1)) {
        if (1 <= pessoas && pessoas <= 50){
          preco = pessoas * 100
          console.log(preco)
          document.getElementById('resultadoconta').innerHTML = `Sua conta noturna de ${pessoas} pessoas é de R$${preco}`
        }
        else if (1 <= pessoas && pessoas > 50) {
          preco = pessoas * (100 * 0.8)
          console.log(preco)
          document.getElementById('resultadoconta').innerHTML = `Sua conta noturna de ${pessoas} pessoas é de R$${preco}`
        }
    }
    else {
        document.getElementById('resultadoconta').innerHTML = `Não foi possível realizar a conta.`
    }
}

function espacos() {
  var qtd = document.getElementById('qtdalunos').value
  var i = 0

  for (i = 0; i < qtd; i++) {
    document.getElementById('sistema').innerHTML += 
    `<div class="aluno">
    <input type="number" placeholder="Nota Prova" id="notaProvaAluno${i}"></input> 
    <input type="number" placeholder="Nota Trabalho" id="notaTrabAluno${i}"></input><br><br></div>`
    console.log(i)
  }
  document.getElementById('sistema').innerHTML += `<button onclick="calculoex5()">Calcular</button><br>`
}

function calculoex5() {
var qtd = document.getElementById('qtdalunos').value
var i = 0
var mediaAlunos = []
var mediaAlunosSoma = 0
var mediaProvasSoma = 0
var mediaTrabSoma = 0
var provaAlunos = []
var trabAlunos = []

for (i = 0; i < qtd; i++) {
  var nota1 = +document.getElementById('notaProvaAluno' + i).value;
  provaAlunos.push(nota1);
  var nota2 = +document.getElementById('notaTrabAluno' + i).value;
  trabAlunos.push(nota2);
  var media = ((nota1 * 2) + (nota2 * 3))/5
  console.log('i ', i);
  console.log("Nota Prova ",  nota1);
  console.log("Nota Trabalho ", nota2);
  console.log("Media ", media);
  mediaAlunos.push(media);
  console.log(mediaAlunos);
  console.log("Prova Alunos ", provaAlunos);
  console.log("Trab Alunos ", trabAlunos);
};

for (i = 0; i < qtd; i++) {
  MediaInd = mediaAlunos[i];

  MediaProvas = provaAlunos[i];
  MediaTrabs = trabAlunos[i];

  console.log(MediaInd);

  mediaAlunosSoma = mediaAlunosSoma + MediaInd;
  mediaProvasSoma = mediaProvasSoma + MediaProvas;
  mediaTrabSoma = mediaTrabSoma + MediaTrabs;

  console.log("Soma ", mediaAlunosSoma);
  console.log("Soma Provas ", mediaProvasSoma);
  console.log("Soma Trabs ", mediaTrabSoma);
  document.getElementById('sistema').innerHTML += `Media Aluno ${i + 1}: ${MediaInd}<br>`;
};

mediaAlunosSoma = mediaAlunosSoma/mediaAlunos.length;
mediaAlunosSoma = mediaAlunosSoma.toFixed(2);
console.log("Media Geral: ", mediaAlunosSoma);

document.getElementById('sistema').innerHTML += `Media Geral Alunos: ${mediaAlunosSoma}<br>`;

mediaProvasSoma = mediaProvasSoma/provaAlunos.length;
mediaTrabSoma = mediaTrabSoma/trabAlunos.length;
mediaProvasSoma = mediaProvasSoma.toFixed(2);
mediaTrabSoma = mediaTrabSoma.toFixed(2);
console.log("Media Provas: ", mediaProvasSoma);
console.log("Media Trabs: ", mediaTrabSoma);
document.getElementById('sistema').innerHTML += `Media Provas Alunos: ${mediaProvasSoma}<br>`;
document.getElementById('sistema').innerHTML += `Media Trabalhos Alunos: ${mediaTrabSoma}<br>`;

var minProva = Math.min(...provaAlunos)
var maxProva = Math.max(...provaAlunos)
console.log("Min Prova: ", minProva)
console.log("Max Prova: ", maxProva)
document.getElementById('sistema').innerHTML += `Nota mais baixa da Prova: ${minProva} | Nota mais alta da Prova: ${maxProva}<br>`

var minTrab = Math.min(...trabAlunos);
var maxTrab = Math.max(...trabAlunos);
console.log("Min Trab: ", minTrab)
console.log("Max Trab: ", maxTrab)
document.getElementById('sistema').innerHTML += `Nota mais baixa do Trabalho: ${minTrab} | Nota mais alta do Trabalho: ${maxTrab}<br>`
};