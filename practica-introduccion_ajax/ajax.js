
$("#boton").click(function getDatos(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/comments?postId=1',
        type: 'GET',
        async: true,

        success: function(resultado) {

        var datos = $("#parrafo");
            $.each(resultado, function(index, value) {
            datos.append(
                `<p>PostId: ${value.postId} || id: ${value.id} || Nombre: ${value.name} || Email: ${value.email} || Body: ${value.body} </p>`
            );    
            });
        },
        
        error: function() {
            console.log("ERROR");
        }
    });
});