$('#subbtn').on('click', function(event) {
        event.preventDefault();
        // $('#palettes').html(''); 
    $("#palettes #box").remove();

    var colorName = $('#nameOfColor').val();
    var paleteNumber = $('#numOfPalette').val();
    var lum = $('#luminosity').val();

    console.log(colorName);
    console.log(paleteNumber);
    console.log(lum);

    var color = randomColor({hue: colorName, luminosity: lum, count: paleteNumber});

    $.each(color, function(i,clr)
    {
        var palette = $('<div id="box"><p></p><div>')
        palette.css({'background-color':clr });
        $('#palettes').append(palette);
        console.log(color[i]);

    })
});

