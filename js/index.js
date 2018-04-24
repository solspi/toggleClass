

$("#grande").on('click', function(e){//con un click cambia su color

    $("#grande").toggleClass("rojo");

});


$("#izquierdaMediano").on('click', function(e){//con un click cambia color de su hermano de la derecha

    $("#derechaMediano").toggleClass("amarillo");

});


$("#derechaMediano").on('click', function(e){//con un click cambia color de su hermano de la izquierda

    $("#izquierdaMediano").toggleClass("amarillo");

});


$("#centroChico").on('click', function(e){//con un click cambia color de sus hermano laterales

    $("#izquierdaChico").toggleClass("azul");
    $("#derechaChico").toggleClass("azul");

});


