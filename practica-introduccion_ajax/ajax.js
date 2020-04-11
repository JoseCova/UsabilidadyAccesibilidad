
$("#boton").click(function getDatos(){
    let postiD = $("#zonatexto").val();
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/comments?postId=${postiD}`,
        type: 'GET',
        async: true,

        success: function(resultado) {

        let datos = $("#parrafo");
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