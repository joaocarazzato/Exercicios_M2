function showup() {
    $("more").toggleClass("hidden")
}



function teste() {
    console.log('teste')
    $("#answerQuestions").html('');
    $.get("http://localhost:3003/user", function(resultado){
        console.log(resultado)
        var count = 0
        console.log(resultado.length)
        while (count < resultado.length) {
            $("#answerQuestions").append('Nome: ', resultado[count].name, ', Pergunta: "', resultado[count].question, '" <br>');
            count++
            }
        // resultado.map((resul) => {
        //     $("#nome").append(resul.name, resul.age);
        // })
        
    }); 
}

function testecreate() {
    var name = $('#nome1').val();
    var question = $("#pergunta1").val();    
    console.log(name)
    console.log(question)
        $.post("http://localhost:3003/userCreate",
            {"name" : name, "question" : question},
            function(complete){
                console.log(complete)
            }
        )
        $("#answer").html('Mensagem Enviada!');
}

function testeupdate() {
    var name = $('#nome1').val();
    var question = $('#pergunta1').val()
    console.log(name);
    console.log(question);
        $.post('http://localhost:3003/userUpdate',
        {"name" : name, "question" : question},
        function(complete){
            console.log(complete)
        }
        )
        $("#answer").html('Mensagem Atualizada!');
}

function testedelete() {
    var name = $('#nome1').val();
    var question = $('#pergunta1').val()
    console.log(name);
    console.log(question);
        $.post('http://localhost:3003/userDelete',
        {"name" : name, "question" : question},
        function(complete){
            console.log(complete);
        }
        )
        $("#answer").html('Mensagem Deletada com sucesso.');
}