function showup() {
    $("more").toggleClass("hidden")
}



function teste() {
    console.log('teste')
    $.get("http://localhost:3003/user", function(resultado){
        console.log(resultado)
        var count = 0
        console.log(resultado.length)
        while (count < resultado.length) {
            $("#nome").append("Nome: ", resultado[count].name, " Idade: ", resultado[count].age+" <br>");
            count++
            }
        // resultado.map((resul) => {
        //     $("#nome").append(resul.name, resul.age);
        // })
        
    }); 
}