$(document).ready(function() {

    // Javascript code goes in here
    var list_of_characters = [];

    $("li > img").each(function() {
        list_of_characters.push({
            source: $(this).attr("src"),
            name:   $(this).attr("data-name"),
            age:    $(this).attr("data-age"),
            gender: $(this).attr("data-gender"),
            parent_class: $(this).parent().attr("class")
        });
    });

    console.log(list_of_characters);

    // Use jQuery UI
    $("ul").sortable().disableSelection();

    // Reset the order when the reset button is clicked
    $(".reset").click(function() {
        $.each(list_of_characters, function(index, character) {
            var destination = $("ul").children().eq(index),
                source = $("." + character.parent_class);
            source.insertBefore(destination);
        });
    });

});