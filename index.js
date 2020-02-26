$(document).ready(function()
{
    // Cuando clicamos en el botón "instrucciones" vuelca el contenido de
    // "intrucciones.html" en el DIV con el id "contenido".
    $("#instrucciones").on("click", function()
    {
        $.ajax({url: "instrucciones.html", success: function(data){
            $("#contenido").html(data);
        }})
    })

    // Cuando clicamos en el botón "pokedex" 
    $("#pokedex").on("click", function(){

        // Volcamos los datos de "pokedex.json" en "dataJSON".
        $.ajax({url: "pokedex.json", success: function(dataJSON){
            // Pasamos el valor que entra en el input "numero" a la variable "numero".
            let numero = $("#numero").val();

            // A la variable "final" le añadimos el principio de la tabla.
            let final = ('<table class="table">'
            +   '<thead class="thead-dark">'
            +       '<tr>'
            +           '<th scope="col">ID</th>'
            +           '<th scope="col">Nombre</th>'
            +           '<th scope="col">Tipo</th>'
            +       '</tr>'
            +   '</thead>'
            +   '<tbody>');

            // Cogemos los datos de "dataJSON" y lo volcamos a "pokedex" dentro de esta función.
            $.each(dataJSON, function(i, pokedex){
                
                // Si no se ha pasado ningún valor por input se mostrará todo el contenido en la tabla.
                if (numero == "") {
                    final += pokemon(pokedex);
                } else {

                    // Comparamos el id del elemento y el valor del input y si este es menos o igual se muestra.
                    if (pokedex.id <= numero){
                        final += pokemon(pokedex);
                    }
                }
            })
           
            final += ("</tbody></table>");

            // Volcamos el contenido de la tabla completa al index.html.
            $("#contenido").html(final);
        }})
    })
})

function pokemon(pokedex) {
    let resultado = "";
    resultado += ("<tr>"
    +    "<th scope='row'>" + pokedex.id + "</th>"
    +    "<td>" + pokedex.name.english + "</td>"
    +    "<td>" + pokedex.type + "</td>"
    + "</tr>");

    return resultado;
}