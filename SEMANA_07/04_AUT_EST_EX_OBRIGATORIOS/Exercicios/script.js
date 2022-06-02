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
      if (1 <= pessoas && pessoas < 50) {
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
        if (1 <= pessoas && pessoas < 50){
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

  while (i < qtd) {
    document.getElementById('sistema').innerHTML += 
    `<div class="aluno"><input type="text" placeholder="Aluno"> </input>
    <input type="number" placeholder="Nota 1"></input> 
    <input type="number" placeholder="Nota 2"></input><br><br></div>`
    console.log(i)
    i++
  }
  document.getElementById('sistema').innerHTML += `<button onclick="">Calcular</button>`
}
